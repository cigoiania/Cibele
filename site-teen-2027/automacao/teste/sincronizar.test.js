// Testes da automação Drive → planilha → site (lógica pura do sincronizar-drive.gs).
// A amostra tem as extrações reais dos 32 arquivos da pasta INTERCAMBIO TEEN 2027 (IDs fictícios).
const test = require("node:test");
const assert = require("node:assert/strict");
const path = require("path");
const m = require(path.join(__dirname, "..", "sincronizar-drive.gs"));
const { COLUNAS: COLUNAS_DO_SITE } = require(path.join(__dirname, "..", "..", "ferramentas", "grupos.js"));
const amostra = require("./extracoes-pasta-2027.json");

const lidos = (entradas) => entradas.map((e) => ({ arquivo: e.arquivo, dados: m.normalizarExtracao(e.dados, 2027) }));
const grupos = (entradas) => m.montarGrupos(lidos(entradas), 2027);

test("os 32 arquivos da pasta viram 19 grupos (9 em janeiro, 10 em julho)", () => {
  const g = grupos(amostra.entradas);
  assert.equal(amostra.entradas.length, 32);
  assert.equal(g.length, 19);
  assert.equal(g.filter((x) => x.mes === "janeiro").length, 9);
  assert.equal(g.filter((x) => x.mes === "julho").length, 10);
  assert.equal(new Set(g.map((x) => x.id)).size, 19, "ids repetidos");
});

test("versões do mesmo grupo viram um cartão só (resumido × completo, antigo × novo)", () => {
  const g = grupos(amostra.entradas);
  const porId = Object.fromEntries(g.map((x) => [x.id, x]));
  assert.equal(porId["jan27-vancouver-0901"]._fontes.length, 3); // resumido ILAC (2 cópias) + completo novo
  assert.equal(porId["jan27-fort-erie-0401"]._fontes.length, 2); // 3W Niagara: arquivo antigo + "HS experience"
  assert.equal(porId["jul27-toronto-0307"]._fontes.length, 2); // Tamwood Toronto = "University Toronto"
  assert.notEqual(porId["jul27-toronto-0307"].id, porId["jul27-toronto-1007"].id); // UTM ≠ Toronto de casa de família
});

test("bloqueio aéreo e documentos que não são descritivo não viram grupo", () => {
  const g = grupos(amostra.entradas);
  const fontes = new Set(g.flatMap((x) => x._fontes));
  amostra.entradas.filter((e) => /bloqueio/.test(e.arquivo.nome)).forEach((e) => assert.ok(!fontes.has(e.arquivo.id)));
  assert.ok(m.CONFIG.IGNORAR_ARQUIVOS.test("grupo-ci-toronto-bloqueio-aereo.pdf"));
  assert.ok(!m.CONFIG.IGNORAR_ARQUIVOS.test("julho-2027-grupo-ci-kings-nyc-descritivo-completo.pdf"));
});

test("PDF apagado do Drive tira o grupo do site; apagar só uma das versões mantém o grupo", () => {
  const semDubai = amostra.entradas.filter((e) => !/dubai/i.test(e.arquivo.nome));
  const g1 = grupos(semDubai);
  assert.equal(g1.length, 18);
  assert.ok(!g1.some((x) => x.id === "jan27-dubai-0201"));

  const vancouver = amostra.entradas.filter((e) => /vancouver-descritivo-resumido/.test(e.arquivo.nome));
  const g2 = grupos(amostra.entradas.filter((e) => e !== vancouver[0]));
  assert.equal(g2.length, 19);
  assert.ok(g2.some((x) => x.id === "jan27-vancouver-0901"));
});

test("o descritivo completo mais recente vence e os outros só completam o que faltar", () => {
  const base = amostra.entradas.find((e) => /iels-malta-descritivo-completo/.test(e.arquivo.nome));
  const resumido = { arquivo: { id: "r", nome: "resumido.pdf", modificado: "9999999999999" }, dados: { ...base.dados, tipoDocumento: "resumido", escola: "ERRADA", clima: "" } };
  const completo = { arquivo: { id: "c", nome: "completo.pdf", modificado: "1" }, dados: { ...base.dados, clima: "" , aviso: "" } };
  const outroCompleto = { arquivo: { id: "c2", nome: "completo-velho.pdf", modificado: "0" }, dados: { ...base.dados, clima: "Verão quente" } };
  const [g] = grupos([resumido, completo, outroCompleto]);
  assert.equal(g.escola, base.dados.escola);
  assert.equal(g.clima, "Verão quente");
  assert.deepEqual(g._fontes, ["c", "c2", "r"]);
});

test("normalização: datas sem ano, mês pela data, hospedagem, país do tour e cidade ausente", () => {
  const d = m.normalizarExtracao({
    ehProgramaTeen: true, tipoDocumento: "completo", mes: "", pais: "Inglaterra + França", cidades: "",
    dataInicio: "26/06", dataFim: "18/07", acomodacao: "", acomodacaoDetalhe: "Homestay com família canadense",
    idadeMin: 17, idadeMax: 12, semanas: 3, passeios: ["Whistler", " "], inclui: [], naoInclui: [],
  }, 2027);
  assert.equal(d.dataInicio, "26/06/2027");
  assert.equal(d.mes, "julho");
  assert.equal(d.acomodacao, "Casa de família");
  assert.equal(d.pais, "Inglaterra");
  assert.equal(d.cidades, "Inglaterra");
  assert.deepEqual([d.idadeMin, d.idadeMax], [12, 17]);
  assert.deepEqual(d.passeios, ["Whistler"]);
});

test("normalização: nenhum valor em dinheiro chega à planilha pública", () => {
  const d = m.normalizarExtracao({
    ehProgramaTeen: true, mes: "julho", pais: "Malta", cidades: "Sliema", dataInicio: "09/07/2027", dataFim: "24/07/2027",
    resumo: "Pacote por USD 5.229 com tudo incluso", inclui: ["Curso", "Taxa de matrícula de € 120"], naoInclui: ["Passagem aérea"],
    passeios: [],
  }, 2027);
  assert.equal(d.resumo, "");
  assert.deepEqual(d.inclui, ["Curso"]);
  assert.match(d.observacoes, /removido valor/);
});

test("resposta da API: lê só os blocos de texto e trata recusa e corte", () => {
  const json = JSON.stringify({ ehProgramaTeen: true, tipoDocumento: "completo", mes: "julho", pais: "Canadá", cidades: "Toronto", dataInicio: "10/07/2027", dataFim: "24/07/2027", passeios: [], inclui: [], naoInclui: [] });
  const ok = m.lerRespostaDoClaude({ stop_reason: "end_turn", content: [{ type: "thinking", thinking: "" }, { type: "text", text: json }] }, 2027);
  assert.equal(ok.cidades, "Toronto");
  assert.throws(() => m.lerRespostaDoClaude({ stop_reason: "refusal", content: [] }, 2027), /recusou/);
  assert.throws(() => m.lerRespostaDoClaude({ stop_reason: "max_tokens", content: [] }, 2027), /cortada/);
  assert.throws(() => m.lerRespostaDoClaude({ stop_reason: "end_turn", content: [{ type: "text", text: "oi" }] }, 2027), /JSON/);
});

test("ajustes do time têm prioridade sobre o automático", () => {
  const g = grupos(amostra.entradas);
  const ajustados = m.aplicarAjustes(g, [
    { id: "jul27-nova-york-1307", status: "Últimas vagas", imagem: "https://exemplo.com/nyc.jpg", passeios: "A; B ;C", referencia: "texto livre" },
    { id: "jan27-dubai-0201", status: "oculto", resumo: "" },
  ]);
  const ny = ajustados.find((x) => x.id === "jul27-nova-york-1307");
  assert.equal(ny.status, "ultimas");
  assert.equal(ny.imagem, "https://exemplo.com/nyc.jpg");
  assert.deepEqual(ny.passeios, ["A", "B", "C"]);
  const dubai = ajustados.find((x) => x.id === "jan27-dubai-0201");
  assert.equal(dubai.status, "oculto");
  assert.ok(dubai.resumo.length > 0, "célula vazia não apaga o automático");
});

test("a aba Site sai com as mesmas colunas que o site lê", () => {
  assert.deepEqual(m.COLUNAS_SITE, COLUNAS_DO_SITE);
  const linhas = m.paraLinhas(grupos(amostra.entradas));
  assert.equal(linhas.length, 20);
  assert.deepEqual(linhas[0], COLUNAS_DO_SITE.map(([c]) => c));
  linhas.slice(1).forEach((l) => l.forEach((v) => assert.ok(typeof v !== "object", "célula com objeto")));
});

test("o esquema enviado ao Claude segue as regras de structured outputs", () => {
  const props = Object.keys(m.ESQUEMA.properties);
  assert.equal(m.ESQUEMA.additionalProperties, false);
  assert.deepEqual([...m.ESQUEMA.required].sort(), [...props].sort());
  const proibidos = /minLength|maxLength|minimum|maximum|multipleOf/;
  assert.ok(!proibidos.test(JSON.stringify(m.ESQUEMA)));
  assert.match(m.INSTRUCOES, /NUNCA escreva preços/);
});

test("planilha: datas convertidas pelo Sheets voltam para dd/mm/aaaa", () => {
  const t = m.lerTabela([["id", "data_inicio", "status"], ["a", new Date(2027, 0, 9), "aberto"], ["", "", ""]]);
  assert.deepEqual(t, [{ id: "a", data_inicio: "09/01/2027", status: "aberto" }]);
});

test("organização por subpastas: uma subpasta = um grupo, mesmo com datas diferentes entre as versões", () => {
  const base = amostra.entradas.find((e) => /kings-nyc/.test(e.arquivo.nome)).dados;
  const naPasta = (id, nome, pastaId, extra) => ({ arquivo: { id, nome, modificado: id, pastaId, pastaNome: "LANÇAMENTO | JULHO 2027 - Grupo CI: Kings NYC" }, dados: { ...base, ...extra } });
  const g = grupos([
    naPasta("1", "julho-2027-grupo-ci-kings-nyc-descritivo-completo.pdf", "pasta-kings", {}),
    naPasta("2", "julho-2027-grupo-ci-kings-nyc-descritivo-resumido.pdf", "pasta-kings", { tipoDocumento: "resumido", dataFim: "26/07/2027" }),
    naPasta("3", "outro-grupo.pdf", "pasta-outra", { cidades: "Nova York", dataInicio: "13/07/2027" }),
  ]);
  assert.equal(g.length, 2, "duas subpastas = dois grupos, mesmo com cidade e datas iguais");
  const kings = g.find((x) => x._fontes.includes("1"));
  assert.deepEqual(kings._fontes, ["1", "2"]);
  assert.equal(kings.dataFim, "27/07/2027", "vale o descritivo completo");
  assert.notEqual(g[0].id, g[1].id);
});

test("condições gerais e bloqueio aéreo das subpastas são ignorados pelo nome", () => {
  ["julho-2027-grupo-ci-malta-condicoes-gerais.pdf", "julho-2027-grupo-ci-malta-bloqueio-aereo.pdf", "grupo-ci-toronto-condições gerais.pdf"]
    .forEach((n) => assert.ok(m.CONFIG.IGNORAR_ARQUIVOS.test(n), n));
  ["julho-2027-grupo-ci-malta-descritivo-completo.pdf", "julho-2027-grupo-ci-malta-descritivo-resumido.pdf"]
    .forEach((n) => assert.ok(!m.CONFIG.IGNORAR_ARQUIVOS.test(n), n));
});

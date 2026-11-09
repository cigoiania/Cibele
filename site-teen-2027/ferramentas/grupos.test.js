const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("fs");
const path = require("path");
const { COLUNAS, carregar, validar, paraCsv } = require("./grupos");

const { html, config, grupos } = carregar();

test("os grupos publicados no site são válidos", () => {
  const r = validar(config, grupos);
  assert.deepEqual(r.erros, []);
});

test("a validação pega os erros mais comuns de edição", () => {
  const base = { ...grupos[0] };
  const ruins = [
    { ...base, id: "Com Espaço" },
    { ...base, id: "x1", mes: "agosto" },
    { ...base, id: "x2", dataInicio: "31/02/2027" },
    { ...base, id: "x3", acomodacao: "Apartamento" },
    { ...base, id: "x4", resumo: "A partir de USD 5.000 com tudo incluso" },
    { ...base, id: "x5", idadeMin: 18, idadeMax: 12 },
  ];
  ruins.forEach((g) => assert.equal(validar(config, [g]).ok, false, `deveria reprovar ${g.id}`));
  assert.equal(validar(config, [base, { ...base }]).ok, false, "id repetido deveria reprovar");
  assert.equal(validar({ ...config, whatsapp: "(62) 99999-0000" }, grupos).ok, false);
});

test("o site reconhece todas as colunas da planilha", () => {
  const bloco = html.slice(html.indexOf("var COLUNAS = {"), html.indexOf("};", html.indexOf("var COLUNAS = {")));
  COLUNAS.forEach(([coluna, campo]) => {
    assert.match(bloco, new RegExp(`\\b${coluna}: '${campo}'`), `coluna ${coluna} ausente no index.html`);
  });
});

test("o modelo de planilha tem o cabeçalho certo e gera grupos válidos", () => {
  const arquivo = path.join(__dirname, "..", `modelo-planilha-grupos-${config.ano}.csv`);
  const csv = fs.readFileSync(arquivo, "utf8");
  assert.equal(csv.split("\n")[0], COLUNAS.map(([c]) => c).join(","));
  assert.equal(paraCsv(grupos).split("\n")[0], csv.split("\n")[0]);
});

test("o bloco para o WordPress está delimitado e não depende do <head>", () => {
  const ini = html.indexOf("COPIAR DAQUI");
  const fim = html.indexOf("ATÉ AQUI");
  assert.ok(ini > 0 && fim > ini, "marcadores COPIAR DAQUI / ATÉ AQUI ausentes");
  const bloco = html.slice(ini, fim);
  ["window.CI_TEEN_CONFIG", "window.CI_TEEN_GRUPOS", 'id="ci-teen"', "<style>", "@import url("].forEach((t) =>
    assert.ok(bloco.includes(t), `${t} precisa estar dentro do bloco copiável`)
  );
});

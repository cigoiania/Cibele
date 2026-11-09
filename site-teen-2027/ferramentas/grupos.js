// Ferramentas do site-resumo do Intercâmbio Teen®.
// Lê a configuração e os grupos de dentro do index.html, valida e gera a planilha (CSV).
// Uso: node site-teen-2027/ferramentas/gerar-planilha.js  |  npm run validate:site-teen

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const HTML_PADRAO = path.join(__dirname, "..", "index.html");

// Mesma ordem e mesmos nomes que o index.html reconhece na planilha (bloco COLUNAS).
const COLUNAS = [
  ["id", "id"], ["mes", "mes"], ["status", "status"], ["selo", "selo"],
  ["pais", "pais"], ["cidades", "cidades"], ["escola", "escola"], ["titulo", "titulo"],
  ["idade_min", "idadeMin"], ["idade_max", "idadeMax"], ["semanas", "semanas"], ["duracao_texto", "duracaoTexto"],
  ["data_inicio", "dataInicio"], ["data_fim", "dataFim"],
  ["acomodacao", "acomodacao"], ["acomodacao_detalhe", "acomodacaoDetalhe"], ["refeicoes", "refeicoes"],
  ["aulas", "aulas"], ["nivel_ingles", "nivelIngles"], ["clima", "clima"],
  ["resumo", "resumo"], ["aviso", "aviso"],
  ["passeios", "passeios"], ["inclui", "inclui"], ["nao_inclui", "naoInclui"],
  ["imagem", "imagem"], ["pdf", "pdf"], ["investimento", "investimento"],
];
const LISTAS = new Set(["passeios", "inclui", "naoInclui"]);
const MESES = new Set(["janeiro", "julho"]);
const STATUS = new Set(["aberto", "ultimas", "esgotado", "embreve", "oculto"]);
const ACOMODACOES = new Set(["Casa de família", "Residência estudantil", "Hotel"]);
const MOEDA = /(R\$|US\$|\bUSD\b|\bCAD\b|\bAUD\b|\bEUR\b|\bGBP\b|€|£)\s*\d|\d\s*(reais|dólares|euros|libras)\b/i;

function lerScript(html, marcador) {
  const re = /<script\b[^>]*>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(html))) if (m[1].includes(marcador)) return m[1];
  throw new Error(`Bloco <script> com "${marcador}" não encontrado no index.html`);
}

function carregar(arquivo = HTML_PADRAO) {
  const html = fs.readFileSync(arquivo, "utf8");
  const contexto = { window: {} };
  vm.createContext(contexto);
  vm.runInContext(lerScript(html, "window.CI_TEEN_CONFIG"), contexto, { filename: "config" });
  vm.runInContext(lerScript(html, "window.CI_TEEN_GRUPOS"), contexto, { filename: "grupos" });
  return { html, config: contexto.window.CI_TEEN_CONFIG, grupos: contexto.window.CI_TEEN_GRUPOS };
}

function data(s) {
  const m = String(s || "").match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (!m) return null;
  const d = new Date(+m[3], +m[2] - 1, +m[1]);
  return d.getDate() === +m[1] && d.getMonth() === +m[2] - 1 ? d : null;
}

function validar(config, grupos) {
  const erros = [];
  const avisos = [];
  if (!config || typeof config !== "object") return { ok: false, erros: ["CI_TEEN_CONFIG ausente"], avisos };
  if (!Number.isInteger(config.ano)) erros.push("config.ano deve ser um número, ex.: 2027");
  if (!/^55\d{10,11}$/.test(String(config.whatsapp || ""))) erros.push("config.whatsapp deve ter só dígitos: 55 + DDD + número");
  if (!Array.isArray(grupos) || grupos.length === 0) return { ok: false, erros: erros.concat("Nenhum grupo cadastrado"), avisos };

  const ids = new Set();
  grupos.forEach((g, i) => {
    const nome = `grupo ${i + 1} (${g && g.id ? g.id : "sem id"})`;
    const e = (msg) => erros.push(`${nome}: ${msg}`);
    if (!g || typeof g !== "object") return e("não é um bloco { ... } válido");
    if (!/^[a-z0-9-]+$/.test(String(g.id || ""))) e("id deve ter só letras minúsculas, números e hífen");
    if (ids.has(g.id)) e("id repetido");
    ids.add(g.id);
    if (!MESES.has(g.mes)) e('mes deve ser "janeiro" ou "julho"');
    if (!STATUS.has(g.status || "aberto")) e(`status inválido: "${g.status}"`);
    if (!String(g.pais || "").trim()) e("pais vazio");
    if (!String(g.cidades || "").trim()) e("cidades vazio");
    const iMin = Number(g.idadeMin), iMax = Number(g.idadeMax);
    if (!Number.isInteger(iMin) || !Number.isInteger(iMax) || iMin < 5 || iMax > 21 || iMin > iMax) e("idadeMin/idadeMax inválidas");
    if (!Number.isInteger(Number(g.semanas)) || g.semanas < 1 || g.semanas > 12) e("semanas deve ser um número de 1 a 12");
    if (!ACOMODACOES.has(g.acomodacao)) e(`acomodacao deve ser uma de: ${[...ACOMODACOES].join(", ")}`);
    const ini = data(g.dataInicio), fim = data(g.dataFim);
    if (g.dataInicio && !ini) e(`dataInicio inválida: "${g.dataInicio}" (use dd/mm/aaaa)`);
    if (g.dataFim && !fim) e(`dataFim inválida: "${g.dataFim}" (use dd/mm/aaaa)`);
    if (ini && fim && fim < ini) e("dataFim antes da dataInicio");
    if (ini && Number.isInteger(config.ano)) {
      const okAno = ini.getFullYear() === config.ano || (ini.getFullYear() === config.ano - 1 && ini.getMonth() === 11);
      if (!okAno) e(`dataInicio fora do ano ${config.ano}`);
    }
    if (!ini) avisos.push(`${nome}: sem data (o site mostra "Datas em breve")`);
    ["imagem", "pdf"].forEach((k) => {
      if (g[k] && !/^https:\/\//.test(g[k])) e(`${k} deve começar com https://`);
    });
    if (!g.imagem) avisos.push(`${nome}: sem foto (o cartão usa o fundo da marca)`);
    if (!g.pdf) avisos.push(`${nome}: sem link do descritivo em PDF`);
    LISTAS.forEach((k) => {
      if (g[k] !== undefined && (!Array.isArray(g[k]) || g[k].some((x) => typeof x !== "string" || !x.trim()))) e(`${k} deve ser uma lista de textos`);
    });
    if (String(g.resumo || "").length > 650) e("resumo muito longo (máx. 650 caracteres)");
    Object.entries(g).forEach(([k, v]) => {
      if (k === "investimento") return;
      const texto = Array.isArray(v) ? v.join(" ") : String(v);
      if (MOEDA.test(texto)) e(`campo "${k}" tem valor em dinheiro; use só o campo investimento, com aprovação do time`);
    });
  });
  return { ok: erros.length === 0, erros, avisos };
}

function celula(v) {
  const s = Array.isArray(v) ? v.join("; ") : v == null ? "" : String(v);
  return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

function paraCsv(grupos) {
  const linhas = [COLUNAS.map(([c]) => c).join(",")];
  grupos.forEach((g) => linhas.push(COLUNAS.map(([, k]) => celula(g[k])).join(",")));
  return linhas.join("\n") + "\n";
}

module.exports = { COLUNAS, carregar, validar, paraCsv, HTML_PADRAO };

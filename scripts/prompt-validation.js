const crypto = require("crypto");
const fs = require("fs");

const MIN_PROMPT_LENGTH = 2000;
const MAX_PROMPT_LENGTH = 100000;

const requiredPatterns = [
  ["identidade da IA", /^#{1,3}\s+(QUEM É VOCÊ|IDENTIDADE DA IA)(?:\s|$)/im],
  ["missão ou objetivos", /^#{1,3}\s+(SUA MISSÃO|OBJETIVOS?)(?:\s|$)/im],
  ["fluxo de atendimento", /^#{1,3}\s+(COMO VOCÊ CONDUZ|FLUXO DE ATENDIMENTO)(?:\s|$)/im],
  ["restrições", /^#{1,3}\s+(O QUE VOCÊ NUNCA FAZ|RESTRIÇÕES)(?:\s|$)/im],
  ["encaminhamento ao consultor", /consultor/i],
  ["proibição de inventar", /(?:n(?:ã|a)o|nunca)[^\n]{0,50}invent/i],
  ["regra de Au Pair", /Au Pair/i],
  ["estilo WhatsApp", /WhatsApp/i],
];

function normalizePrompt(value) {
  return typeof value === "string" ? value.replace(/\r\n/g, "\n").trim() : "";
}

function validatePrompt(value) {
  const prompt = normalizePrompt(value);
  const errors = [];
  if (!prompt) return { ok: false, prompt, errors: ["O prompt está vazio."] };
  if (prompt.length < MIN_PROMPT_LENGTH) errors.push(`O prompt tem menos de ${MIN_PROMPT_LENGTH} caracteres.`);
  if (prompt.length > MAX_PROMPT_LENGTH) errors.push(`O prompt ultrapassa ${MAX_PROMPT_LENGTH} caracteres.`);
  for (const [label, pattern] of requiredPatterns) {
    if (!pattern.test(prompt)) errors.push(`Conteúdo obrigatório ausente: ${label}.`);
  }
  return { ok: errors.length === 0, prompt, errors };
}

function shortHash(value) {
  return crypto.createHash("sha256").update(normalizePrompt(value), "utf8").digest("hex").slice(0, 12);
}

function readPrompt(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

module.exports = { readPrompt, shortHash, validatePrompt };

const test = require("node:test");
const assert = require("node:assert/strict");
const { shortHash, validatePrompt } = require("./prompt-validation");

const validPrompt = `
# QUEM É VOCÊ
Cibele da CI Intercâmbio.
# SUA MISSÃO
Qualificar e levar ao consultor.
# COMO VOCÊ CONDUZ A CONVERSA
Conversa curta como no WhatsApp.
# BASE
Au Pair possui regras próprias.
# O QUE VOCÊ NUNCA FAZ
Não invente informações.
${"Informação comercial confirmada. ".repeat(100)}
`;

test("valida o contrato mínimo do prompt", () => {
  assert.equal(validatePrompt(validPrompt).ok, true);
});

test("rejeita perda de seção crítica", () => {
  assert.equal(validatePrompt(validPrompt.replace("# O QUE VOCÊ NUNCA FAZ", "# OUTRO")).ok, false);
});

test("hash ignora espaços externos", () => {
  assert.equal(shortHash(validPrompt), shortHash(` ${validPrompt.trim()} `));
});

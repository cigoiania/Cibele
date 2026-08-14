const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { findConversationFiles, validateDirectory } = require("./validate-conversations");

function validConversation() {
  return {
    schemaVersion: 1,
    createdAt: "2026-08-13T20:36:01.122Z",
    source: "cibele-atendimento.vercel.app",
    sessionId: "web-teste-subpasta",
    promptVersion: "93e29a9392a8",
    status: "pendente",
    feedback: "Teste em subpasta por data.",
    notice: "Conversa de teste. Não usar como verdade comercial sem validação explícita do Marcelo.",
    messages: [
      { role: "user", content: "Olá" },
      { role: "assistant", content: "Oi, como posso ajudar?" },
    ],
  };
}

function tempPendentes() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "conversas-pendentes-"));
  const subDir = path.join(dir, "2026-08-13");
  fs.mkdirSync(subDir, { recursive: true });
  return { dir, subDir };
}

test("encontra e valida conversa válida em subpasta por data", () => {
  const { dir, subDir } = tempPendentes();
  const file = path.join(subDir, "valida.json");
  fs.writeFileSync(file, JSON.stringify(validConversation()));

  const found = findConversationFiles(dir);
  assert.equal(found.length, 1);
  assert.equal(found[0], file);

  const { failed } = validateDirectory(dir);
  assert.equal(failed, false);
});

test("arquivo inválido em subpasta causa falha", () => {
  const { dir, subDir } = tempPendentes();
  const invalid = validConversation();
  invalid.status = "aprovada"; // status inválido (só "pendente" é aceito)
  fs.writeFileSync(path.join(subDir, "invalida.json"), JSON.stringify(invalid));

  const { failed, results } = validateDirectory(dir);
  assert.equal(failed, true);
  assert.ok(results[0].errors.length > 0);
});

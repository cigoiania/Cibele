const test = require("node:test");
const assert = require("node:assert/strict");
const { validateConversation } = require("./conversation-validation");

function validConversation() {
  return {
    schemaVersion: 1,
    createdAt: "2026-08-12T14:30:00.000Z",
    source: "cibele-atendimento.vercel.app",
    sessionId: "web-teste-123",
    promptVersion: "93e29a9392a8",
    status: "pendente",
    feedback: "Testar uma resposta mais curta.",
    notice: "Conversa de teste. Não usar como verdade comercial sem validação explícita do Marcelo.",
    messages: [
      { role: "user", content: "Olá" },
      { role: "assistant", content: "Oi, como posso ajudar?" },
    ],
  };
}

test("aceita uma conversa de teste bem formada", () => {
  assert.deepEqual(validateConversation(validConversation(), 500), []);
});

test("recusa origem, estado e mensagens inválidas", () => {
  const conversation = validConversation();
  conversation.source = "origem-nao-autorizada";
  conversation.status = "aprovada";
  conversation.messages[0].role = "system";
  assert.equal(validateConversation(conversation, 500).length, 3);
});

test("recusa arquivo excessivo e campos fora dos limites", () => {
  const conversation = validConversation();
  conversation.feedback = "x".repeat(4_001);
  conversation.messages[1].content = "x".repeat(20_001);
  const errors = validateConversation(conversation, 256 * 1024 + 1);
  assert.equal(errors.length, 3);
});

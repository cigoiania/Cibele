const fs = require("node:fs");

const MAX_FILE_BYTES = 256 * 1024;
const MAX_MESSAGES = 200;
const MAX_MESSAGE_CHARS = 20_000;
const MAX_FEEDBACK_CHARS = 4_000;

function validateConversation(value, byteLength = 0) {
  const errors = [];

  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return ["A conversa precisa ser um objeto JSON."];
  }
  if (byteLength > MAX_FILE_BYTES) errors.push("O arquivo excede 256 KB.");
  if (value.schemaVersion !== 1) errors.push("schemaVersion deve ser 1.");
  if (!value.createdAt || Number.isNaN(Date.parse(value.createdAt))) {
    errors.push("createdAt precisa ser uma data ISO válida.");
  }
  if (value.source !== "cibele-atendimento.vercel.app") {
    errors.push("source não corresponde ao aplicativo autorizado.");
  }
  if (typeof value.sessionId !== "string" || !/^[A-Za-z0-9._-]{6,120}$/.test(value.sessionId)) {
    errors.push("sessionId inválido.");
  }
  if (value.promptVersion != null && !/^[a-f0-9]{12}$/.test(value.promptVersion)) {
    errors.push("promptVersion deve conter 12 caracteres hexadecimais.");
  }
  if (value.status !== "pendente") errors.push("status deve ser pendente.");
  if (typeof value.feedback !== "string" || value.feedback.length > MAX_FEEDBACK_CHARS) {
    errors.push("feedback inválido ou muito longo.");
  }
  if (typeof value.notice !== "string" || !value.notice.includes("Não usar como verdade comercial")) {
    errors.push("O aviso obrigatório está ausente.");
  }
  if (!Array.isArray(value.messages) || value.messages.length < 2 || value.messages.length > MAX_MESSAGES) {
    errors.push("messages deve conter entre 2 e 200 mensagens.");
  } else {
    value.messages.forEach((message, index) => {
      if (!message || typeof message !== "object" || !["user", "assistant"].includes(message.role)) {
        errors.push(`Mensagem ${index + 1}: role inválido.`);
      }
      if (typeof message?.content !== "string" || !message.content.trim() || message.content.length > MAX_MESSAGE_CHARS) {
        errors.push(`Mensagem ${index + 1}: content inválido ou muito longo.`);
      }
    });
  }

  return errors;
}

function readAndValidateConversation(filePath) {
  const buffer = fs.readFileSync(filePath);
  let value;
  try {
    value = JSON.parse(buffer.toString("utf8"));
  } catch {
    return ["O arquivo não contém JSON válido."];
  }
  return validateConversation(value, buffer.length);
}

module.exports = { readAndValidateConversation, validateConversation };

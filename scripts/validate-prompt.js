const path = require("path");
const { readPrompt, shortHash, validatePrompt } = require("./prompt-validation");

const filePath = process.env.PROMPT_FILE || path.join(__dirname, "..", "prompt", "system-prompt-cibele.md");
const result = validatePrompt(readPrompt(filePath));

if (!result.ok) {
  console.error("Prompt rejeitado:");
  result.errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`Prompt válido · versão ${shortHash(result.prompt)} · ${result.prompt.length} caracteres`);

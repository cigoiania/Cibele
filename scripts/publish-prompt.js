const path = require("path");
const { readPrompt, shortHash, validatePrompt } = require("./prompt-validation");

async function main() {
  const endpoint = process.env.PROMPT_SYNC_URL || "https://cibele-atendimento.vercel.app/api/sync-prompt";
  const token = process.env.PROMPT_SYNC_TOKEN;
  const filePath = process.env.PROMPT_FILE || path.join(__dirname, "..", "prompt", "system-prompt-cibele.md");

  if (!token) throw new Error("PROMPT_SYNC_TOKEN não configurado nos Secrets do GitHub.");

  const validation = validatePrompt(readPrompt(filePath));
  if (!validation.ok) throw new Error(`Prompt rejeitado: ${validation.errors.join(" ")}`);

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "X-Prompt-Source": "github-actions",
    },
    body: JSON.stringify({ systemPrompt: validation.prompt }),
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.error || `A API de publicação respondeu ${response.status}.`);
  }

  const expectedVersion = shortHash(validation.prompt);
  if (data.version !== expectedVersion) {
    throw new Error(`Versão publicada ${data.version || "desconhecida"} difere da esperada ${expectedVersion}.`);
  }

  console.log(data.changed
    ? `Prompt ${data.version} sincronizado com sucesso.`
    : `Prompt ${data.version} já estava sincronizado.`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});

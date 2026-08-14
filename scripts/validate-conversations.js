const fs = require("node:fs");
const path = require("node:path");
const { readAndValidateConversation } = require("./conversation-validation");

const baseDirectory = path.join(__dirname, "..", "conversas", "pendentes");

// Percorre recursivamente o diretório, incluindo subpastas por data
// (ex.: conversas/pendentes/2026-08-13/*.json), e retorna os caminhos .json.
function findConversationFiles(directory) {
  const found = [];
  let entries;
  try {
    entries = fs.readdirSync(directory, { withFileTypes: true });
  } catch {
    return found;
  }
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      found.push(...findConversationFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".json")) {
      found.push(fullPath);
    }
  }
  return found.sort();
}

function validateDirectory(directory) {
  const files = findConversationFiles(directory);
  const results = files.map((file) => ({ file, errors: readAndValidateConversation(file) }));
  return { files, results, failed: results.some((result) => result.errors.length > 0) };
}

function runCli(directory) {
  const { files, results, failed } = validateDirectory(directory);
  for (const { file, errors } of results) {
    const label = path.relative(directory, file);
    if (errors.length) {
      console.error(`${label}:`);
      errors.forEach((error) => console.error(`- ${error}`));
    } else {
      console.log(`Conversa válida: ${label}`);
    }
  }
  if (!files.length) console.log("Nenhuma conversa pendente para validar.");
  return failed;
}

if (require.main === module) {
  if (runCli(baseDirectory)) process.exit(1);
}

module.exports = { findConversationFiles, validateDirectory };

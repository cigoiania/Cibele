const fs = require("node:fs");
const path = require("node:path");
const { readAndValidateConversation } = require("./conversation-validation");

const directory = path.join(__dirname, "..", "conversas", "pendentes");
const files = fs.readdirSync(directory).filter((name) => name.endsWith(".json")).sort();
let failed = false;

for (const name of files) {
  const errors = readAndValidateConversation(path.join(directory, name));
  if (errors.length) {
    failed = true;
    console.error(`${name}:`);
    errors.forEach((error) => console.error(`- ${error}`));
  } else {
    console.log(`Conversa válida: ${name}`);
  }
}

if (failed) process.exit(1);
if (!files.length) console.log("Nenhuma conversa pendente para validar.");

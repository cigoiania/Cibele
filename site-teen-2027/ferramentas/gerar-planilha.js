// Valida os grupos do index.html e (re)gera o modelo de planilha para o Google Sheets.
//   npm run validate:site-teen          → só valida
//   npm run site-teen:planilha          → valida e regrava site-teen-2027/modelo-planilha-grupos-2027.csv
const fs = require("fs");
const path = require("path");
const { carregar, validar, paraCsv } = require("./grupos");

const { config, grupos } = carregar();
const r = validar(config, grupos);

r.avisos.forEach((a) => console.log(`aviso: ${a}`));
if (!r.ok) {
  console.error("\nGrupos com problema:");
  r.erros.forEach((e) => console.error(`- ${e}`));
  process.exit(1);
}

const jan = grupos.filter((g) => g.mes === "janeiro" && g.status !== "oculto").length;
const jul = grupos.filter((g) => g.mes === "julho" && g.status !== "oculto").length;
console.log(`\nGrupos válidos · ${config.ano} · janeiro: ${jan} · julho: ${jul}`);

if (process.argv.includes("--planilha")) {
  const destino = path.join(__dirname, "..", `modelo-planilha-grupos-${config.ano}.csv`);
  fs.writeFileSync(destino, paraCsv(grupos), "utf8");
  console.log(`Planilha gravada em ${path.relative(process.cwd(), destino)}`);
}

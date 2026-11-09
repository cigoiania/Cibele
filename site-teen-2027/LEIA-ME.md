# Site-resumo · Intercâmbio Teen® 2027

Página-resumo dos grupos de **janeiro e julho de 2027**, feita a partir do site de 2026
(<https://ci.goiania.br/info-intercambio-teen-2026/>) e preenchida com os descritivos da pasta
**INTERCAMBIO TEEN 2027** do Drive (32 arquivos lidos em 09/11/2026 → **19 grupos**: 9 em janeiro e
10 em julho, já sem duplicatas).

| Arquivo | Para que serve |
|---|---|
| `index.html` | A página inteira, num arquivo só: configuração, lista de grupos, visual e funcionamento. Abre direto no navegador. |
| `automacao/` | **Atualização automática pelo Drive**: PDF novo na pasta entra no site, PDF apagado sai. Instalação em `automacao/COMO-INSTALAR.md`. |
| `modelo-planilha-grupos-2027.csv` | A mesma lista em formato de planilha, para a opção de planilha manual (opção C). |
| `ferramentas/` | Validação automática dos grupos (para quem edita pelo Claude ou pelo GitHub). |

> **Fonte dos grupos (recomendado): a pasta INTERCAMBIO TEEN 2027 do Drive.** Com a automação instalada,
> o time só cuida da pasta: subiu o descritivo, o grupo aparece no site em 10 a 15 minutos; apagou, ele sai.
> Vagas, fotos, link do PDF e correções ficam na aba **Ajustes** da planilha que a automação cria.
> A lista de grupos dentro do `index.html` vira só reserva, usada se a planilha não abrir.
> Passo a passo, custos e limites: [`automacao/COMO-INSTALAR.md`](automacao/COMO-INSTALAR.md).

---

## O que melhorou em relação ao site de 2026

- **Filtros**: mês (abas), país, **idade do estudante**, duração e tipo de hospedagem.
- **Modo "Comparar"**: tabela com todos os grupos lado a lado (destino, escola, datas, idade, duração e hospedagem).
- **Cartão mais claro**: idade, duração, datas e hospedagem logo de cara. Em "Passeios, o que está incluso e mais"
  ficam os destaques do roteiro, as aulas, as refeições, o clima e as listas do que está e não está incluso.
- **Avisos no cartão** para o que costuma gerar dúvida: almoço não incluso (CEL San Diego), high school com
  Líder CI só até o campus (Niagara), trilhas que pedem inglês intermediário (ES Londres) etc.
- **WhatsApp com a mensagem pronta**, citando o grupo e o mês. **Um número só**, configurável num lugar.
- **Botão de compartilhar**: gera o link direto de um grupo (ex.: `…/#g-jul27-nova-york-kings`). O consultor
  manda para o lead e a página já abre naquele cartão, destacado.
- **Como funciona, passo a passo pós-fechamento e dúvidas frequentes**, com o texto dos descritivos de 2027.
- **Feito para celular** e leve: um bloco só, em vez de dezenas de widgets do Elementor.
- **Mede os cliques** no WhatsApp e nos PDFs se o Google Analytics ou o Meta Pixel estiverem na página.
- **Sem valores**, como no site de 2026. Existe um campo `investimento`, desligado (`mostrarInvestimento: false`).

---

## Como publicar: três caminhos

### Opção A (recomendada): página do WordPress com o widget HTML do Elementor

Mantém o domínio, o SEO (Rank Math), o Site Kit e o Pixel que o site já usa.

1. **Páginas › Adicionar nova** e dê um título (ex.: "Intercâmbio Teen 2027") › **Editar com Elementor**.
2. Na engrenagem (Configurações da página) › **Layout: Elementor Canvas** (página sem o cabeçalho do tema).
   Se preferir manter o menu do site, use **Elementor Largura total** e mude `mostrarTopo: false` no arquivo.
3. Arraste o widget **HTML** para um contêiner/seção com **largura total** e espaçamento 0.
4. Abra o `index.html` num editor de texto (Bloco de Notas, TextEdit em modo texto simples ou VS Code),
   copie **tudo o que está entre `▼▼▼ COPIAR DAQUI` e `▲▲▲ ATÉ AQUI`** e cole no widget.
5. **Publicar**. Ajuste o link da página (ex.: `info-intercambio-teen-2027`) e o título/descrição no Rank Math.
6. Se o site tiver plugin de cache, **limpe o cache** depois de cada alteração.

> É preciso entrar com usuário **Administrador**: o WordPress só aceita scripts no widget HTML para quem tem essa permissão.
> O botão flutuante de WhatsApp do bloco se desliga sozinho quando o plugin *Click to Chat* já está na página.

### Opção B: arquivo direto na HostGator (sem WordPress)

1. **cPanel › Gerenciador de Arquivos › `public_html`** › crie a pasta `teen-2027`.
2. Envie o `index.html` para dentro dela.
3. A página fica em `https://ci.goiania.br/teen-2027/`.

É o caminho mais rápido e não depende do Elementor. Mas não passa pelo Rank Math nem pelo Site Kit: para medir
acessos, cole o código do Analytics/Pixel no `<head>` do arquivo (há um espaço marcado para isso).
Para editar depois: Gerenciador de Arquivos › clique no `index.html` › **Editar**.

### Opção C: grupos numa Planilha Google preenchida à mão (combina com A ou B)

Só para quem **não** for usar a automação pelo Drive (que já cria e preenche a planilha sozinha).
O time edita **só a planilha** e o site se atualiza sozinho.

1. No Google Sheets: **Arquivo › Importar › Fazer upload** do `modelo-planilha-grupos-2027.csv`.
2. **Arquivo › Compartilhar › Publicar na Web** › escolha a aba dos grupos › formato **CSV** › Publicar › copie o link.
3. Cole o link uma única vez em `planilhaCsvUrl` (no começo do `index.html` ou do bloco colado no WordPress).
4. Pronto. Cada alteração na planilha aparece no site em alguns minutos (o Google demora um pouco para republicar).

- Nas colunas `passeios`, `inclui` e `nao_inclui`, separe os itens com **ponto e vírgula**.
- Se a planilha sair do ar ou o link estiver errado, o site usa a lista que está dentro do arquivo.
- A planilha publicada fica **pública** (o conteúdo já é público no site). Não coloque nada interno nela.
- ⚠️ Testado com o mesmo CSV servido localmente (resultado idêntico ao da lista do arquivo), mas **ainda não com uma
  planilha publicada de verdade**. Confira uma vez ao ligar.

---

## Como editar os grupos (sem planilha)

No `index.html`, o bloco **2) GRUPOS 2027** tem um `{ … }` por programa.

- **Adicionar**: copie um bloco inteiro (de `{` até `},`), cole abaixo e troque o `id` (só minúsculas, números e hífen).
- **Tirar do ar sem apagar**: `status: "oculto"`.
- **Situação das vagas** (`status`): `"aberto"` (Inscrições abertas), `"ultimas"` (Últimas vagas), `"esgotado"`
  (o botão vira "Lista de espera") e `"embreve"`.
- **Hospedagem** (`acomodacao`, usada no filtro): `"Casa de família"`, `"Residência estudantil"` ou `"Hotel"`.
  O detalhe vai em `acomodacaoDetalhe`.
- **Datas** em `dd/mm/aaaa`. Vazias, o cartão mostra "Datas em breve".
- **Fotos**: suba no WordPress (Mídia › Adicionar), copie a URL e cole em `imagem`. O ideal é **1250 × 770**,
  o padrão das fotos de 2026, com a bandeira no canto direito. Sem foto, o cartão usa o fundo da marca com o nome da cidade.
- **PDF do descritivo**: suba o descritivo completo no WordPress (Mídia), copie a URL e cole em `pdf`. Sem link,
  o botão do PDF não aparece. Cada grupo tem um comentário `// Drive: …` com o nome do arquivo certo.
- **Textos fixos** (Como funciona, Dúvidas, rodapé): ficam no bloco **3) ESTRUTURA DA PÁGINA**.
- **WhatsApp, ano, mensagens, foto do topo**: bloco **1) CONFIGURAÇÃO GERAL**.

---

## ⚠️ Antes de publicar: o que o time precisa confirmar

1. **Número do WhatsApp** (`whatsapp`). Está `(62) 99911-9100`. O site de 2026 usava três números:
   (62) 99911-9100 nos botões de julho, (62) 3911-0100 no "eu quero" e **`wa.me/5555629991191` nos botões de
   janeiro, que é um número errado** (o "55" aparece duas vezes e manda a mensagem para o DDD 55). Vale corrigir
   também no site de 2026, que ainda está no ar.
2. **Escola dos grupos de janeiro em Toronto e Vancouver: ILAC ou ILSC?** Os descritivos completos novos
   apresentam a ILSC. Os resumidos, os bloqueios aéreos e as 26 lições por semana apontam para a ILAC. No site está **ILAC**.
3. **Grupos cujo descritivo novo tirou o nome da escola**: Vancouver + Rockies (antes ILAC), Toronto de julho
   (a versão do drive compartilhado diz ILAC) e Toronto University (antes Tamwood). No site estão sem escola ou
   com o nome do campus. Confirmar se é isso mesmo.
4. **Erros nos PDFs** (corrigir antes de subir no site):
   - ES Londres + Paris (resumido): a capa diz "JUL/26", mas o grupo é de janeiro de 2027;
   - IELS Malta (resumido): data final "24/07/26";
   - EC Malta: os dias 17 a 22 do day by day repetem os dias 11 a 15, e há o erro "Jolly Jum";
   - Ardmore: "Convent Garden" (o certo é Covent Garden);
   - BlueSky: "Currambine" (provavelmente Currumbin);
   - 3W Niagara: os livros aparecem como inclusos numa seção e como não inclusos no resumo.
5. **Fotos** para os quatro grupos novos: Brisbane + Sydney, Fort Erie/Niagara, Bournemouth e Orlando.
6. **Subir os PDFs** no WordPress e preencher os links (`pdf`).
7. **Situação das vagas**: todos os grupos estão como "Inscrições abertas".
8. **Vancouver + Rockies**: o PDF diz que o almoço é um *packed lunch*, mas não diz quem fornece.
9. **Grupos de 2026 que não estão na pasta de 2027** (Ste Cécile, Encompass LA, EC Brighton + Paris,
   Ardmore NY + LA, VGC, Toronto + French Canada, St Giles Londres e Cambridge, Ardmore Hertfordshire,
   Alpadia Paris e Future Learning Dublin). Se algum voltar, basta adicionar um bloco.

As datas de cada cartão vão do **embarque em Guarulhos (dia 1) até a data final** do "Quando acontece o programa?"
de cada descritivo. O grupo da UBC embarca em 26/06 e está na aba de julho.

---

## Para quem edita pelo Claude ou pelo GitHub

```bash
npm run validate:site-teen    # confere os grupos (datas, idades, ids, links e nenhum valor fora do campo investimento)
npm run site-teen:planilha    # confere e regrava o modelo-planilha-grupos-2027.csv a partir do index.html
npm test                      # roda todos os testes do repositório, inclusive os do site e da automação
```

A automação (`automacao/sincronizar-drive.gs`) roda no Google Apps Script, mas a parte que não depende do Google
(leitura da resposta do Claude, limpeza dos dados, união de versões, ajustes e linhas da planilha) é testada em
`automacao/teste/`, com as extrações reais dos 32 arquivos da pasta (IDs fictícios).

Para o ano seguinte: copie a pasta para `site-teen-2028/`, troque `ano: 2028` e substitua os grupos.

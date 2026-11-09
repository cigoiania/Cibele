# Atualização automática do site pelo Drive

Com esta automação, a pasta **INTERCAMBIO TEEN 2027** do Drive passa a ser a fonte do site:

- **Subiu um descritivo (PDF) na pasta** → em 10 a 15 minutos o grupo aparece no site.
- **Apagou o PDF** (ou mandou para a lixeira, ou tirou da pasta) → o grupo sai do site na rodada seguinte.
- **Subiu uma versão nova do mesmo grupo** → o site passa a usar a versão nova, sem cartão duplicado.

```
Pasta do Drive ──(a cada 5 min)──► Apps Script ──► Claude lê o PDF novo ──► Planilha (aba "Site", publicada) ──► site
                                       ▲
                       aba "Ajustes": vagas, foto, PDF, selo…
```

O script roda **na conta Google da CI Goiânia** (a dona da pasta), sem servidor e sem custo do Google.
O código está em `sincronizar-drive.gs`, nesta pasta.

---

## Antes de começar

1. **Entrar na conta Google dona da pasta** INTERCAMBIO TEEN 2027.
2. **Ter uma chave da API do Claude**: em <https://console.anthropic.com> › *API Keys* › *Create Key*. A conta da
   API precisa ter créditos. É a mesma empresa do Claude, mas a cobrança da API é separada da assinatura.

### Quanto custa

- Cada PDF é lido **uma vez só**, quando entra na pasta ou é alterado. Um descritivo de ~20 páginas custa
  **cerca de US$ 0,20 a 0,30** de leitura com o modelo Claude Opus 5.5.
- **Carga inicial** (os 32 arquivos de hoje): **cerca de US$ 7 a 10**, uma vez só. Depois, só os PDFs novos.
- Para gastar menos, dá para trocar `MODELO` para `'claude-sonnet-5-5'` (metade do preço). Essa escolha é do time.
- O Google não cobra: o gatilho de 5 em 5 minutos usa cerca de 20 minutos por dia da cota gratuita (90 min/dia).

---

## Instalação (uma vez, cerca de 15 minutos)

### 1. Criar o projeto

1. Abra <https://script.google.com> › **Novo projeto**.
2. Dê o nome "Intercâmbio Teen – site".
3. Apague o conteúdo de `Código.gs`, cole **todo** o conteúdo do arquivo `sincronizar-drive.gs` e clique em **Salvar** (ícone de disquete).

### 2. Guardar a chave e o fuso horário

1. Menu da esquerda › **⚙️ Configurações do projeto**.
2. Em **Fuso horário**, escolha **(GMT-03:00) Horário de Brasília – São Paulo**.
3. Em **Propriedades do script** › **Adicionar propriedade do script**:
   - Propriedade: `ANTHROPIC_API_KEY`
   - Valor: a chave (começa com `sk-ant-`)
   - **Salvar**.

> A chave fica só aí. Nunca cole a chave no código, no chat ou numa planilha.

### 3. Ligar a automação

1. Volte ao editor (`< >` no menu da esquerda). No topo, escolha a função **`configurar`** e clique em **▶ Executar**.
2. O Google pede autorização: **Revisar permissões** › escolha a conta da CI.
   - Se aparecer "O Google não verificou este app", clique em **Avançado › Acessar Intercâmbio Teen – site (não seguro)**.
     Isso é normal para um script feito pela própria empresa.
   - O script pede acesso ao Drive (para ler a pasta), às Planilhas (para gravar a planilha do site) e a serviços
     externos (para enviar o PDF ao Claude).
3. No **Registro de execução** aparece o link da planilha criada:
   **"Intercâmbio Teen 2027 · site (automático)"**.

A primeira rodada lê até 5 PDFs. Os outros entram nas rodadas seguintes, de 5 em 5 minutos.
Os 32 arquivos de hoje ficam prontos em **cerca de 30 a 40 minutos**. Dá para acompanhar na aba **Arquivos**.

### 4. Publicar a aba "Site"

1. Abra a planilha › **Arquivo › Compartilhar › Publicar na Web**.
2. Em **Link**, escolha a aba **Site** e o formato **Valores separados por vírgula (.csv)** › **Publicar** › confirme.
3. Copie o link (termina em `output=csv`).

### 5. Ligar o site à planilha

No bloco do site (widget HTML do Elementor ou `index.html` na HostGator), no começo, troque:

```js
planilhaCsvUrl: "",
```

por:

```js
planilhaCsvUrl: "COLE-AQUI-O-LINK-DO-PASSO-4",
```

Salve, publique e **limpe o cache** do site, se houver. Pronto: a partir daqui, quem manda é a pasta do Drive.

---

## No dia a dia

| Quero… | Faço… |
|---|---|
| Colocar um grupo novo no site | Subir o descritivo (PDF) na pasta. O completo é melhor, mas o resumido também funciona. |
| Tirar um grupo do site | Apagar o PDF da pasta (ou movê-lo para fora dela). Para esconder **sem apagar**: aba Ajustes › `status` = `oculto`. |
| Trocar a versão do descritivo | Subir a nova. Mesma cidade + mesmas datas + mesma hospedagem = mesmo grupo, e vale o completo mais recente. A antiga pode ficar ou sair. |
| Marcar vagas | Aba **Ajustes**, coluna `status`: `aberto`, `ultimas` (Últimas vagas), `esgotado` (o botão vira lista de espera), `embreve` ou `oculto`. |
| Trocar foto, pôr link do PDF, selo ou aviso | Aba **Ajustes**, colunas `imagem`, `pdf`, `selo` (ex.: "Novidade"), `aviso`. |
| Corrigir algo que o Claude leu errado | Aba **Ajustes**: célula preenchida **vence** o automático, célula vazia mantém o automático. Dá para incluir outras colunas da aba Site no cabeçalho dos Ajustes (ex.: `data_inicio`, `idade_min`). |
| Saber por que um grupo não apareceu | Aba **Arquivos**, coluna `situacao`: `ok`, `na fila`, `ignorado` ou `erro`, com o motivo em `observacoes`. |

- A aba **Ajustes** ganha uma linha sozinha a cada grupo novo, já com o `id` e uma `referencia` (mês · país · cidade · escola · datas).
  Quando o PDF sai do Drive, a referência passa a começar com "(fora do Drive)".
- **Não edite a aba Site à mão**: ela é regravada sempre que algo muda.
- A coluna `observacoes` da aba Arquivos mostra o que o Claude estranhou no PDF (ano errado na capa, escola diferente entre
  páginas…). É uma boa lista para corrigir os descritivos.

### O que o script ignora

- Arquivos cujo nome tem *bloqueio*, *aéreo*, *nota fiscal*, *contrato* ou *recibo*.
- Qualquer documento que o Claude identifique como não sendo descritivo de grupo.
- PDFs acima de 22 MB (aparecem como `erro`: é preciso reduzir o arquivo).
- Subpastas (só os arquivos soltos dentro da pasta).

### Fotos e PDF no site

- **Foto**: escolhida automaticamente pelo destino entre as fotos do site de 2026 (lista `FOTOS` no começo do script).
  Destino sem foto (ex.: Brisbane, Orlando, Bournemouth, Fort Erie) usa o fundo da marca até alguém pôr o link
  na aba Ajustes, coluna `imagem`.
- **Botão do PDF**: desligado (`LINK_PDF: 'nenhum'`), porque os descritivos completos mostram o **investimento** e a
  planilha publicada é pública. Para ter o botão, suba o PDF no WordPress e cole o link na coluna `pdf` dos Ajustes.

---

## Funções do script (menu ▶ Executar)

| Função | Para quê |
|---|---|
| `configurar` | Primeira instalação, ou para religar depois de `pausar`. |
| `sincronizar` | Roda uma rodada na hora, sem esperar os 5 minutos. |
| `reprocessarTudo` | Relê **todos** os PDFs (custa a leitura de cada um). Use se mudar as instruções ou o modelo. |
| `pausar` | Desliga a automação. O site continua com o que já estava na planilha. |

**Se vários PDFs ficarem com `erro` de tempo esgotado** (timeout) na aba Arquivos: troque `MODELO` para
`'claude-sonnet-5-5'`, que responde mais rápido, salve e rode `sincronizar`. Os arquivos com erro são tentados de
novo sozinhos até 3 vezes; depois disso, só voltam a ser lidos se o PDF for alterado ou se você rodar `reprocessarTudo`.

**Atualizar o script** quando sair versão nova no GitHub: cole o novo conteúdo por cima e salve.
A chave, a planilha e o gatilho continuam.

**Ano seguinte**: crie um projeto novo com `ANO: 2028` e o `PASTA_ID` da pasta nova (o ID é o trecho do link da
pasta depois de `/folders/`). O projeto novo cria a sua própria planilha.

---

## Privacidade

- Os PDFs são enviados à **API do Claude** apenas para leitura. O conteúdo é tratado como dado: o script manda o modelo
  ignorar qualquer instrução escrita dentro do PDF.
- A planilha publicada é pública. O script **nunca grava valores** nela: o modelo é instruído a não escrever preços, e o
  script ainda apaga qualquer campo com moeda.

## O que foi testado e o que não foi

- **Testado aqui:** a lógica do script, com as extrações reais dos 32 arquivos da pasta. O resultado são os mesmos 19 grupos
  do site, com as fotos certas e as duplicatas unidas. Apagar um PDF tira o grupo; apagar só uma das versões mantém o grupo;
  ajustes vencem o automático; nenhum valor chega à planilha. Também testei o site lendo uma planilha gerada assim,
  inclusive com a pasta vazia. Tudo roda no `npm test` do repositório.
- **Não testado aqui:** a execução dentro do Google (Drive, Planilhas, gatilho) e a chamada real à API do Claude, que
  dependem da conta e da chave da CI. A primeira execução de `configurar` é o teste real: confira a aba Arquivos e a aba
  Site depois de alguns minutos.

# Registro de Consultas — sessão "Tirar dúvidas · Cibele Consultora"

> Este arquivo é o **caderno de bordo da sessão de consulta** do time da CI
> Goiânia. Ele **não** é base de conhecimento comercial: aqui se registra o que
> o time **perguntou**, o que a base **já respondia**, o que **faltou** e o que
> os consultores comentaram. É a matéria-prima do **resumo diário** enviado ao
> time.
>
> Base de conhecimento (verdade comercial): `contexto-comercial-ci-intercambio.md`,
> `produto-trabalhar-e-estudar.md`, `prompt/system-prompt-cibele.md`.

---

## Regras de operação (acordadas com o time em 26/08/2026)

**Uma única branch:** todo o conteúdo do projeto vive em `claude/ci_goiania`.
Não criar branches paralelas por sessão — isso gerava duplicidade.

**Divisão de papéis entre as sessões:**

| Sessão | O que faz | O que escreve no Git |
| --- | --- | --- |
| **Treinamento Cibele time CI** | Recebe treinamentos, documentos, prints, áudios e correções; incorpora na base | **Toda** a base de conhecimento e o prompt de produção |
| **Tirar dúvidas · Cibele Consultora** (esta) | **Só consulta** a base e responde o time | **Apenas este arquivo** (`registro-consultas-time.md`) |

Ou seja: a sessão de dúvidas **nunca** edita `contexto-comercial-ci-intercambio.md`,
`produto-trabalhar-e-estudar.md`, `prompt/` ou demais arquivos de conhecimento.
Quando ela identifica uma lacuna, **registra aqui** (seção 2) para o time levar à
sessão de Treinamento.

**Anonimização:** nomes, telefones, e-mails e demais dados pessoais de leads
**não** entram neste arquivo. Referir-se a "um lead de 17 anos", "um lead do
evento FEI", etc.

**Versionamento:** commitar é salvar. As consultas do dia são registradas e
commitadas nesta branch.

---

## Como registrar cada consulta

Cada pergunta do time vira uma entrada no **Log cronológico** (seção 4) com:

- **Data**
- **Pergunta** (o que foi perguntado, em uma linha, sem dado pessoal)
- **Tema** (ex.: Au Pair, T&E Irlanda, High School, CRM/DataCrazy, tom da Cibele)
- **Resposta possível?** `✅ na base` · `⚠️ parcial` · `❌ não estava na base`
- **Fonte** (arquivo + seção que respondeu)
- **Ação** (nada / registrar lacuna na seção 2 / levar para Treinamento)

Quando a resposta for `⚠️` ou `❌`, abrir também um item na seção 2.

---

## 1. Perguntas frequentes

Ranking do que o time mais pergunta. Alimenta a priorização do que documentar
melhor na base e do que reforçar no prompt de produção.

| Tema | Nº de consultas | Última vez | Observação |
| --- | --- | --- | --- |
| _(aguardando as primeiras consultas)_ | | | |

---

## 2. Lacunas da base de conhecimento

O que o time perguntou e a base **não** respondia (ou respondia pela metade).
São **candidatos a Pendências** — quem decide incorporar é o time, na sessão de
Treinamento.

| Data | Lacuna identificada | Origem (pergunta) | Status |
| --- | --- | --- | --- |
| _(aguardando)_ | | | |

Status possíveis: `aberta` · `levada ao time` · `documentada na base` · `descartada`.

---

## 3. Interações e feedback dos consultores

Observações sobre **como** o time usa esta sessão: correções que fizeram,
preferências de formato de resposta, dúvidas recorrentes no meio do atendimento,
situações reais em que a Cibele de produção errou ou acertou.

| Data | Registro | Desdobramento |
| --- | --- | --- |
| _(aguardando)_ | | |

---

## 4. Log cronológico de consultas

<!-- Entradas mais recentes no topo. Formato descrito em "Como registrar". -->

_(nenhuma consulta registrada ainda)_

---

## 5. Resumo diário (rotina)

**Status:** ⚠️ a configurar com o time.

A rotina lerá este arquivo e enviará um resumo do período com:

1. Quantas consultas houve e quais os temas mais frequentes.
2. Lacunas novas identificadas (seção 2, status `aberta`).
3. Feedback dos consultores que pede ação (seção 3).
4. Nada relevante no período → aviso curto, sem ruído.

A definir com o time antes de ligar: **canal** (push, e-mail, ambos),
**horário** e **destinatários**.

---

## 🗒️ Changelog

- **2026-08-26** — Arquivo criado. Consolidação em uma única branch
  (`claude/ci_goiania`) e separação de papéis entre a sessão de Treinamento (que
  escreve na base) e esta sessão de dúvidas (que só consulta e escreve aqui).
  Branch duplicada `claude/cibele-consultora-ci-72yfne` removida — não tinha
  commits exclusivos. Estrutura de registro definida (perguntas frequentes,
  lacunas, feedback dos consultores, log cronológico) e resumo diário pendente
  de configuração.

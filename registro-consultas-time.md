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

## Regras de operação (acordadas com o time em 30/08/2026)

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
| Intercâmbio Teen — como funciona | 1 | 2026-08-30 | Base cobre o conceito e a ancoragem, mas **não** a mecânica do programa |

---

## 2. Lacunas da base de conhecimento

O que o time perguntou e a base **não** respondia (ou respondia pela metade).
São **candidatos a Pendências** — quem decide incorporar é o time, na sessão de
Treinamento.

| Data | Lacuna identificada | Origem (pergunta) | Status |
| --- | --- | --- | --- |
| 2026-08-30 | **Faixa etária** do Intercâmbio Teen (base só diz "menores de 18") | Como explicar o Teen a um lead | aberta |
| 2026-08-30 | **Lista de destinos** do Teen (só consta que Canadá é o mais procurado) | idem | aberta |
| 2026-08-30 | **Durações** do Teen (o período já se sabe: **férias escolares**, conforme a abertura no prompt de produção) | idem | parcial |
| 2026-08-30 | **Modalidade "em grupo"** — o formulário do site oferece a opção, mas a base não explica se há acompanhante/líder, tamanho do grupo, como funciona | idem | aberta |
| 2026-08-30 | **O que está incluído** no Teen (aulas, acomodação, seguro, transfer, passeios) e **tipo de acomodação** | idem | aberta |
| 2026-08-30 | **Diferença Teen × High School** documentada só em uma linha; sem comparativo utilizável (duração, escola, certificação) | idem | aberta |

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

### 2026-08-30 — Como explicar o Intercâmbio Teen a um lead

- **Pergunta:** como funciona o Intercâmbio Teen da CI, para explicar a um lead.
- **Tema:** Intercâmbio Teen / produtos.
- **Resposta possível?** ⚠️ **parcial** — a base cobre o **posicionamento** e as
  **regras de ancoragem**, mas não a **mecânica operacional** do programa.
- **Fonte:** `contexto-comercial-ci-intercambio.md` Seção 3 (perfis de menores),
  Seção 7 (faixas reais + ancoragem quando o interlocutor é o próprio menor +
  Modelo E), Seção 9 (reunião com os pais);
  `prompt/system-prompt-cibele.md` › Intercâmbio Teen / High School.
- **O que a base respondeu:** Teen = experiência de intercâmbio para jovens com
  foco no idioma (**nunca** chamar de "ensino médio" — isso é High School);
  menores de 18, pais decidem; a partir de **~R$ 50 mil**, varia por programa e
  duração, **sem** passagem aérea e **sem** visto; < R$ 20 mil é inviável e deve
  ser alinhado cedo com tom suave; se o interlocutor é o próprio menor,
  **não cravar o número** — levar valores à reunião com os pais; Canadá é o
  destino mais procurado do público teen; fechamento = reunião com os pais pelo
  Calendly, presencial em Goiânia ou online conforme a região.
- **O que faltou:** faixa etária, destinos, durações, como funciona a
  modalidade "em grupo", o que está incluído e tipo de acomodação (ver seção 2).
- **Entregue ao time:** resumo do que pode ser dito + duas versões de mensagem
  pronta (falando com o adolescente × falando com o responsável) + alerta
  explícito de não improvisar nos itens em falta.
- **Ação:** 6 lacunas registradas na seção 2 → levar à sessão de Treinamento.
- **Atualização no mesmo dia:** a sessão de Treinamento publicou um roteiro de
  abertura no prompt de produção que traz um dado novo do Teen — é uma
  experiência **durante as férias escolares**. Isso fecha parcialmente a lacuna
  de "períodos de embarque"; a **duração** segue indefinida. Resposta ao time
  corrigida na hora.

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

- **2026-08-30** — Arquivo criado. Consolidação em uma única branch
  (`claude/ci_goiania`) e separação de papéis entre a sessão de Treinamento (que
  escreve na base) e esta sessão de dúvidas (que só consulta e escreve aqui).
  Branch duplicada `claude/cibele-consultora-ci-72yfne` removida — não tinha
  commits exclusivos. Estrutura de registro definida (perguntas frequentes,
  lacunas, feedback dos consultores, log cronológico) e resumo diário pendente
  de configuração.

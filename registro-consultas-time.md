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

**Consultas do time a esta sessão:**

| Tema | Nº de consultas | Última vez | Observação |
| --- | --- | --- | --- |
| Intercâmbio Teen — como funciona | 1 | 2026-08-30 | Resolvido: o `playbook-produtos.md` (04/09) fechou as lacunas |
| O que os clientes mais perguntam | 1 | 2026-09-04 | Respondido com amostragem do CRM — ver seção 4 |
| High School — montar opção por perfil de lead | 2 | 2026-10-14 | Portfólio por destino completo; o que decide a grade é **convalidar × eletivas** |
| Trabalhar e Estudar — Espanha | 1 | 2026-10-01 | Base boa, mas com **2 divergências internas** (salário/hora e quando pode trabalhar) |

**Dúvidas dos clientes nos atendimentos** (amostra do DataCrazy, instância
Pré Venda, 02–04/09/2026 — 5 conversas lidas na íntegra + ~45 últimas mensagens,
de 277 conversas no período; é amostra, não contagem completa):

| # | O que o cliente pergunta | Frequência na amostra | A base responde? |
| --- | --- | --- | --- |
| 1 | **Preço** — por destino, por cidade, por duração ("e para 2 semanas?", "em outra cidade diminui?") | dominante | ⚠️ parcial — régua só de Teen/HS; Cursos sem faixa |
| 2 | **"Quanto preciso levar além do pacote"** (alimentação, transporte, gastos pessoais) | alta | ❌ não |
| 3 | **"O que é esse programa?"** — lead não sabe o que é High School, Teen ou T&E | alta (típico de menor) | ✅ sim |
| 4 | **"Vocês têm em [destino]?"** — Miami, Austrália, NY, Canadá, Portugal | alta | ⚠️ parcial |
| 5 | **Duração ideal** ("3 meses é boa duração?", 2–3 semanas, 30 dias) | média | ⚠️ parcial |
| 6 | **Quando embarcar** (pós-ENEM, depois do 3º ano, férias) | média | ✅ sim |
| 7 | **Au Pair — requisitos** (300h de experiência, nível de inglês) | média | ✅ sim |
| 8 | **Ensino superior** — transferir graduação em curso, mestrado, bolsas | baixa mas recorrente | ⚠️ parcial |

---

## 2. Lacunas da base de conhecimento

O que o time perguntou e a base **não** respondia (ou respondia pela metade).
São **candidatos a Pendências** — quem decide incorporar é o time, na sessão de
Treinamento.

| Data | Lacuna identificada | Origem (pergunta) | Status |
| --- | --- | --- | --- |
| 2026-08-30 | **Faixa etária** do Intercâmbio Teen | Como explicar o Teen a um lead | **documentada** (playbook 04/09: 7–17 anos) |
| 2026-08-30 | **Lista de destinos** do Teen | idem | **documentada** (EUA, Canadá, Irlanda, Inglaterra, Austrália, Dubai, Singapura) |
| 2026-08-30 | **Durações/períodos** do Teen | idem | **documentada** (férias de janeiro e julho) |
| 2026-08-30 | **Modalidade "em grupo"** / supervisão | idem | **documentada** (supervisão integral; grade por edição) |
| 2026-08-30 | **O que está incluído** no Teen e tipo de acomodação | idem | **parcial** (idioma + atividades + passeios; acomodação por edição) |
| 2026-08-30 | **Diferença Teen × High School** | idem | **documentada** (playbook seções 3.1 e 3.3) |
| 2026-09-04 | **Portugal não existe na base** — zero menções em todos os arquivos. Um lead pediu transferência de graduação para Portugal e o destino não tem nenhuma cobertura | Amostragem do CRM | aberta |
| 2026-09-04 | **Estimativa de "quanto levar"** (custo de vida durante o programa) para cursos curtos — é das perguntas mais frequentes e não há referência na base. Nos atendimentos já se passa um número para os EUA (USD ~1.500 / 4 semanas) que **não** está documentado | idem | aberta |
| 2026-09-04 | **Valor da assessoria de Ensino Superior** (~R$ 16 mil) está sendo informado ao cliente no atendimento, mas não consta na base nem no playbook | idem | aberta |
| 2026-09-04 | **Política de igualar preço de concorrente** ("igualamos qualquer valor equivalente") é usada nos atendimentos e não está documentada em lugar nenhum — a Cibele não sabe que existe, nem quais são os limites | idem | aberta |
| 2026-10-14 | **Portfólio de HS não tem corte por área de estudo.** "Business" não aparece uma única vez em `produto-high-school.md`. O portfólio é por destino/modalidade; não há como responder "High School com base em Business" sem acionar o consultor/organização | Lead de 14 anos querendo HS com base em Business + faculdade em UK/USA | aberta |
| 2026-10-14 | **A-Level só está documentado na Suíça.** A Inglaterra — destino óbvio para A-Level e para quem mira universidade no UK — não menciona A-Level nem IB na sua seção | idem | aberta |
| 2026-10-14 | **Bolsas de High School fora do J-1 não existem na base.** _(Correção 14/10: neste lead a bolsa é assunto de **universidade**, no futuro — não de HS. A lacuna continua válida em geral, mas sai do 🔴: o risco de empurrar J-1 por associação à palavra "bolsa" não se aplicava a este caso.)_ A única "bolsa" documentada é o J-1 (governo americano), que é justamente o programa **menos** compatível com quem quer escolher escola/matéria e se formar. Famílias pedem bolsa explicitamente e a Cibele não tem o que responder — risco de empurrar J-1 por associação à palavra "bolsa" | idem | aberta |
| 2026-10-14 | **Ponte High School → universidade não documentada.** O playbook tem a assessoria de Graduação (5.1), mas nada liga os dois: se o HS no exterior melhora a candidatura, se há continuidade/desconto, como planejar os dois juntos. É pedido recorrente de família com filho novo | idem | aberta |
| 2026-10-14 | 🔴 **Trade-off convalidação × eletivas só está escrito para a Nova Zelândia.** A base documenta que **com convalidação** sobram **5 matérias fixas + 1 eletiva** e **sem convalidação** as eletivas ficam livres — mas só na seção da NZ. A regra das **5 disciplinas obrigatórias vale para todos os destinos**, então a mesma tensão deve valer para **EUA e UK** e não está escrita em lugar nenhum. É o que mais decide a grade de quem busca uma área específica | Lead de 14 anos, Teen jul/2027 emendando HS ago/2027, eletivas de negócios, EUA ou UK | aberta |
| 2026-10-14 | **Emenda Teen → High School não é tratada na base.** Nenhum arquivo cobre a sequência de dois programas coladas, e o ponto crítico é o **visto**: F-1 (I-20 + SEVIS + consulado) e CAS britânico são tirados **no Brasil** e precisam estar prontos **antes** da viagem do Teen. Com F-1 respondendo em até 60 dias, a janela de aplicação é o 1º trimestre do ano do embarque. Vale virar regra escrita — é combinação que tende a se repetir | idem | aberta |
| 2026-10-14 | **Indicação de matéria no UK não existe na base.** Para a Inglaterra só está documentada **escolha da escola** (privadas/boardings); no F-1 americano há indicação de **disciplina** nas 4 modalidades. Sem isso não dá para comparar EUA × UK para quem quer eletiva de uma área | idem | aberta |
| 2026-10-14 | **GCSE / Year 11 não documentado.** O sistema britânico tem 1 ano a mais e a base registra isso, mas não explica o que o aluno cursa em cada Year nem como GCSE/A-Level se encaixam — justamente o que define a trilha de negócios no UK | idem | aberta |
| 2026-10-01 | 🔴 **DIVERGÊNCIA — salário/hora na Espanha:** `produto-trabalhar-e-estudar.md` diz **~€12/h (~€960/mês com 20h/sem)**; a tabela da Seção 2 do `contexto-comercial-ci-intercambio.md` diz **€5–7/h**. Quase o dobro de diferença; a Cibele pode passar qualquer um dos dois | Consulta sobre T&E Espanha | aberta |
| 2026-10-01 | 🔴 **DIVERGÊNCIA — quando o aluno pode trabalhar na Espanha:** o arquivo de produto diz que o **NIE sai no 1º mês e já permite trabalhar**; a tabela da Seção 2 diz que **trabalho não é automático — Empadronamiento (4–5 meses) + TIE/NIE**. Muda o planejamento financeiro de quem conta com a renda desde o começo | idem | aberta |
| 2026-10-01 | **Semanas mínimas da Espanha:** 22 de curso + 4 de férias (arquivo de produto) × 24 semanas (tabela da Seção 2) — divergência menor, mas confunde no orçamento | idem | aberta |
| 2026-10-01 | **Faixa de investimento do T&E Espanha** segue marcada como ⚠️ A ESCLARECER na base — não há como ancorar valor | idem | aberta |
| 2026-09-04 | **Transferência de graduação em curso** (aproveitamento de créditos para universidade no exterior) — o playbook cobre candidatura do zero, não transferência | idem | aberta |

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

### 2026-10-14 (2ª rodada) — Teen emendando High School, eletivas de negócios

- **Pergunta:** mesmo lead, com o planejamento refeito pelo time — **Intercâmbio
  Teen em julho/2027 emendando High School** logo depois, com **matérias
  eletivas voltadas a negócios**, em **EUA ou UK** (Suíça descartada pela
  família). A **bolsa** é assunto de **universidade, no futuro** — não do HS.
- **Tema:** High School + Teen / montagem de plano de médio prazo.
- **Resposta possível?** ⚠️ **parcial**, mas a base entregou o ponto decisivo.
- **Fonte:** `contexto-comercial-ci-intercambio.md` (grade curricular × decisão de
  convalidar, Seção 2 — NZ; Pendências); `produto-high-school.md` (regras gerais,
  F-1, Inglaterra, comparativo); `playbook-produtos.md` §§ 3.1 e 3.2.
- **O que a base respondeu:** o trade-off **convalidação × eletivas** (com
  convalidação, 5 matérias fixas + 1 eletiva; sem, eletivas livres) é a pergunta
  que decide a grade; o **F-1 Privado** é a única modalidade do portfólio que
  permite indicar **disciplina** *e* escolher a **escola**; no UK só há escolha
  de escola documentada; idade 15 em ago/2027 libera F-1, privadas e boardings
  inglesas, mas não o State College (16+); o Teen tem EUA e Inglaterra entre os
  destinos, e o **Teen Experience** (foco em carreira/temas atuais) conversa mais
  com o projeto do que o Teen recreativo.
- **O que faltou:** o desdobramento do trade-off para EUA/UK, a sequência
  Teen→HS (e o visto no meio), indicação de matéria no UK e GCSE/A-Level.
- **Entregue ao time:** ordem de decisão para a reunião (convalidar ou não →
  data de nascimento → viabilidade do visto na janela jul→ago → disponibilidade
  real de Business → só então escola/cidade/valores), comparativo EUA × UK do
  que a base sustenta, alerta de **não prometer matéria eletiva específica**
  (pendência aberta sobre pré-requisito de Business/Economics) e proposta de
  fazer o Teen no mesmo país do HS.
- **Ação:** 4 lacunas novas na seção 2, uma 🔴 (trade-off escrito só para a NZ).
  Corrigida a lacuna de bolsa da 1ª rodada — não se aplicava a este lead.

### 2026-10-14 — Montar opções de High School para um perfil específico

- **Pergunta:** se já há portfólio de High School para encontrar as
  oportunidades que encaixam no perfil de um lead — menino de **14 anos**,
  **inglês avançado**, quer **HS com base em Business**, pretende **faculdade
  depois em UK ou USA** (ainda em dúvida entre os dois), início em **agosto de
  2027**, e pergunta sobre **investimento/bolsa**.
- **Tema:** High School / montagem de proposta por perfil.
- **Resposta possível?** ⚠️ **parcial** — o portfólio por destino está completo e
  permitiu filtrar bem, mas **dois pedidos centrais do lead (área de Business e
  bolsa) não têm cobertura na base**.
- **Fonte:** `produto-high-school.md` (regras gerais, EUA J-1, EUA F-1,
  Inglaterra, Suíça, comparativo de destinos); `playbook-produtos.md` § 5.1
  (Graduação no Exterior).
- **O que a base respondeu:** idade 14 elimina State College inglês (16+) e
  aperta o J-1 (15+, 14 sob consulta); restam **EUA F-1** (14–18), **Inglaterra
  privada/boarding** (14/13) e **Suíça** (13–18). ELTIS 222 não é gargalo para
  inglês avançado. Para a dúvida UK × USA, a **Suíça** é a única opção do
  portfólio que entrega credencial aceita nos dois sistemas (IB, A-Level ou
  Maturidade Suíça); **F-1 privado** entrega diploma americano, mas a intenção
  de se formar precisa ser declarada **no ato da inscrição**; Inglaterra entrega
  o sistema britânico (Years 8–13). Prazo de ~10 meses até ago/2027 é viável
  (F-1 responde em até 60 dias; Suíça tem vagas concorridas com preferência
  para ano escolar completo).
- **O que faltou:** área de estudo (Business), bolsas fora do J-1, A-Level na
  Inglaterra e a ponte HS → universidade.
- **Entregue ao time:** filtro por modalidade com os 3 caminhos possíveis e o
  que cada um entrega como credencial, alerta sobre declarar a intenção de se
  formar no F-1, alerta para **não oferecer J-1 como resposta ao pedido de
  bolsa** neste perfil, leitura de prazo e 4 perguntas para fazer à família.
- **Ação:** 4 lacunas abertas na seção 2, uma delas 🔴 (bolsas de HS).

### 2026-10-01 — Como funciona o Trabalhar e Estudar na Espanha

- **Pergunta:** como funciona o T&E na Espanha (para explicar a um lead).
- **Tema:** Trabalhar e Estudar / Espanha.
- **Resposta possível?** ✅ **sim** no essencial — a base tem a seção de Espanha
  bem detalhada (fonte: apresentação TEE Espanha) — **mas** com duas
  divergências internas que afetam o que se fala ao cliente.
- **Fonte:** `produto-trabalhar-e-estudar.md` › Espanha;
  `contexto-comercial-ci-intercambio.md` Seção 2 (tabela comparativa de T&E),
  Seção 2 (regra de idioma por país) e Modelo L (Seção 7).
- **O que a base respondeu:** idioma **espanhol** (nunca inglês na Espanha);
  foco no idioma, trabalho como complemento; 3 tipos de curso; carga mín.
  20h/sem; programa mín. 6 meses (22 sem + 4 de férias, 1 semana a cada 4);
  trabalho 20h/sem (40h nas férias com pedido formal do empregador); custo de
  vida ~€600/mês; 9 cidades; escolas Enforex ($$$) e Expanish ($$); seguro
  viagem obrigatório e **não** incluído; visto presencial no Brasil (GO →
  Brasília), 100–130 dias de antecedência, prova financeira €700/mês (ou
  €540/mês com acomodação contratada), Apostilamento de Haia; NIE/TIE/
  Empadronamiento ao chegar.
- **O que faltou / problema:** as 2 divergências 🔴 da seção 2 + semanas mínimas
  + faixa de investimento pendente.
- **Entregue ao time:** explicação completa separando o que pode ser falado do
  que é ⚠️ consultor, com alerta explícito para **não passar número de salário**
  nem afirmar quando o aluno poderá trabalhar, até o time resolver a divergência.
- **Ação:** 4 itens abertos na seção 2, sendo 2 divergências que, pela regra do
  `CLAUDE.md` ("divergiu da base? reportar ao time, não sobrescrever no
  silêncio"), precisam de decisão do time na sessão de Treinamento.

### 2026-09-04 — O que os clientes mais têm perguntado nos atendimentos

- **Pergunta:** o que tem sido mais questionado nos atendimentos.
- **Tema:** análise de demanda / priorização da base.
- **Resposta possível?** ⚠️ **parcial** — o log desta sessão só tinha 1 consulta,
  então a resposta veio da **fonte real**: leitura do CRM.
- **Fonte:** DataCrazy, instância **Pré Venda**, período 02–04/09/2026.
  Amostra: 5 conversas lidas na íntegra + ~45 últimas mensagens, de **277**
  conversas no período. É amostra qualitativa, **não** contagem completa.
- **Achados:** ver o quadro "Dúvidas dos clientes nos atendimentos" na seção 1.
  O tema nº 1 é **preço** em todas as variações (por cidade, por duração, por
  destino) e o nº 2 é **"quanto preciso levar além do pacote"**, que a base não
  cobre.
- **Ação:** 5 lacunas novas na seção 2. As duas mais críticas são a **política de
  igualar preço de concorrente** e a **estimativa de custo de vida** — em ambas
  os consultores já dão números ao cliente que a base desconhece, então a Cibele
  responderia diferente de um humano no mesmo atendimento.
- **Observação de método:** existe `rotinas/daily-presales-summary-datacrazy.md`
  documentando uma rotina que faz exatamente esse resumo diário do CRM, mas o
  arquivo está **incompleto** (termina no meio da seção 3). Vale o time retomar —
  é a base natural do resumo diário previsto na seção 5 deste registro.

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

- **2026-10-14 (2ª rodada)** — O time refez o planejamento do lead: **Teen em
  julho/2027 emendando High School**, eletivas de negócios, EUA ou UK, bolsa só
  para a universidade no futuro. A base entregou o ponto decisivo — o trade-off
  **convalidar × eletivas** — mas ele só está escrito para a **Nova Zelândia**
  (🔴), apesar da regra das 5 disciplinas valer para todos os destinos. Mais 3
  lacunas: **emenda Teen→HS** (gargalo do visto, tirado no Brasil antes da
  viagem do Teen), **indicação de matéria no UK** e **GCSE/A-Level**.
- **2026-10-14** — Consulta de **montagem de proposta de High School por perfil**
  (lead de 14 anos, Business, UK ou USA, ago/2027, pergunta sobre bolsa). O
  portfólio por destino respondeu bem o filtro de idade, credencial e prazo, mas
  expôs 4 lacunas: **área de estudo** (Business não existe no arquivo),
  **bolsas de HS fora do J-1** (🔴, a família perguntou e não há resposta),
  **A-Level documentado só na Suíça** e **ponte HS → universidade**.
- **2026-10-01** — Consulta sobre **Trabalhar e Estudar na Espanha**. A base
  respondeu bem o essencial, mas foram encontradas **2 divergências internas**
  (salário ~€12/h × €5–7/h; e trabalho liberado no 1º mês via NIE × só após
  Empadronamiento de 4–5 meses), além de divergência nas semanas mínimas e da
  faixa de investimento ainda pendente. Reportadas ao time conforme a regra do
  `CLAUDE.md`, sem alterar a base.
- **2026-09-04** — Registrada a consulta "o que os clientes mais perguntam",
  respondida com amostragem do CRM (DataCrazy › Pré Venda, 02–04/09). Criado o
  quadro de dúvidas dos clientes na seção 1 e abertas 5 lacunas novas (Portugal,
  custo de vida/"quanto levar", valor da assessoria de Ensino Superior, política
  de igualar preço, transferência de graduação). Fechadas as lacunas do
  Intercâmbio Teen — o `playbook-produtos.md` publicado pela sessão de
  Treinamento em 04/09 documenta 7–17 anos, férias de janeiro e julho, destinos
  e supervisão integral.
- **2026-08-30** — Arquivo criado. Consolidação em uma única branch
  (`claude/ci_goiania`) e separação de papéis entre a sessão de Treinamento (que
  escreve na base) e esta sessão de dúvidas (que só consulta e escreve aqui).
  Branch duplicada `claude/cibele-consultora-ci-72yfne` removida — não tinha
  commits exclusivos. Estrutura de registro definida (perguntas frequentes,
  lacunas, feedback dos consultores, log cronológico) e resumo diário pendente
  de configuração.

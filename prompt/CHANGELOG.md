# Histórico de evolução do prompt

## 2026-09-04 — Flexibilidade: ler a mensagem e responder ao que foi dito

Teste real: a pessoa mandou só "oi" e a Cibele respondeu "Tudo bem por aqui, e
com você?" — respondendo a uma pergunta que **não foi feita**. Causa: as REGRAS
Nº 1–3 tinham virado **scripts literais** (necessário para corrigir os bugs
anteriores), e isso engessou a conversa.

- Novo bloco **"PRINCÍPIO ACIMA DE TUDO"**, antes de todas as regras: ler a
  mensagem recebida e **responder ao que ela realmente disse**. As REGRAS são a
  **estrutura** (o que acontece e em que ordem), **não texto para copiar**.
- **REGRA Nº 1** reescrita: as partes 2, 3 e 4 (apresentação, "vamos te ajudar",
  pergunta do nome) continuam fixas, mas a **parte 1 agora se adapta**:
  - só "oi"/"olá" → "Oi! Tudo bem?"
  - saudação de período → retribuir o mesmo período + "Tudo bem?"
  - se **ela perguntou** como você está → aí sim "Tudo bem por aqui, e com você?"
  - já veio com assunto → reconhecer o assunto.
  - ⚠️ **Nunca dizer "tudo bem por aqui" se ela não perguntou.**
- **REGRAS Nº 2 e Nº 3** ganharam a mesma ressalva: são estrutura e padrão de
  ritmo, com as palavras adaptadas ao que a pessoa disse.

## 2026-09-04 — Consolidação do prompt (sem mudança de comportamento)

O prompt tinha mais que dobrado (27,5 mil → 57,5 mil caracteres) ao longo dos
ajustes, com regras repetidas em vários lugares e uma contradição ativa. Esta
entrada é uma **limpeza estrutural**: nenhuma decisão do time foi alterada.

- **Duplicação removida:** a sequência de abertura estava escrita duas vezes (nas
  REGRAS Nº 1–2 e de novo em "ACOLHER E IDENTIFICAR O SONHO"); a "Descoberta
  inicial" repetia as REGRAS Nº 2–3; e o checklist de qualificação repetia os
  itens da ORDEM DE PRIORIDADE (nome, idade, para quem é, duração, destino). As
  seções agora **apontam para as REGRAS** em vez de repeti-las.
- **Contradição corrigida:** "O QUE VOCÊ NUNCA FAZ" ainda dizia *"nunca crava
  valor de Cursos de idioma"*, o que contrariava a política aprovada (a Cibele
  **pode** citar faixas como estimativa). Reescrito para "nunca crava valor como
  garantia — valores são estimativa/faixa e o orçamento final é do consultor".
- **Rótulos "Cibele:" eliminados dos EXEMPLOS** (eram 8 ocorrências) e trocados
  pela notação neutra "(você)/(ela)", removendo a última fonte de indução ao bug
  da assinatura.
- **Regras de nome unificadas** em COMO VOCÊ FALA (a regra do placeholder já vive
  na REGRA Nº 4).
- Resultado: **57.534 → ~52.000 caracteres**, com verificação de integridade
  confirmando que todas as decisões seguem no prompt (Teen em Dubai/Singapura,
  HS Japão, Au Pair, Canadá, piso de R$ 20 mil e composição de custo, pacote x
  total, transparência condicional sobre IA, FEI, presencial, emojis, plural,
  data de nascimento, turismo x intercâmbio etc.).

Motivação: além da clareza, reduzir o risco de timeout no aplicativo, que passou
a responder "O atendimento está temporariamente indisponível" em um teste.

## 2026-09-04 — REGRA Nº 4: controle da conversa (respostas parciais e repetição)

Teste real expôs um bug estrutural do desenho anterior: a Cibele perguntou duas
coisas num envio só ("tudo bem com você?" + "como se chama?"), a pessoa respondeu
apenas "bem tb", e a Cibele (a) avançou para a REGRA Nº 2 **sem ter o nome**,
(b) escreveu "Prazer, como você se chama? Seja muito bem-vindo(a) à CI" —
substituindo o marcador `[Nome]` por uma pergunta — e (c) depois do nome,
**repetiu a mesma mensagem inteira**.

Quatro correções:

- **REGRA Nº 1:** explicitado que o "e com você?" é só cortesia e que **a pergunta
  que precisa de resposta é o nome**. Se a pessoa responder só como está, o nome
  ainda não foi obtido — pedir de novo, sem avançar.
- **REGRA Nº 2:** ganhou **pré-requisito absoluto** — só pode ser usada quando o
  nome já é conhecido. E proibição explícita de escrever `[Nome]` ou de trocá-lo
  por uma pergunta.
- **Nova REGRA Nº 4 (controle da conversa):** checagem do que já se sabe e do que
  falta antes de cada mensagem; tratamento de **respostas parciais** (reconhecer o
  que foi respondido e repetir só a pergunta em aberto, reformulada); **não
  avançar de etapa sem o dado da etapa atual**; **nunca repetir uma mensagem já
  enviada** (reformular); **nunca escrever marcadores**; e tratar **mensagens
  picadas** com uma resposta única.

Nota: o intervalo entre mensagens (esperar alguns segundos quando o cliente
responde picado) é **configuração do aplicativo**, não do prompt.

## 2026-09-04 — REGRA Nº 3 reescrita: micro-fluxo humanizado do "para outra pessoa"

A resposta anterior estava seca e com duas perguntas juntas. O time pediu um
tratamento bem mais humanizado e detalhado para o caso "a viagem é para outra
pessoa".

- **Três princípios fixados:** (1) reagir antes de perguntar, variando as reações;
  (2) uma pergunta por mensagem, esperando a resposta; (3) nunca reperguntar o que
  já foi respondido (se disse "é para minha filha", a relação **já está dada**).
- **Caminho A (para outra pessoa)** ganhou o micro-fluxo completo, com diálogo de
  exemplo: para quem é → relação (pulando se já dita) → **nome de quem vai
  viajar** (novo dado, antes ausente) → **idade** → se quem fala também vai → se
  vai mais alguém. A partir do nome, usar o nome da pessoa que viaja na conversa.
- **Caminho B (para ela mesma):** sozinha ou acompanhada → quem vai junto →
  idade.
- Orientação para **explicar o porquê** de perguntar quando fizer sentido, de
  forma acolhedora e nunca burocrática.
- Os diálogos de exemplo usam a notação neutra "(você)/(ela)" em vez de
  "Cibele:/Pessoa:", para não reintroduzir o bug da assinatura — os exemplos
  agora ficam no topo do prompt, onde teriam mais influência.

## 2026-09-04 — REGRA Nº 3: acolher antes de perguntar, uma pergunta por vez

A REGRA Nº 2 funcionou, mas a resposta seguinte saiu seca e com duas perguntas
juntas: "Para quem seria a viagem, Marcelo? Qual a idade dela?".

- Criada a **REGRA Nº 3** com o script das duas ramificações:
  - **Para outra pessoa:** "Ah, que legal!" + "E você está pesquisando para
    quem?" — e só depois, uma por vez, se quem fala também vai, se tem mais
    gente junto, e por fim a idade.
  - **Para ela mesma:** "Ah, que legal!" + "E você pretende ir sozinho(a) ou com
    mais alguém?" — e só depois a idade.
- **Uma pergunta por mensagem:** proibido juntar "para quem é" com "qual a idade"
  no mesmo balão.
- **Sempre abrir com uma reação curta e acolhedora** antes de perguntar ("Ah, que
  legal!", "Que bacana!", "Entendi!"), variando para não repetir.
- Entender o grupo de forma **abrangente**: quem vai, se quem fala também vai e se
  há mais alguém junto — sem assumir que é uma pessoa só.

## 2026-09-04 — REGRA Nº 2: script literal da segunda resposta

A REGRA Nº 1 funcionou (a abertura saiu no formato correto, com os blocos
separados e a pergunta do nome). O erro migrou para a **segunda resposta**: logo
depois do nome, a Cibele ofereceu ajuda genérica e já perguntou "algum destino ou
programa de intercâmbio em mente?" — **assumindo intercâmbio** e pulando para o
destino.

- Criada a **REGRA Nº 2**, logo abaixo da Nº 1, com o **script literal** da
  segunda resposta: boas-vindas com o nome + "Imagino que, se você está nos
  procurando, esteja pensando em fazer uma viagem." + "Essa viagem seria para você
  ou para outra pessoa?".
- **Não dizer "intercâmbio" nesta etapa** — falar em **"viagem"**, porque pode ser
  turismo. O nome do produto só entra depois que a pessoa disser o que quer.
- **Proibido perguntar destino/país/programa ou oferecer opções** nesta etapa.
- Depois de saber para quem é, o próximo dado é a **idade de quem vai viajar** e
  se é **uma pessoa, um casal ou um grupo**.

## 2026-09-04 — REGRA Nº 1: script literal da primeira resposta

O comportamento voltou a falhar de forma **intermitente** (um teste acertou,
o seguinte ofereceu ajuda genérica em vez de perguntar o nome). Diagnóstico: não
era falta de regra, era (a) a instrução estar enterrada no meio de um prompt de
~48 mil caracteres e (b) a frase indesejada estar **escrita 4 vezes** no próprio
prompt, o que a tornava saliente.

- Criada a **REGRA Nº 1, no topo absoluto do prompt**, com o **script literal** da
  primeira resposta (saudação + "Sou a Cibele, do time da CI Intercâmbio" +
  "Vamos te ajudar com tudo a partir de agora!" + pergunta do nome), em blocos
  separados por linha em branco.
- A **última linha é sempre a pergunta do nome**, sem nada depois. Só três
  variações aceitas.
- A frase indesejada foi **removida de todo o prompt** (de 4 ocorrências para 0);
  as proibições agora descrevem o comportamento sem repetir o texto a evitar.

## 2026-09-04 — "Para quem é" + idade: par de mesma prioridade; data de nascimento

Ajuste dos itens 2 e 3 da ordem de qualificação (teste real: a Cibele explicou
"como funciona o intercâmbio" de forma genérica, sem saber para quem era nem a
idade).

- **"Para quem é" e "idade" têm a mesma importância** e podem ser perguntadas em
  **qualquer ordem entre si** — mas nenhuma das duas pode ser pulada.
- A **idade é sempre a de QUEM VAI VIAJAR**, não a de quem está falando. Por isso
  costuma ser mais eficiente perguntar antes **quem vai viajar** e só então a
  idade da pessoa certa.
- **Sempre cruzar as duas informações** antes de explicar qualquer coisa: a mesma
  pergunta ("como funciona o intercâmbio?") se responde de forma diferente para um
  jovem pesquisando para si e para um adulto pesquisando para um filho
  adolescente. Proibida a explicação genérica antes desse cruzamento.
- Reforçado **sozinha ou acompanhada** (e colher os dados de quem viaja junto).
- **Data de nascimento obrigatória antes do handoff:** a idade serve para
  conduzir, mas o sistema precisa da **data de nascimento completa** de quem vai
  viajar — não passar o lead ao consultor sem ela.
- Corrigida a contradição do checklist, que ainda mandava não perguntar a idade
  logo de cara.

## 2026-09-04 — Reforço: nome antes de "como posso te ajudar" e espaçamento

A sincronização com o app está confirmada (o emoji de carinha e a nova
apresentação já apareceram nos testes), mas dois comportamentos persistiram.

- **Regra dura em "O QUE VOCÊ NUNCA FAZ":** nunca terminar a abertura com "Como
  posso te ajudar?" enquanto não souber o nome. A última pergunta da abertura é
  **sempre o nome**; "como posso te ajudar" só vale **depois** de ter o nome.
- **Espaçamento:** os 4 passos da abertura devem ir como mensagens separadas; se
  o canal juntar tudo num balão só, **separar cada passo por uma linha em
  branco** — nunca emendar numa frase corrida. Exemplo do formato incluído no
  prompt.

## 2026-08-30 — Mensagens curtas separadas, plural e o nome como 1ª pergunta

Correção a partir de teste real: a Cibele respondeu tudo num bloco só e ainda
terminou com "Como posso te ajudar hoje?" em vez de perguntar o nome.

- **Nunca mandar mensagens grandes:** 1 a 2 linhas por mensagem; **preferir
  várias mensagens curtas e separadas** a uma longa (uma ideia por balão).
- **Abertura sem contexto vira uma sequência de 4 mensagens separadas:**
  1. "Boa noite! Tudo bem por aqui, e com você?"
  2. "Sou a Cibele, do time da CI Intercâmbio." (ou "Me chamo Cibele e faço parte
     aqui do time da CI Intercâmbio.")
  3. "Vamos te ajudar com tudo a partir de agora!"
  4. "Como se chama?" / "Como posso te chamar?" / "Qual o seu nome?"
- **Sempre no plural** ao falar do atendimento/ajuda ("vamos te ajudar",
  "estamos aqui", "nosso time") — passa a ideia de time unido.
- **O nome é a primeira pergunta** — nunca trocar por "como posso te ajudar?".
  Esclarecido que, sem o nome, perguntar é obrigatório (a regra antiga de "nunca
  perguntar como posso te chamar" só vale quando já se tem o nome).

## 2026-08-30 — Política de emojis afinada

- **Usar bem pouco emoji**: preferir nenhum ou apenas um (máximo 2, só no início
  da conversa).
- **Preferir emojis de carinha/rosto** (😊 🙂), que dão o ar acolhedor — outros
  emojis continuam permitidos, mas com parcimônia (antes o texto sugeria o
  coração como padrão).
- Quando houver **variação de cor**, usar o **laranja** 🧡 (cor da marca).

## 2026-08-30 — Ordem de prioridade da qualificação (destino por último)

Correção a partir de teste real: a pessoa perguntou sobre intercâmbio de férias,
pediu "dicas" e a Cibele já sugeriu Canadá/Austrália/Reino Unido — **sem saber o
nome, para quem era nem a idade**.

- Causa: a regra anterior mandava **variar a primeira pergunta**, permitindo
  começar pelo **país de interesse**. Substituída.
- Nova **ordem de prioridade** (pulando o que já se sabe):
  1. **Nome** (sempre primeiro)
  2. **Para quem é** (para ela ou para outra pessoa — quem é e qual a relação; se
     for para ela, sozinha ou acompanhada)
  3. **Idade** de quem viaja (filtro dos programas)
  4. **Duração**
  5. **Objetivo da viagem**
  6. **Destino / local** — só bem mais à frente
- **Nunca começar pelo destino.** Se a pessoa pedir dicas de lugares antes,
  acolher e redirecionar (a indicação depende do perfil), sugerindo destinos só
  depois de saber, no mínimo, para quem é e a idade.
- A Cibele pode variar **a forma** de perguntar, mas **não a ordem**.

## 2026-08-30 — Apresentação obrigatória já na primeira mensagem

Correção a partir de teste real: ao receber "Boa tarde", a Cibele respondeu
"Boa tarde! Tudo bem com você? Como posso te ajudar hoje?" — **sem se
apresentar**.

- Causa: a regra anterior mandava responder a saudação e só se apresentar na
  mensagem seguinte (fluxo em dois passos).
- Agora a **primeira resposta já traz tudo junto**: retribuir a saudação,
  perguntar como a pessoa está, **se apresentar (Cibele, do time da CI
  Intercâmbio)** e abrir para ajudar (perguntando o nome ou como pode ajudar).
- Regra dura adicionada: **toda primeira mensagem inclui o nome (Cibele) e a CI
  Intercâmbio** — nunca responder uma saudação só com "tudo bem? como posso
  ajudar?".

## 2026-08-30 — Abertura aberta (não assumir intercâmbio) e uso do cadastro

Correção a partir de teste real (a Cibele abriu com "vou te ajudar a realizar seu
sonho de intercâmbio" para quem só mandou "oi"):

- **Não assumir o motivo do contato:** um "oi" solto não significa intercâmbio —
  pode ser turismo, dúvida, outra coisa. A abertura passa a ser **aberta**
  ("estamos aqui pra te ajudar com todo o seu processo"), e só se fala de
  intercâmbio/produto depois que a pessoa indicar que é isso.
- Exemplo de abertura sem nome atualizado para a versão aprovada pelo time:
  "Oi, tudo bem? Tudo bem por aí? A Cibele aqui, da CI Intercâmbio 🧡 Estamos
  aqui pra te ajudar com todo o seu processo. Como você se chama?"
- **Uso do cadastro do contato:** se houver cadastro para o número, confirmar o
  nome com naturalidade ("esse número está salvo como Fulano, falo com você
  mesmo?") e não reperguntar o que já se sabe; se não houver, seguir a abertura
  normal e, se couber, dizer com leveza que não encontrou cadastro — sem expor
  mecânica interna. ⚠️ Depende de o aplicativo fornecer essa informação (a
  consulta à base ainda será desenvolvida pelo time).

## 2026-08-30 — Piso real de investimento: pacote x custo total da viagem

Correção do time sobre a ancoragem (substitui o piso de ~R$ 15 mil da entrada
anterior):

- **Piso geral de qualquer intercâmbio: ~R$ 20 mil no total** — na prática é
  inviável por menos, porque **o valor do pacote não é o custo da viagem**.
- A Cibele deve **sempre esclarecer o que está incluso** no número que cita
  (pacote curso+acomodação x total da viagem). É a maior fonte de confusão.
- **Composição do cenário mais barato** (para explicar com transparência):
  passagem para país de língua inglesa raramente abaixo de ~R$ 5.000; curso +
  acomodação de 2 semanas a partir de ~R$ 7.500, com a maioria na faixa de
  ~R$ 10.000; alimentação e transporte ~R$ 250/dia (~R$ 3.500 em 2 semanas), na
  prática mais, por causa de passeios de fim de semana.
- Faixas de Cursos passam a ser rotuladas como **pacote**.
- ✅ Resolve a divergência com o playbook: os R$ 10 mil de lá são **pacote**, não
  total — não havia contradição.

## 2026-08-30 — Revisão das diretrizes básicas de descoberta e qualificação

- **Saudação:** além de cumprimentar pelo horário, **retribuir a saudação** da
  pessoa quando ela cumprimenta primeiro (mesmo período que ela usou).
- **Descoberta inicial (nova etapa, antes de qualificar o programa):**
  1. **Quem viaja?** — a pessoa mesma ou ela pesquisa para outra? Se for para
     outra, descobrir **quem é** e **qual a relação**. Se for ela mesma, se vai
     **sozinha ou acompanhada** e como está o planejamento.
  2. **Turismo ou intercâmbio?** — validar quando não vier claro, para direcionar
     ao **atendimento de turismo** ou ao de **intercâmbio**.
- **Estilo:** responder **breve e sempre devolvendo um novo questionamento** — o
  objetivo é capturar o máximo de dados para facilitar o consultor seguinte.
- **Prazo de embarque:** distinguir **embarque próximo (~1 a 5 meses)** de
  **planejamento futuro**, conduzindo diferente em cada caso e cruzando com o
  **prazo de visto** (ex.: T&E pede ~4 meses de antecedência).
- **Novos itens do checklist:** destino + produto (com a **idade** como filtro),
  **duração** (curta/longa), **nível de idioma** (inclusive nível de inglês mesmo
  quando o idioma é outro) e **experiência internacional / passaporte / visto**.
- **Ancoragem de Cursos:** piso de referência **~R$ 15 mil** para curso de curta
  duração (2 semanas), variando por país. ⚠️ Diverge do playbook (R$ 10 mil) —
  prevalece a orientação do time; divergência registrada em
  `playbook-produtos.md`.
- **Turismo** deixou de ser "não confirmado internamente": vira direcionamento
  válido (acolher, colher o básico e encaminhar ao atendimento de turismo).

## 2026-08-30 — Playbook de Produtos: valores/vistos e portfólio ampliado

Incorpora o Playbook de Produtos v1.0 (referência interna em
`playbook-produtos.md`) com decisões do time:

- **Política de valores e vistos (mudança):** a Cibele **pode informar** valores e
  regras de visto — mas sempre como **estimativa/faixa** e **orientação geral**,
  com o **orçamento final** e a **confirmação de visto** a cargo do consultor (as
  regras mudam e os preços variam). Nova nota no topo da BASE DE CONHECIMENTO;
  ajustes em TIRAR DÚVIDAS, ANCORAGEM e QUANDO ESCALAR.
- **Cursos de Idioma** ganharam faixas de investimento (2 semanas a partir de
  ~R$ 10 mil; 1 mês ~R$ 20 mil; 3 meses ~R$ 30–35 mil; 6 meses ~R$ 50 mil; 1 ano
  a partir de ~R$ 70 mil) — deixou de ser "não anunciar valor".
- **Seção "Portfólio ampliado"**: College/Técnico, Intercâmbio em Família,
  Terceira Idade, Teen Experience, Boarding School, Cursos Técnicos, Graduação,
  Pós (MBA), e Imigração para o Canadá (RCIC/Toronto).
- Trabalhar e Estudar: explica a lógica de custo (pacote + salário local) em vez
  de "não anunciar valor".

## 2026-08-30 — Destinos do Teen (Dubai/Singapura), assinatura e mudança de assunto

- **Destinos do Intercâmbio Teen:** a CI atende Teen também em **Dubai** e
  **Singapura**. A Cibele não deve negar um destino de Teen por conta própria —
  se não tiver certeza, tratar como possível e levar ao consultor. (Base de
  conhecimento atualizada em paralelo.)
- **Assinatura:** reforço na seção "O QUE VOCÊ NUNCA FAZ" — nunca assinar/
  prefixar com "Cibele:" em **nenhuma** mensagem (a primeira e as seguintes).
- **Mudança de assunto:** ao trocar de assunto dentro da mesma mensagem, **saltar
  uma linha** (linha em branco entre os blocos).

## 2026-08-30 — Abertura acolhedora e roteiro de saudação

- A Cibele sempre abre com acolhimento e saudação pelo horário (bom dia / boa
  tarde / boa noite; saudação neutra se o horário não estiver disponível).
- **Sem contexto** (só "oi"): responde a saudação, pergunta como a pessoa está,
  aguarda; depois se apresenta (time da CI Intercâmbio Goiânia) e pergunta como
  pode ajudar — sem despejar produto antes de saber o interesse.
- **Com contexto** (já cita produto/destino): boas-vindas + auto-apresentação +
  resumo curto do produto citado + entrada na qualificação.
- Reforça **variar a primeira pergunta** de qualificação (data de nascimento/
  idade, país de interesse, para quem é; se for para ela, sozinha ou
  acompanhada), sem reperguntar o que já foi dito.
- (Seções "ACOLHER E IDENTIFICAR O SONHO" e "QUALIFICAR COM CUIDADO".)

## 2026-08-30 — Transparência condicional sobre ser IA + persona e melhorias

Incorpora diretrizes aprovadas pelo time (a partir de documento histórico de
diretrizes da Cibele), depois de análise e decisão explícita:

- **Transparência condicional (mudança de comportamento):** antes a Cibele
  nunca se assumia como IA e "não saía do personagem" se perguntada. Agora, no
  dia a dia ela **não se declara nem humana nem IA** por conta própria — age
  como parte do time. Se perguntarem dados dela (idade e afins), responde; se
  perguntarem sobre presença/onde trabalha, diz que o atendimento é **remoto**,
  mas que dá para **agendar presencial** com alguém do time. E **quando a pessoa
  questiona efetivamente se é humana ou uma IA**, ela **assume com transparência**
  ("sou uma assistente virtual avançada, treinada pelo Marcelo, diretor da CI").
  Nunca nega ser IA quando perguntada, nunca afirma ser humana, nunca traz o
  assunto à tona sozinha. (Seções "QUEM É VOCÊ", "O QUE VOCÊ NUNCA FAZ" e "SE
  PERGUNTAREM SE VOCÊ É UMA IA / ROBÔ".)
- **Presencial x online:** deixa de ser uma regra rígida de DDD. Agora a Cibele
  entende onde a pessoa mora e se tem acesso fácil a Goiânia, e **convida para a
  agência (Brookfield Towers) sempre que for uma boa oportunidade**; para quem
  está longe, conduz por vídeo sem frisar que o atendimento é online.
- **Persona:** background de ~30 anos (mentalidade jovem, experiente,
  organizada); não revelar a idade proativamente, só se perguntada.
- **Concordância de gênero** na saudação ("bem-vindo(a)") e tratamento de
  **nomes ambíguos** (perguntar como se referir em vez de chutar).
- **Enquadramento SDR/SQL** na missão.
- **Validação de data de nascimento** impossível/divergente (ex.: 30/02).

## 2026-08-28 — Não imprimir o placeholder do nome quando ele não existir

- Correção de comportamento (feedback do time): sem o nome disponível, a Cibele
  estava enviando a mensagem com o placeholder literal (ex.: "Oi, tudo bem,
  {{nome_cliente}}?").
- Regra: quando o nome não estiver disponível (campo vazio / contato não se
  apresentou), **nunca** escrever o placeholder na mensagem — fazer só a
  introdução calorosa (sem chamar por nome) e **perguntar o nome em seguida**.
  Só usar o nome depois que ele aparecer.
- Ajustes nas seções COMO VOCÊ FALA e CONTEXTO DA CONVERSA.

## 2026-08-24 — Não prefixar mensagens com "Cibele:"

- Correção de comportamento (feedback do time): a Cibele estava enviando a
  mensagem prefixada com "Cibele:" (rótulo de quem fala).
- Regra: a Cibele **nunca** começa a mensagem com o próprio nome/rótulo — envia só
  o texto, como no WhatsApp. Esclarecido que os rótulos "Cibele:"/"Pessoa:" dos
  EXEMPLOS são só notação de diálogo, não saída real (Seções COMO VOCÊ FALA e
  EXEMPLOS).

## 2026-08-17 — Não confirmar destino/programa que a CI não atende

- Correção de comportamento (feedback do time): a Cibele não deve "comprar" o
  pedido com entusiasmo nem dar a entender que a CI oferece um programa num
  destino que ela não atende.
- Exemplo fixado: **a CI não trabalha com High School no Japão**.
- Regra: ser transparente sobre o que a CI não atende, dizer onde a CI atende e
  conduzir para uma opção real / consultor **antes** de perguntar embarque/prazo.
- Nota adicionada na base de conhecimento (High School) e nova regra em "O QUE
  VOCÊ NUNCA FAZ".

## 2026-08-14 — Leads do evento FEI CI Goiânia 2026

- Adiciona a seção "LEADS DO EVENTO FEI CI GOIÂNIA 2026 (tag específica)".
- Regra: leads com a tag exata "Site Ci - Inscriçao Em Evento - Fei Ci Goiania
  2026" são reconhecidos prioritariamente como inscritos/interessados no evento
  (sem abrir com perguntas genéricas de programa).
- 1ª mensagem padrão do evento (enviar uma vez), com data/horário/local
  confirmados: 22/08/2026, 14h–18h, Colégio Simetria.
- Não inventar programação/expositores/atividades/estacionamento; se faltar
  informação, dizer que a equipe vai verificar.

## 2026-08-12 — Fonte oficial e publicação automatizada

- Cria a pasta `prompt/` como fonte oficial do prompt de atendimento.
- Registra como versão inicial o conteúdo já usado pelo aplicativo, versão
  `93e29a9392a8`.
- Adiciona validação e sincronização automatizada entre o GitHub e o aplicativo
  de teste.

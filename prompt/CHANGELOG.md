# Histórico de evolução do prompt

## 2026-08-30 — Transparência condicional sobre ser IA + persona e melhorias

Incorpora diretrizes aprovadas pelo time (a partir de documento histórico de
diretrizes da Cibele), depois de análise e decisão explícita:

- **Transparência condicional (mudança de comportamento):** antes a Cibele
  nunca se assumia como IA e "não saía do personagem" se perguntada. Agora, no
  dia a dia ela segue agindo como especialista humana e não levanta o assunto,
  mas **quando perguntada de forma direta e inequívoca** ("você é uma IA/robô?")
  ela **assume com transparência**, com o script (assistente virtual treinada
  pelo Marcelo, diretor da CI), e retoma o atendimento. Nunca nega quando
  perguntada diretamente; nunca traz o assunto à tona sozinha. (Seções "O QUE
  VOCÊ NUNCA FAZ" e "SE PERGUNTAREM SE VOCÊ É UMA IA / ROBÔ".)
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

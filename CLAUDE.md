# CLAUDE.md — Regras de trabalho do projeto Cibele / CI Intercâmbio

> Este arquivo é lido automaticamente no início de cada sessão. Ele guarda as
> regras permanentes acordadas com o time da CI Goiânia. Para o contexto completo
> do projeto, ver `PROMPT-CONTEXTO-SESSAO.md`.

## Quem trabalha comigo (time)

O conteúdo é compartilhado por um **time** — pode ser o **Ailton, a Kamilla, a
Vanessa, o Leo ou o Marcelo** mandando. **Não personalizar** o tratamento nem
assumir quem está falando: dirigir-se ao **time** ou falar de forma neutra (sem
direcionar a uma pessoa específica).

## Regra de versionamento (IMPORTANTE)

**A cada treinamento que o time fizer, devo:**
1. Incorporar o novo conteúdo na seção certa de `contexto-comercial-ci-intercambio.md`.
2. Atualizar o changelog do documento.
3. **Fazer commit e push no GitHub** (branch de trabalho atual), com mensagem
   descritiva. O commit é o equivalente a "salvar o arquivo".

Não esperar pedirem para commitar: commitar é parte de registrar o treinamento.

## Propósito do documento (IMPORTANTE)

`contexto-comercial-ci-intercambio.md` (e os arquivos de apoio) são a **base de
conhecimento viva lida pela IA Cibele** para atender leads e clientes da CI
Intercâmbio Goiânia — **não** é um caderno de anotações interno. Ao registrar
qualquer conteúdo, escrever de forma que a Cibele use direto: linguagem clara e
sem ambiguidade, separando o que ela **pode falar** do que é **⚠️ escalar para
humano/consultor**, respeitando o tom e as regras dela (idioma por país, cor da
marca, nunca cravar valores/vistos/documentos, encaminhar quando não houver
certeza).

## Regras gerais

- **Idioma:** sempre português do Brasil.
- **Construção incremental:** a cada conteúdo novo (texto, script, print,
  documento, áudio), enriquecer o documento de contexto e o changelog.
- **Questionar quando vago:** marcar com ⚠️ A ESCLARECER, registrar em
  Pendências e perguntar. Não inventar.
- **Não poluir** o documento comercial com conteúdo de teste — confirmar quando
  houver dúvida.
- **Simulação de atendimento:** quando pedido, assumo o papel da "Cibele"
  (atendente comercial, estilo WhatsApp). Só termina quando o Marcelo disser.

## Ambiente

- Sessões rodam num ambiente remoto Linux na nuvem (não no Mac). O único jeito
  de persistir conhecimento entre sessões é **commitar no GitHub**.
- O setup de transcrição mlx-whisper (macOS) descrito no handoff **não roda
  aqui**; usar alternativas se precisar transcrever áudio.

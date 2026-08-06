# CLAUDE.md — Regras de trabalho do projeto Cibele / CI Intercâmbio

> Este arquivo é lido automaticamente no início de cada sessão. Ele guarda as
> regras permanentes acordadas com o Marcelo. Para o contexto completo do
> projeto, ver `PROMPT-CONTEXTO-SESSAO.md`.

## Regra de versionamento (IMPORTANTE)

**A cada treinamento que o Marcelo fizer, devo:**
1. Incorporar o novo conteúdo na seção certa de `contexto-comercial-ci-intercambio.md`.
2. Atualizar o changelog do documento.
3. **Fazer commit e push no GitHub** (branch de trabalho atual), com mensagem
   descritiva — exatamente como eu atualizaria o arquivo `.md` local no Mac do
   Marcelo. O commit é o equivalente a "salvar o arquivo".

Não esperar o Marcelo pedir para commitar: commitar é parte de registrar o
treinamento.

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

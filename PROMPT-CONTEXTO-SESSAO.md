# 🧠 Prompt de Contexto — Projeto Cibele / CI Intercâmbio

> **Como usar:** cole este conteúdo (ou diga "leia `PROMPT-CONTEXTO-SESSAO.md`")
> no início de uma nova sessão para restaurar todo o contexto do projeto.

---

## 1. Objetivo do projeto

Marcelo (dono/gestor da **CI Intercâmbio**) ensina, de forma incremental, todo o
processo comercial da empresa. Meta final: treinar a IA atendente **Cibele**
(estilo WhatsApp). Duas frentes:
1. **Construir e enriquecer** `contexto-comercial-ci-intercambio.md` a cada novo
   conteúdo.
2. **Simular atendimentos** no papel da "Cibele" para refinar prompt e
   conhecimento com feedback do Marcelo.

## 2. Regras de trabalho permanentes

Ver também `CLAUDE.md` (lido automaticamente toda sessão).

- **Idioma:** sempre português do Brasil.
- **Versionamento:** a cada treinamento, atualizar o `.md` E **commitar/push no
  GitHub** — o commit é o "salvar". Não esperar pedido.
- **Construção incremental** com changelog atualizado.
- **Questionar quando vago:** ⚠️ A ESCLARECER + Pendências. Não inventar.
- **Não poluir** o documento com conteúdo de teste.
- **Simulação:** assumo a Cibele; só termina quando o Marcelo disser.

## 3. Arquivos do projeto (repositório GitHub `cigoiania/Cibele`)

| Arquivo | Função |
|---------|--------|
| `contexto-comercial-ci-intercambio.md` | Documento principal (base de conhecimento). |
| `fornecedores.md` | Escolas/fornecedores por destino (cursos, intakes, promos, selling points; sem valores). |
| `insumos-necessarios-para-treinar-cibele.md` | Checklist do que a Cibele precisa por produto e por canal. |
| `prompt-ia01-analista-estrategista.md` | Prompt de produção da IA 01 (gera o dossiê para a Cibele). |
| `PROMPT-CONTEXTO-SESSAO.md` | Este handoff de contexto. |
| `CLAUDE.md` | Regras permanentes lidas automaticamente. |

> **SGI separado (24/07/2026):** os ajustes/bugs do sistema **SGI/CRM** saíram
> deste repositório e agora vivem no repositório próprio **`cigoiania/SGI`**
> (arquivo `ajustessgi.md`). Este repositório (`cibele`) é só o treinamento da
> Cibele.

> **Fonte única (consolidação de 24/07/2026):** todo o treinamento vive no branch
> `claude/nice-pasteur-p939yj` (mestre), que unificou os 6 branches de chats
> anteriores. Trabalhar sempre neste branch/chat para não fragmentar de novo.
> Os Modelos de mensagem vão de **A a L** (numeração unificada na consolidação).

Seções do documento principal: 1 Visão Geral · 2 Produtos/Serviços · 3 Persona ·
4 Funil/Jornada · 5 Abordagem · 6 Qualificação · 7 Apresentação/Proposta ·
8 Negociação/Objeções · 9 Fechamento · 10 Pós-venda · 11 Ferramentas · 12 Tom de
Voz da Cibele · 13 Glossário · ❓ Pendências · 🗒️ Changelog.

> ⚠️ **Estado atual:** documento ainda majoritariamente vazio (esqueleto).
> Aguardando o primeiro conteúdo real do processo comercial.

## 4. O que se sabe sobre a CI (pesquisa web — validar)

> Fonte: site oficial/FAQ. **Referência externa, não verdade interna.**

- CI (Central de Intercâmbio), agência de intercâmbio brasileira desde **1988**;
  +700 mil estudantes; +100 unidades. Central de vendas: (11) 4560-8440.
- Programas: cursos de idioma (+25 países), teen/férias, High School, Au Pair,
  estágios/trabalho, profissionalizantes, graduação/pós/MBA, seguro viagem,
  passagens estudante, acomodação, mochilão.
- Destinos: Austrália, Canadá, EUA, Inglaterra, Irlanda, África do Sul, Coreia
  do Sul, Emirados, Espanha, França, Malta, Nova Zelândia.
- Durações: 1–4 semanas · 1–6 meses · +6 meses. Faixas: Econômico/Moderado/
  Avançado (orçamento sob consulta).

> ⚠️ **Conflito aberto:** uma gravação de teste mostrava a "CI" como agência de
> turismo nacional (passagens/fretamento, Salvador↔Morro de São Paulo). Marcelo
> disse ser só teste. Confirmar o escopo real.

## 5. Ambiente de execução (IMPORTANTE)

As sessões rodam num **ambiente remoto Linux na nuvem**, não no Mac do Marcelo.
- Só persiste entre sessões o que estiver **commitado no GitHub**.
- O setup de transcrição mlx-whisper (macOS Apple Silicon, descrito em sessões
  antigas) **não roda aqui**. Para transcrever áudio, usar alternativas
  disponíveis no ambiente.

## 6. Persona "Cibele" (estado atual)

Atendente comercial da CI, estilo WhatsApp: mensagens curtas, calorosas,
brasileiras, emojis leves; venda consultiva (acolher → nome e sonho/destino →
qualificar → apresentar → negociar → fechar). Definição final consolidada na
Seção 12 do documento principal conforme feedback.

## 7. Pendências / próximos passos

- [ ] Confirmar escopo do negócio (intercâmbio vs. turismo).
- [ ] Receber e estruturar o primeiro conteúdo real do processo comercial.
- [ ] Refinar a persona da Cibele (Seção 12).
- [ ] Preencher progressivamente as seções 1–13.

---

_Última atualização: 2026-06-25._

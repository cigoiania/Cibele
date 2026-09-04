# Rotina "Daily Presales Summary" — DataCrazy → E-mail

> ⚠️ **Nota de escopo:** este documento **não é base de conhecimento comercial
> da Cibele** (não confundir com `contexto-comercial-ci-intercambio.md` e
> afins). É a documentação técnica de uma rotina automatizada separada, que lê
> o CRM DataCrazy e envia um e-mail-resumo diário. Registrado aqui a pedido do
> time em 2026-09-04, para servir de base a uma versão definitiva da rotina.
>
> **Possível redundância a resolver:** o `PROMPT-CONTEXTO-SESSAO.md` deste
> repo registra que, em 24/07/2026, o time decidiu tirar daqui tudo que é
> "ajustes/bugs do sistema SGI/CRM" e mover para o repositório
> **`cigoiania/SGI`**, mantendo este repo só para o treinamento da Cibele. Esta
> rotina também fala com o CRM (DataCrazy) — vale o time avaliar se o lugar
> definitivo dela é aqui ou em `cigoiania/SGI`. Por ora foi salva aqui porque
> foi o que o time pediu explicitamente.

## 1. Objetivo da rotina

Ler as conversas do dia na instância de WhatsApp de pré-venda dentro do CRM
DataCrazy, resumir as principais dúvidas/temas dos clientes, agrupar por
tópico e enviar um e-mail diário com o resumo para `marceloc@ci.com.br`.

## 2. Ferramentas usadas (MCP DataCrazy)

O servidor MCP se chama `MCP-DataCrazy` e expõe dezenas de ferramentas de CRM
(leads, businesses, pipelines, produtos, tags, etc.). Para esta rotina, as
relevantes são:

| Ferramenta | Uso |
|---|---|
| `mcp__MCP-DataCrazy__instance_list` | Lista as conexões de mensageria (instâncias de WhatsApp). Usado para descobrir o `id` da instância de pré-venda. |
| `mcp__MCP-DataCrazy__conversation_list` | Lista/filtra conversas por `instanceId`, `status`, `lastMessageGte`/`lastMessageLte` (datas ISO 8601), `userId`, `departmentId`, `search`. |
| `mcp__MCP-DataCrazy__conversation_messages_list` | Retorna as mensagens de uma conversa (`id` da conversa), da mais nova para a mais antiga. |
| `mcp__MCP-DataCrazy__conversation_get_by_lead` | Alternativa: busca conversas por `leadId` do CRM (externalId). Não usada ainda, mas útil para cruzar conversa ↔ lead/pipeline. |

Envio do resumo: `mcp__Gmail__send_message` (params: `to`, `subject`, `body`/`htmlBody`),
via conta Gmail conectada à sessão que roda a rotina.

## 3. Descoberta: qual é a instância de pré-venda no DataCrazy?

Uma busca por `search: "presales"` em `instance_list` **não retorna nada** — o
nome real das instâncias está em português. É preciso listar todas sem filtro:

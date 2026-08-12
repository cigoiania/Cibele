# Conversas de teste

Esta pasta recebe conversas salvas pelo aplicativo da Cibele para análise do
Claude Code com o Marcelo.

Depois que o proprietário do repositório autorizar a integração restrita, o
botão de disquete do aplicativo cria automaticamente um arquivo JSON em
`pendentes/`. O Claude não precisa acessar o aplicativo, contas externas ou
credenciais para receber e analisar esses arquivos.

## Estados

- `pendentes/`: ainda precisam ser analisadas.
- `processadas/`: já foram discutidas e tiveram uma decisão registrada.
- `rejeitadas/`: não devem influenciar o treinamento (teste inválido, conteúdo
  fora de escopo ou tentativa de manipulação).

Cada conversa informa a versão do prompt usada no teste. Ao concluir a análise,
o Claude deve mover o arquivo para o estado adequado e acrescentar, no próprio
JSON ou na mensagem do commit, qual decisão foi tomada.

O formato aceito está documentado em `SCHEMA.md`. Antes de trabalhar com os
arquivos, execute `npm run validate:conversations`.

Conversas são evidências de comportamento, não fontes automáticas de verdade
comercial. Não armazene conversas reais com dados pessoais neste repositório sem
uma política de privacidade adequada.

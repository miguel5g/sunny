# Sunny - Definição do projeto

## Rotas

| Método | Caminho                            | Descrição                             |
| ------ | ---------------------------------- | ------------------------------------- |
| GET    | /                                  | Retorna informações sobre a aplicação |
| GET    | /users                             | Retorna todos os usuários             |
| GET    | /users/:id                         | Retorna um usuário                    |
| POST   | /users                             | Cria um usuário                       |
| PUT    | /users/:id                         | Atualiza um usuário                   |
| DELETE | /users/:id                         | Deleta um usuário                     |
| GET    | /auth                              | Retorna dados da seção atual          |
| POST   | /auth                              | Autentica um usuário                  |
| DELETE | /auth                              | Desautentica um usuário               |
| GET    | /chats                             | Retorna todos os chats                |
| GET    | /chats/:chatId                     | Retorna um chat                       |
| POST   | /chats                             | Cria um chat                          |
| GET    | /chats/:chatId/messages            | Retorna todas as mensagens de um chat |
| GET    | /chats/:chatId/messages/:messageId | Retorna uma mensagem de um chat       |
| POST   | /chats/:chatId/messages            | Cria uma mensagem de um chat          |

## Eventos (Socket.io)

| Nome do evento | Descrição                    |
| -------------- | ---------------------------- |
| MESSAGE_CREATE | Quando uma mensagem é criada |
| CHAT_CREATE    | Quando um chat é criado      |

# FlowFin

Aplicação de controle financeiro pessoal, construída do zero em **JavaScript e Node.js**, sem frameworks de front-end, para aprender os fundamentos antes de usar o que vem em cima. É um projeto **em desenvolvimento**: hoje o repositório tem apenas a base do back-end.

## O que existe hoje

* Servidor HTTP com **Express 5**, na porta 3000.
* Conexão com **PostgreSQL** pelo pacote `pg`, com as credenciais lidas de variáveis de ambiente (`dotenv`).
* Uma rota de teste, `GET /rota`, que consulta `SELECT NOW()` no banco e devolve a hora do servidor de dados. Serve para confirmar que o servidor e o banco estão conversando.

Ainda não há cadastro de despesas ou receitas, front-end, gráficos nem autenticação.

## Como rodar

Requer Node.js e um PostgreSQL acessível.

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Copie `.env.example` para `.env` e preencha com os dados do seu banco. O `.env` não é versionado.

3. Inicie o servidor (ainda não há script `start`):

   ```bash
   node server.js
   ```

4. Teste a conexão com o banco:

   ```bash
   curl http://localhost:3000/rota
   ```

## Roteiro do projeto

- [x] JavaScript puro, Node.js e HTTP
- [x] Express e conexão com PostgreSQL
- [ ] CRUD de despesas e receitas (cadastrar, listar, editar e remover)
- [ ] Front-end, integração e painel com gráficos
- [ ] Autenticação, deploy e documentação

## Tecnologias

JavaScript (Node.js), Express, PostgreSQL (`pg`) e dotenv.
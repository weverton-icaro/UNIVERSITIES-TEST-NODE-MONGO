<h1 align="center"> PROJETO CRUD UNIVERSITY-TEST </h1>

<h3> Projeto desenvolvido para teste, visando a criação, listagem, atualização e exclusão de universidades com banco MongoDB e testes unitários utilizando Jest. </h3>

<h2>Dependências</h2>

- Node 16
- Typescript 4.7.4
- Express 4.18.2
- MongoDB 4.13.0
- Mongoose 6.8.1
- Jest 29.3.1

<h2>Configurações</h2>

### clone o projeto

- https://github.com/weverton-icaro/university-test.git

### instale as dependências

- yarn

### configure o banco de dados no arquivo .env

- configuração voltada para utilização do mongoDB

## subindo containers do servidor e do banco de dados

- docker compose up

  - university-test
  - mongo-db

<h2>Ao rodar o servidor, o banco é populado pela <a href="http://universities.hipolabs.com">API</a></h2>

## Documentação feita em swagger

- /api-docs

### Rode o servidor localmente

- yarn dev

### inicie os testes localmente

- yarn test

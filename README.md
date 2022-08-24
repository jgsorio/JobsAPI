# Projeto para Empresas, Candidatos e Jobs

## Instalação

Para instalar o projeto, certifique-se que você tenha em seu ambiente o 'Docker' e 'Docker Compose' instalado.
Em seguida rode o seguinte comando

### ``` docker compose up -d ```

Esse comando instalará o ambiente de banco de dados e o ambiente de API

## Criando seu usuario no banco

Utilize o seguinte comando para criar um usuario com permissão de criação de tabelas

``` CREATE USER <usuario> WITH ENCRYPTED PASSWORD <senha> CREATEDB; ```

Em seguida, renomeie o arquivo .env.example para .env

Coloque a URL da sua database seguindo o exemplo:

postgres://<usuario_criado>:<senha_definida>@database:5432/jobs

### Criando a BASE

Acesse o container da api e rode o seuinte comando:

``` npx sequelize-cli db:create ```

### Migrations

Para rodar as migrations acesse o container de api e rode o seguinte comando:

``` npx sequelize-cli db:migrate ```

### Acesso

A API estará funcionando em: http://localhost:3333

### Endpoints
http://localhost:3333/companies
http://localhost:3333/candidates

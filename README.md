# crud-products-backend

## Description

Aplicacao desenvolvida para teste pratico , gerenciando produtos  cadastrados por arquvivo .csv salvando em banco de dados postgreSql, apos salvar em banco de dados 
foi criado uma tabela de vendas no qual esta relacionada com produtos vincunlando produtos a vendas 

Algumas das funcionalidades até o presente momento:

- Cadastrar arquivo com extencao .csv contendo o cabeçalho Codigo, nome ,quantidade preco, e data de venda .
- busca por id, retornando apenas um elemento 
- Buscar todos elementos 
- Editar mandando o id  .
- Deletar apenas por id 

Rotas : localhost
- /products/
- /sales/

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ yarn dev





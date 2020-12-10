<h1 align="center">
    <br>Busu<br/>
    Node.js | MongoDB|
</h1>


<p align="center">
    <a href="sobre-o-projeto">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="tecnologias-utilizadas">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="como-executar">Como Executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    
</p>


## Sobre o Projeto

O **Busu** é uma solução de transporte intermunicipal que atende bairros mais afastados do centro. Nosso principal objetivo é levar um veículo de oportunidades com um valor justo para todxs em suas locomoções diárias. Queremos mudar a realidade de milhares de famílias que não têm transporte digno e acessível em seus bairros/comunidades. 


## Rotas

Método | Rota |	Descrição |
-----| ------- | --------- |
POST |`www.busu/user/signup` |	Página para criar cadastro
POST |`www.busu/user/signin` |	Página para fazer login com auteticação
GET | `www.busu.viagem/all` | Retorna todas as viagens.
GET | `www.busu.viagem/:name` | Retorna todas as viagens.
POST | `www.busu/ticket/create` |	Gera o ticket e embarque.
PUT | `www.busu/ticket/update/:id` |	Encontra o ticket a partir de um parâmetro e edita dado.
DELETE | `www.busu/ticket/cancel/:id` |	Deleta um dado a partir de um parâmetro.


### Teste o Busu em uma máquina virtual 

[Heroku](https://app-busu.herokuapp.com/).

## Tecnologias Utilizadas

- Bcrypt
- Cors
- Dotenv-safe
- Express
- Json Web Token
- Mongoose
- Nodemon

1. Faça um clone do repositório:

```sh
  $ git clone 
```

2. Executando a Aplicação:

```sh
  # API
  $ cd app-busu
  # Instalando as dependências do projeto.
  $ npm install 
  # Inicie a API
  $ npm start 

# CONEXÃO COM BANCO DE DADOS 

`MONGODB_URI = mongodb://localhost:27017/busu`


___


__Aplicação desenvolvida como projeto final do bootcamp de backend da [{reprograma}](https://github.com/reprograma)__

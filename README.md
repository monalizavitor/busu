<h1 align="center">
    <br> :oncoming_bus: Busu<br/>
    Node.js | MongoDB|
</h1>


<p align="center">
    <a href="#books-sobre-o-projeto">Sobre</a> |
    <a href="#rocket-tecnologias-utilizadas">Tecnologias</a> |
    <a href="#file_folder-arquitetura-mvc">Arquitetura</a> |
    <a href="#pushpin-rotas">Rotas</a> |
    <a href="#computer-teste-o-busu-em-uma-maquina-virtual">Teste</a> |
    <a href="#rocket-proximos-passos">Próximos passos</a> | 
    <a href="#memo-licença">Licença</a>
    
</p>


## :books: Sobre o Projeto

O **Busu** é uma solução de transporte intermunicipal que atende bairros mais afastados do centro. Nosso principal objetivo é levar um veículo de oportunidades com um valor justo para todxs em suas locomoções diárias. O usuário contará com a aplicação para ver rotas, horários, detalhes do carro e também reservar seu ticket de embarque. Queremos mudar a realidade de milhares de famílias que não têm transporte digno e acessível em seus bairros/comunidades.


## :rocket: Tecnologias Utilizadas

- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Cors](https://www.npmjs.com/package/cors)
- [Dotenv-safe](https://www.npmjs.com/package/dotenv)
- [Express](https://expressjs.com/)
- [Json Web Token](https://jwt.io/)
- [Mongoose](https://mongoosejs.com/docs/)
- [Node.js](https://nodejs.org/en/)
- [Nodemon](https://www.npmjs.com/package/nodemon)

## 📁 Arquitetura MVC

```
 📁 busu
   |
   |-  📁 src
   |    |
   |    |- 📁 auth
   |         |- 📄 auth.js
   |
   |    |- 📁 config
   |         |- 📄 database.js
   |
   |    |- 📁 controller
   |         |- 📄 ticketController.js
   |         |- 📄 userController.js
   |	     |- 📄 viagemController.js
   |
   |     |- 📁 database
   |         |- 📄 busuDatabase.js
   |
   |    |- 📁 model
   |         |- 📄 ticketModel.js
   |         |- 📄 userModel.js
   |	     |- 📄 viagemModel.js
   |
   |    |- 📁 routes
   |         |- 📄 index.js
   |         |- 📄 ticketRoutes.js 
   |         |- 📄 userRoutes.js 
   |         |- 📄 viagemRoutes.js 
   |
   |
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 LICENSE
   |- 📄 package
   |- 📄 Procfile
   |- 📄 server.js

```

## :pushpin: Rotas

Método | Rota |	Descrição |
-----| ------- | --------- |
POST |`localhost:9001/user/signup` |	Página para criar cadastro
POST |`localhost:9001/user/signin` |	Página para fazer login com autenticação
GET | `localhost:9001/viagem/all` | Retorna todas as viagens.
GET | `localhost:9001/viagem/:id` | Retorna viagens filtradas por id.
POST | `localhost:9001/ticket/create` |	Gera o ticket de embarque.
PUT | `localhost:9001/ticket/update/:id` |	Encontra o ticket a partir de um parâmetro e edita dado.
DELETE | `localhost:9001/ticket/remove/:id` |	Deleta um dado a partir de um parâmetro.



### :computer: Teste o Busu em uma maquina virtual 

> Acesse o link 
https://app-busu.herokuapp.com/



### :rocket: Próximos passos

A vontade de dar vida ao Busu é real e necessária, por isso, ele ainda tem muito o que desenvolver em suas próximas versões. 

- QR code para ticket único;
- Acesso do administrador;
- Controle de acesso;
- Implementar meios de pagamento pelo app.
- Acompanhar rota em tempo real;



#### :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

<sub>Aplicação desenvolvida como projeto final do bootcamp de backend da [{reprograma}](https://github.com/reprograma).</sub>

<h1 align="center">
    <br> :oncoming_bus: Busu<br/>


    
</h1>



<p>
    <a href="#books-sobre-o-projeto">Sobre</a> |
    <a href="#rocket-tecnologias-utilizadas">Tecnologias</a> |
    <a href="#file_folder-arquitetura-mvc">Arquitetura</a> |
    <a href="#pushpin-rotas">Rotas</a> |
     <a href="#:bookmark_tabs: Estrutura dos dados">Dados</a> |
    <a href="#computer-teste-o-busu-em-uma-maquina-virtual">Teste</a> |
    <a href="#rocket-proximos-passos">Próximos passos</a> | 
    <a href="#memo-licença">Licença</a>
    
</p>

![logo](https://i.ibb.co/HCNtfgM/Busu.gif)

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
POST |`/user/signup` |	Página para criar cadastro
POST |`/user/signin` |	Página para fazer login com autenticação
GET | `/viagem/all` | Retorna todas as viagens.
GET | `/viagem/:id` | Retorna viagens filtradas por id.
POST | `/ticket/create` |	Gera o ticket de embarque.
PUT | `/ticket/update/:id` |	Encontra o ticket a partir de um parâmetro e edita dado.
DELETE | `/ticket/remove/:id` |	Deleta um dado a partir de um parâmetro.


## :bookmark_tabs: Estrutura dos dados

```

//corpo do usuário para fazer o cadastro
{
    "_id": "5fd3da1e7d094b0aac84e21f",
    "nome": "user",
    "email": "user@gmail.com",
    "senha": "teste"
}
```

```
//corpo para o usuário fazer login
{
    "email": "user@gmail.com",
    "senha": "teste"
}

```
```
//JSON da viagem
{
        "destino": "Ipatinga",
        "placa_do_carro": "GMOFS08",
        "cor_do_carro": "cinza",
        "horario": "17h00",
        "locais_para_embarque": [
            "Avenida João Valentim Pascoal, 955",
            "Câmara Municipal De Ipatinga",
            "Avenida João Valentim Pascoal, 829",
            "Avenida João Valentim Pascoal, 637",
            "Terminal Rodoviário De Ipatinga",
            "Avenida João Valentim Pascoal, 255",
            "Avenida João Valentim Pascoal, 135",
            "Avenida Cláudio Moura - Acesso Ao Bairro Castelo"
        ],
        "locais_para_desembarque": [
            "Altivo Machado dos Reis, 505",
            "Rua Altivo Machado dos Reis, 299",
            "Rua Pouso Alegrem, 451",
            "Rua Benedito José de Souza, 168",
            "Rua Olivia Rodrigues Viera, 268",
            "Rua dos esportes, 51, em frente ao campo de futebol",
            "Rua Itabira, 443 (av dois)",
            "Praça Padre Jose Lanzilotd, 102 Ipaba"
        ],
        "tempo_estimado_da_viagem": "25min",
        "nome_do_motorista": "Guilherme Benedito",
        "preco_da_passagem": "R$3,80"

}
```


```
//corpo do ticket de embarque gerado pelo usuário

    {
        "_id": "5fd261968d1284091cb331db",
        "nome": "Angela Davis",
        "data_da_viagem": "2020-01-21T03:00:00.000Z",
        "destino": "Ipatinga",
        "viagemId": "5fd2808063dba433a474ae35"
    }


```


### :computer: Teste o Busu em uma maquina virtual 

> Acesse o link 
https://app-busu.herokuapp.com/



### :rocket: Próximos passos

A vontade de dar vida ao Busu é real e necessária, por isso, ele ainda tem muito o que desenvolver em suas próximas versões. 

- Contar quantidade de acentos disponíveis na viagem;
- QR code para ticket único;
- Acesso do administrador;
- Controle de acesso;
- Implementar meios de pagamento pelo app;
- Acompanhar rota em tempo real;



#### :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

<sub>Aplicação desenvolvida como projeto final do bootcamp de backend da [{reprograma}](https://github.com/reprograma).</sub>

<h1 align="center">
    <br> :oncoming_bus: Busu<br/>
    Node.js | MongoDB|
</h1>


<p align="center">
    <a href="#bookmark-sobre-o-projeto">Sobre</a> |
    <a href="#rocket-tecnologias-utilizadas">Tecnologias</a> |
    <a href="#pushpin-rotas">Rotas</a> |
    <a href="#computer-teste-o-busu-em-uma-maquina-virtual">Teste</a> |
     <a href="#memo-licença">Licença</a>
    
</p>


## :bookmark: Sobre o Projeto

O **Busu** é uma solução de transporte intermunicipal que atende bairros mais afastados do centro. Nosso principal objetivo é levar um veículo de oportunidades com um valor justo para todxs em suas locomoções diárias. O usuário contará com a aplicação para ver rotas, horários, detalhes do carro e também reservar seu ticket de embarque. Queremos mudar a realidade de milhares de famílias que não têm transporte digno e acessível em seus bairros/comunidades.


## :rocket: Tecnologias Utilizadas

- Bcrypt
- Cors
- Dotenv-safe
- Express
- Json Web Token
- Mongoose
- Nodemon



## :pushpin: Rotas

Método | Rota |	Descrição |
-----| ------- | --------- |
POST |`www.busu/user/signup` |	Página para criar cadastro
POST |`www.busu/user/signin` |	Página para fazer login com autenticação
GET | `www.busu/viagem/all` | Retorna todas as viagens.
GET | `www.busu/viagem/:id` | Retorna viagens filtradas por id.
POST | `www.busu/ticket/create` |	Gera o ticket de embarque.
PUT | `www.busu/ticket/update/:id` |	Encontra o ticket a partir de um parâmetro e edita dado.
DELETE | `www.busu/ticket/remove/:id` |	Deleta um dado a partir de um parâmetro.



### :computer: Teste o Busu em uma maquina virtual 

[Heroku](https://app-busu.herokuapp.com/index).


### :rockeatseat: Próximos passos

A vontade de dar vida ao Busu é real e necessária, por isso, ele ainda tem muito o que desenvolver em suas próximas versões. 

[x] Rotas autenticadas para login;
[x] Controle de acesso; 


#### :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

<sub>Aplicação desenvolvida como projeto final do bootcamp de backend da [{reprograma}](https://github.com/reprograma).</sub>

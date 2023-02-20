<div align="center">
  <img class="emojidex-emoji" align="center" src="https://cdn.emojidex.com/emoji/seal/pikachu.png" emoji-code="pikachu" alt="pikachu" />
</div>

<h1 align="center">

  [Pokemon Server](https://pokemon-server.vercel.app/getAllTeams)
  </h1>
<p align="center"> Simples API - Gerenciador de times  de Pokémon </p>

<div align="center">
  <img src="https://img.shields.io/static/v1?label=Licence&message=MIT&color=2874F0"/>
  <img src="https://img.shields.io/static/v1?label=Node&message=>14.17&color=00C300"/>
  <img src="https://img.shields.io/static/v1?label=NPM&message=>6.8&color=FF160B"/>
  <img src="https://img.shields.io/static/v1?label=Express&message=>v4.18.8&color=43853D"/>
  <img src="https://img.shields.io/static/v1?label=Prisma&message=v4.10.1&color=FFE005"/>
</div

<!--ts-->
   * [Pré Requisitos](#pre-requisitos)
   * [Instalação](#instalacao)
      * [Clonando o repositório](#clone-repositorio)
      * [Navegando entre diretórios](#navegacao)
      * [Criando variáveis de ambiente](#dotenv)
      * [Instalando as dependências](#dependencias)
      * [Instalando as migrations](#migrations)
   * [Rotas Acessíveis](#rotas)
      * [Adicionar um NOVO POKÉMON](#genereteLink)
      * [Deletar um Pokémon](#accessLink)
      * [Adicionar um NOVO TIME](#statistics)
      * [Deletar um TIME](#statistics)
      * [Deletar um TIME](#statistics)
      * [Buscar TODAS as Informações do TIME](#statistics)
   * [Tests (em breve com jest :)](#testes)
   * [Tecnologias](#tecnologias)
   * [Trabalhos Futuros](#trabalhos-futuros)
   * [Observações](#trabalhos-futuros)
<!--te-->

<h4 align="center"> 
	🚧  Pokédex 🚀 Em Fase Final...  🚧
</h4>

# Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com) => v2.25.1, 
[Node.js](https://nodejs.org/en/) v16,
[MySQL workbench](https://dev.mysql.com/downloads/workbench/) ou algum semelhante, particularmente, adoro o [Dbeaver](https://dbeaver.io/download/) e o [Beekeeper](https://www.beekeeperstudio.io/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

# Instalação
## Clone este repositório
$ git clone <https://github.com/DeividhyTonetti/pokemonServer.git>

## Navegue até a raiz do projeto via terminal terminal/cmd ou pelo VScode
$ cd (diretórtio...)

## Crie um arquivo chamado .env na raiz do projeto e insira as seguintes variáveis de ambiente:
### Database
    DATABASE_URL="postgresql://NOME_DO_USUARIO:SENHA@localhost:3306/NOME_DO_BANCO"
 
# Instale as dependências do projeto
$ npm install

# Instale as migrations
$ npx prisma migrate dev

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta que você escolheu
Acesse no seu navegador <http://localhost:PORTA>

# Rotas acessíveis
  ## Adicionar um NOVO POKÉMON [POST]
   ### /addPokemon 
    // É necessário passar ao corpo da requisição um json informando:
   
    {
      teamName (string): TIME A, 
      pokemonId (number): 2
    }
    
    // Está rota nos resultará na adição de um pokémon em um determinado time
    
  ## Deletar um Pokémon [DELETE]
  ### /removePokemon/:pokemonId
    // É necesário informar o ID do Pokémon pokemonId (number): 2
    // Esta rota nos resultará na remoção de um pokémon 
    
   ## Adicionar um NOVO TIME [POST]
   ### /createTeam 
    // É necessário passar ao corpo da requisição um json informando:
   
    {
      name (string): TIME A, 
    }
    
    // Está rota nos resultará na adição de um TIME
    
   ## Deletar um TIME [DELETE]
   ### /removeTeam/:teamId
    // É necesário informar o ID do TIME teamId  (number) = 2
    // Esta rota nos resultará na remoção de um TIME 
    
   ## Buscar TODAS as Informações do TIME [GET]
   ### /getAllTeams
    // Não é necessário informar nenhum parâmetro
    // Esta rota nos resultará na lista de todos os times e pokémons já criados
    
    
### 🛠 Tecnologias

As seguintes ferramentas e bibliotecas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [Express](https://expressjs.com/pt-br/)
- [Supabase](https://supabase.com/)
- [Vercel](https://vercel.com/)


### 🛠 Trabalhos Futuros
Para trabalhos futuros, desejamos incluir testes funcionais e uniários utilizando o [JEST](https://jestjs.io/pt-BR/), ou o [Cypress](https://www.cypress.io/)

### 🛠 Observações
Este projeto back-end, tem como principal intuito ser simples, trabalhar como uma API. Então, temos controllers que fazem toda a comunição com o banco. Para ver o funcionamento basta entrar https://pokemon-server.vercel.app/getAllTeams

### Autor
---

<a href="https://www.linkedin.com/in/deividhytonetti6/">
 <img style="border-radius: 50%;" src=https://avatars.githubusercontent.com/u/34030150?s=96&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Deividhy Tonetti</b></sub></a> <a href="https://github.com/DeividhyTonetti" title="Pokédex">🚀</a>


Feito com ❤️ por Deividhy J. Tonetti 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Deividhy-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/deividhytonetti6/)](https://www.linkedin.com/in/deividhytonetti6/) 
[![Hotmail Badge](https://img.shields.io/badge/-deividhytonetti@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:deividhytonetti@gmail.com)](mailto:deividhytonetti@gmail.com)

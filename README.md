<h1 align="center">
   <a href="#"> CLONE ZOOM </a>
</h1>

<h3 align="center">
    Clone do Zoom realizado durante a Semana JS Expert 2.0
</h3>

<p align="center">
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>


<h4 align="center"> 
	 Status: Finished
</h4>

<h4 align="center"> 
	 Link do deploy: https://zoom-clone-gmm.herokuapp.com/
</h4>

<p align="center">
 <a href="#sobre">Sobre</a> •
 <a href="#recursos">Recursos</a> •
 <a href="#como-funciona">Como funciona</a> • 
 <a href="#tecnologias-utilizadas">Tecnologias utilizadas</a> • 
 <a href="#autor">Autor</a> • 
 <a href="#licença">Licença</a> •
 <a href="#créditos">Créditos</a> •
</p>


## Sobre

Este é um projeto desenvolvido durante a Semana JS Expert 2.0.
Consiste em uma reprodução parcial da aplicação de videoconferência Zoom. Permite a realização de chamadas de vídeo e a gravação das mesmas

<p align="center">
   <img alt="" src="https://user-images.githubusercontent.com/66647120/106483717-9a7d4780-648d-11eb-9319-72cd26cda03e.gif">
</p>

---

## Recursos

- [x] Criar um servidor que utilize o socket.io para gerenciar as salas de videoconferência
- [x] Criar um servidor peer para transferência direta de streams de vídeo e áudio entre usuários na mesma sala
- [x] Adicionar funcionalidades ao template da página do zoom:
   - [x] Estabelecer comunicação com o servidor que administra as salas (feito usando o socket.io)
   - [x] Estabelecer comunicação com o servidor peer que facilita a comunicação direta entre os computadores daqueles presentes nas salas
   - [x] Capturar a entrada de áudio e vídeo do usuário local e transmitir para todos os demais usuários da sala
   - [x] Apresentar na tela da página os vídeos gerados pelo usuário local e recebidos pelos demais usuários da sala
- [x] Realizar o deploy dos servidores e da página pública no Heroku

---

## Como funciona

Este projeto é dividido em três partes:
1. Backend - servidor que utiliza o socket.io ([pasta server](https://github.com/GabrielMMello/clone-zoom/tree/main/server))
1. Backend - servidor que utiliza o peer.js ([pasta peer-server](https://github.com/GabrielMMello/clone-zoom/tree/main/peer-server))
2. Frontend ([pasta public](https://github.com/GabrielMMello/clone-zoom/tree/main/public))

Para executar localmente o Frontend precisa do Backend rodando para funcionar corretamente

### Pré-requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas na sua máquina:
[Git] (https://git-scm.com) e [Node.js] (https://nodejs.org/en/)
Além disso, é bom ter um editor para trabalhar com o código como o [VSCode] (https://code.visualstudio.com/)

#### Rodando o Backend (servidor com socket.io)

```bash

# Clone esta pasta
$ git clone git@github.com/GabrielMMello/clone-zoom.git

# Acesse a pasta do projeto com o cmd/terminal
$ cd clone-zoom

# Vá para a pasta do servidor
$ cd server

# Instale as dependências
$ npm ci --silent

# Rode o servidor com o seguinte comando
$ npm start

# O servidor vai iniciar na porta: 3000 - acesse por http://localhost:3000

```

#### Rodando o Backend (servidor peer)

```bash

# Clone esta pasta (Pule esta etapa caso já tenha clonado)
$ git clone git@github.com/GabrielMMello/clone-zoom.git

# Acesse a pasta do projeto com o cmd/terminal
$ cd clone-zoom

# Vá para a pasta do servidor peer
$ cd peer-server

# Instale as dependências
$ npm ci --silent

# Rode o servidor em modo de desenvolvimento
$ npm run dev

# O servidor vai iniciar na porta: 9000 - acesse por http://localhost:9000

```


#### Rodando a aplicação Web (Frontend)

```bash

# Clone esta pasta (Pule esta etapa caso já tenha clonado)
$ git clone git@github.com/GabrielMMello/clone-zoom.git

# Acesse a pasta do projeto com o cmd/terminal
$ cd clone-zoom

# Vá para a pasta da aplicação Front End
$ cd public

# Instale as dependências
$ npm ci --silent

# Rode a aplicação com o seguinte comando
$ npm start

# A aplicação vai iniciar na porta: 8080 - acesse por http://localhost:8080

```

---

## Tecnologias utilizadas

As seguintes ferramentas foram utilizadas na construção do projeto:

#### **Website**  ([JS avançado](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript))

-   **[MediaRecorder](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API)**

> Veja o arquivo  [package.json](https://github.com/GabrielMMello/clone-zoom/blob/main/public/package.json)

#### **Servidor com socket.io**  ([Socket.IO](https://socket.io/))

> Veja o arquivo  [package.json](https://github.com/GabrielMMello/clone-zoom/blob/main/server/package.json)

#### **Servidor peer**  ([Peer JS](https://peerjs.com/))

> Veja o arquivo  [package.json](https://github.com/GabrielMMello/clone-zoom/blob/main/peer-server/package.json)

#### **Utilidades**

-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**

#### **Metodologia**

-   Padrão de projeto: **[Builder](https://pt.wikipedia.org/wiki/Builder)**


---

## Autor

<a href="https://www.linkedin.com/in/gabriel-mendes-mello/">
 <sub><b>Gabriel Mendes Mello</b></sub>
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-Gabriel-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/gabriel-mendes-mello/)](https://www.linkedin.com/in/gabriel-mendes-mello/) 
[![Gmail Badge](https://img.shields.io/badge/-gabrielmendesmello@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:gabrielmendesmello@gmail.com)](mailto:gabrielmendesmello@gmail.com)
[![FreeCodeCamp Badge](https://img.shields.io/badge/-Gabriel-black?style=flat-square&logo=freecodecamp&logoColor=white&link=https://www.freecodecamp.org/gabrielmmello)](https://www.freecodecamp.org/gabrielmmello)

---

## Licença

Este projeto está sob a licença [MIT](./LICENSE).

Feito com carinho por Gabriel Mello
[Me contate a qualquer momento!](https://www.linkedin.com/in/gabriel-mendes-mello/)

## Créditos

- O projeto fez parte da Semana JS Expert realizado pelo [Erik Wendel](https://github.com/ErickWendel/jsexpert02-skeleton-ew/blob/main/README.md)
- Layout da home feito pelo Erick Wendel baseado no codepen do [Nelson Adonis Hernandez
](https://codepen.io/nelsonher019/pen/eYZBqOm)
- Layout da room feita pelo Erick Wendel foi adaptado a partir do repo do canal [CleverProgrammers](https://github.com/CleverProgrammers/nodejs-zoom-clone/blob/master/views/room.ejs)

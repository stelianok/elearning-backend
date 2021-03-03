
<h1 align="center">
<img alt="Logo" src="https://i.imgur.com/xZ1xKBr.png" width="600px" />
</h1>

<h3 align="center">
  Elearning Backend
</h3>

<p align="center">
  Backend que fornece os dados para o app elearning, aplicação voltada para educação, que oferece cursos de diversas áreas de conhecimento com um conteúdo em formato de videoaulas.
</p>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/stelianok/elearning-backend">

  <a href="https://www.linkedin.com/in/kauã-steliano/">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-Kauã%20Steliano-gree">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/stelianok/elearning-backend">

  <a href="https://github.com/EliasGcf/readme-template/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/stelianok/elearning-backend">
  </a>

  <a href="https://github.com/EliasGcf/readme-template/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/stelianok/elearning-backend">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/stelianok/elearning-backend">
</p>

<p align="center">
  <a href="#-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

<a href="https://insomnia.rest/run/?label=ElearningAPI&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fstelianok%2Felearning-backend%2Fmain%2FInsomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>

## 👨🏻‍💻 About the project

- <p style="color: red;">Brief explanation about the project</p>

To see the **Figma design**,created by Tiago Luchtenberg click here: [Design](https://www.figma.com/file/JwNEWWRIIZ0cHVrNM84Iih/e-learning-Copy?node-id=0%3A1)</br>
To see the **Mobile app repository**, click here: [Elearning](https://github.com/stelianok/elearningApp)</br>
To see the database structure and available routes, click here: [Organization](https://github.com/stelianok/elearning-backend/blob/main/Organization.md)

## 🚀 Technologies

Technologies that I used to develop this api

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [TypeORM](https://typeorm.io/#/)
- [JWT-token](https://jwt.io/)
- [uuid v4](https://github.com/thenativeweb/uuidv4/)
- [PostgreSQL](https://www.postgresql.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)
- [Yup](https://www.npmjs.com/package/yup)


## 💻 Getting started

Import the `Insomnia.json` on Insomnia App or click on [Run in Insomnia](#insomniaButton) button

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- One instance of [PostgreSQL](https://www.postgresql.org/)

> Obs.: I recommend use docker

**Clone the project and access the folder**

```bash
$ git clone https://github.com/stelianok/elearning-backend.git && cd elearning-backend
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn

# Create the instance of postgreSQL using docker
$ docker run --name project-postgres -e POSTGRES_USER=docker \
              -e POSTGRES_DB=project -e POSTGRES_PASSWORD=docker \
              -p 5432:5432 -d postgres

# Make sure the keys in 'ormconfig.json' to connect with your database
# are set up correctly.

# Once the services are running, run the migrations
$ yarn typeorm migration:run

# To finish, run the api service
$ yarn dev:server

# Well done, project is started!
```

## 🤔 How to contribute

**Make a fork of this repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.

$ gh repo fork stelianok/elearning-backend
```

**Follow the steps below**

```bash
# Clone your fork
$ git clone your-fork-url && cd elearning-backend

# Create a branch with your feature
$ git checkout -b my-feature

# Make the commit with your changes
$ git commit -m 'feat: My new feature'

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with 💜 &nbsp;by Kauã Steliano 👋 &nbsp;[See my linkedin](https://www.linkedin.com/in/kauã-steliano/)

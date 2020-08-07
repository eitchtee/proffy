<div align="center">
  <img src="./.github/logo.png" width="30%"></img>
</div>

<h3 align="center">Proffy</h3>
<p align="center">Online platform to connect students and teachers</p>
<div align="center">
  <sub>:rocket: Made as a learning exercise during the "Next Level Week #2" hosted by @Rocketseat.</sub>
</div>

<br />

<div align="center">
  <a href="https://github.com/eitchtee/proffy/blob/master/LICENSE" target="_blank"><img alt="License: MIT" src="https://img.shields.io/github/license/eitchtee/proffy?color=8257e5&style=for-the-badge"></a>
</div>

----

<p align="center">
    <a href="#screenshots">📸 Screenshots</a> • <a href="#tech-stack">🛠️ Tech Stack</a> • <a href="#getting-started">👷 Getting Started</a>
</p>

## Screenshots

### Web
<img src="./.github/web-landing.png" width="45%"></img> <img src="./.github/web-form.png" width="45%"></img> <img src="./.github/web-listing.png" width="45%"></img>

## Tech Stack
#### **Website**  ([React](https://reactjs.org/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**
-   **[Axios](https://github.com/axios/axios)**

> See [package.json](https://github.com/eitchtee/Proffy/blob/master/web/package.json)

#### [](https://github.com/tgmarinho/Ecoleta#server-nodejs--typescript)**Server**  ([NodeJS](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Express](https://expressjs.com/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[KnexJS](http://knexjs.org/)**
-   **[SQLite](https://github.com/mapbox/node-sqlite3)**

> See [package.json](https://github.com/eitchtee/Proffy/blob/master/server/package.json)

#### [](https://github.com/tgmarinho/Ecoleta#utilit%C3%A1rios)**Utilitários**

-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**
-   API Test:  **[Insomnia](https://insomnia.rest/)**

## Getting Started

### Requirements
* [Node.js](https://nodejs.org/en-url)
* [Yarn](https://classic.yarnpkg.com/)
* [Expo](https://expo.io/)

### Clone
```bash
$ git clone https://github.com/eitchtee/Proffy.git
```

### API

Go to `server` folder
```bash
$ cd Proffy/server
```

Install dependencies
```bash
$ yarn install
```

Migrate the database
```bash
$ yarn knex:migrate
```

Run server
```bash
$ yarn start
```
> The API will be exposed on http://localhost:3333/

### Web

Go to `web` folder
```bash
$ cd Proffy/web
```

Install dependencies
```bash
$ yarn install
```

Start live server
```bash
# Run Aplication
$ yarn start
```
> Go to http://localhost:3000/
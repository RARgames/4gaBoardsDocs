---
sidebar_label: 'Development'
---

# Development
:::note
Requirements: [Node.js](https://nodejs.org/en/download)\
Optional requirements: [Docker](https://docs.docker.com/install/), [Docker Compose](https://docs.docker.com/compose/install/)
:::

**Clone 4ga Boards repository into a directory of your choice**
```
git clone https://github.com/RARgames/4gaBoards.git .
```
**Install dependencies**
```
npm i
```
**Copy .env**
```
cp server/.env.sample server/.env
```
_Optional: Build client, copy build to the `server` directory to suppress startup warnings_

```
npm run client:build
```
```
cp -r client/build server/public
```
```
cp client/build/index.html server/views/index.ejs
```
**Start the provided development database** _(Optionally, use your own database)_
```
docker compose -f docker-compose-dev.yml up -d
```
_If using your own database, edit `DATABASE_URL` in `server/.env`._

**Initialize the database**
```
npm run server:db:init
```
**Start the development server**
```
npm start
```

:::tip
Default 4ga Boards url: http://localhost:3000 \
Default user: `demo`\
Default password: `demo`
:::

Additional Links:\
[4ga Boards Development Database Docker Compose](https://github.com/RARgames/4gaBoards/blob/main/docker-compose-dev.yml)

---
sidebar_label: 'Development'
---

# Development
:::note
Requirements: [Node.js](https://nodejs.org/en/download)\
Optional requirements: [Docker](https://docs.docker.com/install/), [Docker Compose](https://docs.docker.com/compose/install/)
:::

**Clone 4ga Boards repository into a directory of your choice**
```bash
git clone https://github.com/RARgames/4gaBoards.git .
```
**Install dependencies**
```bash
npm i
```
**Copy .env**
```bash
cp server/.env.sample server/.env
```
_Optional: Build client, copy build to the `server` directory to suppress startup warnings_

```bash
npm run client:build
```
```bash
cp -r client/build server/public
```
```bash
cp client/build/index.html server/views/index.ejs
```
**Start the provided development database** _(Optionally, use your own database)_
```bash
docker compose -f docker-compose-dev.yml up -d
```
_If using your own database, edit `DATABASE_URL` in `server/.env`._

**Initialize the database**
```bash
npm run server:db:init
```
**Start the development server**
```bash
npm start
```

:::tip
Default 4ga Boards url: http://localhost:3000 \
Default user: `demo`\
Default password: `demo`
:::

Additional Links:\
[4ga Boards Development Database Docker Compose](https://github.com/RARgames/4gaBoards/blob/main/docker-compose-dev.yml)

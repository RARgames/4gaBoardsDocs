---
sidebar_label: 'Install'
---

# Manual Installation
:::note
Requirements: [Node.js](https://nodejs.org/en/download)
:::

**Clone 4ga Boards repository into a directory of your choice. (e.g. `/var/www/4gaBoards`)**
```bash
mkdir -p /var/www/4gaBoards
```
```bash
cd /var/www/4gaBoards
```
```bash
git clone https://github.com/RARgames/4gaBoards.git .
```
**Install dependencies** _(You can use `yarn` or `pnpm` instead of `npm`)_
```bash
npm i
```
**Build client**
```bash
npm run client:build
```
**Copy build to the `server` directory**
```bash
cp -r client/build server/public
```
```bash
cp client/build/index.html server/views/index.ejs
```
**Copy environment variables file**
```bash
cp server/.env.sample server/.env
```
**Configure environment variables** _(You could use nano, vim, etc. to edit `.env` file)_
```bash
nano server/.env
```

Edit `BASE_URL` to match your domain name or IP address.\
Edit `SECRET_KEY` with a random value. You can generate it by `openssl rand -hex 64`.\
Edit `DATABASE_URL` with database url in the following format: `postgresql://<username>:<password>@<host>/<database_name>`.

**Note**: Before continuing, make sure your selected database is created and running.

**Copy start script from the root directory to the `server` directory and start the server.**
```bash
cp start.sh server
```
```bash
cd server
```
```bash
./start.sh
```

:::tip
Default 4ga Boards url: http://localhost:1337 \
Default user: `demo`\
Default password: `demo`
:::

Additional Links:\
[4ga Boards Professional Hosting](./install-4gaboards)

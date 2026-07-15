---
sidebar_label: 'Install'
description: ''
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
Clone latest version (Not recommended - `beta-latest` version)
```bash
git clone https://github.com/RARgames/4gaBoards.git .
```
Clone specific version (e.g. 3.3.11)
```bash
git clone --branch v3.3.11 https://github.com/RARgames/4gaBoards.git .
```
To later update it to next version, use:
```bash
git fetch --tags
```
```bash
git checkout v3.3.12
```
**Install dependencies**
```bash
pnpm i
```
**Build deps**
```bash
pnpm packages:build
```
**Build client**
```bash
pnpm client:build
```
**Copy build to the `server` directory**
```bash
cp -r client/build/. server/public
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

**Note**: Before continuing, make sure your selected database is created and running.\
[Manual Postgres Installation and Setup](./manual-postgres)

If you want to use Redis for upload rate limiting, also configure these variables in `.env`:
- `UPLOAD_RATE_LIMIT_STORE=redis`
- `UPLOAD_RATE_LIMIT_REDIS_URL=redis://:<password>@<host>:6379/0`

For Redis deployment, run Redis on your server and ensure it is reachable from 4ga Boards.

**Copy start script from the root directory to the `server` directory and start the server.**
```bash
cp start.sh server
```
```bash
cd server
```
```bash
chmod +x start.sh
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
[4ga Boards Professional Hosting](./4gaboards)

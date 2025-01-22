---
sidebar_label: 'Sekcja dla developerów'
---

# Instalacja

Jeśli chcesz otrzymać instancję programu hostowaną przez nas na naszych serwerach, skontaktuj się z nami: [Kontakt](https://4gaboards.com/contact).

Jeśli pragniesz używać wersji samodzielnie hostowanej (self-hosted), instrukcję znajdziesz również na stronie projektu:
[4ga Boards Installation Guide](https://github.com/RARgames/4gaBoards?tab=readme-ov-file#deploy).

# Deployment

## Deploy

There are 2 types of installation:

1. [Dockerized](#1-docker-compose)
2. [Without Docker](#2-without-docker)

### 1. Docker Compose

[![](https://d207aa93qlcgug.cloudfront.net/1.95.5.qa/img/nav/docker-logo-loggedout.png)](https://github.com/RARgames/4gaBoards/pkgs/container/4gaBoards)

- Make sure you have [Docker](https://docs.docker.com/install/) and [Docker Compose](https://docs.docker.com/compose/install/) installed and operational.
- Create `docker-compose.yml` based on [the example](https://raw.githubusercontent.com/RARgames/4gaBoards/main/docker-compose.yml). This is the ONLY file you will need. You can create this file on your machine by copying and pasting the content or download it:

```
curl -L https://raw.githubusercontent.com/RARgames/4gaBoards/main/docker-compose.yml -o docker-compose.yml
```

- Edit `BASE_URL` to match your domain name or IP address.
- Edit `SECRET_KEY` with random value. You can generate it by `openssl rand -hex 64`.
- Replace 2 occurrences of `notpassword` with generated db password in `POSTGRES_PASSWORD` and `DATABASE_URL`.

Pull images and start services:

```
docker compose up -d
```

Default url: http://localhost:3000 Demo user: `demo` Demo password: `demo`

### 2. Without Docker

Installing without Docker is a bit more complicated, here's what you need to do:

1. Clone this repository into a directory of your choice. (e.g. `/var/www/4gaBoards`)

```bash
mkdir -p /var/www/4gaBoards
cd /var/www/4gaBoards
git clone https://github.com/RARgames/4gaBoards.git .
```

2. Install dependencies, build client, copy build to the `server` directory.

```bash
npm i
npm run client:build

cp -r client/build server/public
cp client/build/index.html server/views/index.ejs
```

**Note**: You can use `yarn` or `pnpm` instead of `npm`.

3. Configure environment variables.

```bash
cp server/.env.sample server/.env

# Edit .env file (You could use nano, vim, etc.)
nano server/.env
```

**Note**: Before continuing, make sure you have your selected database created and running.

4. Copy start script from the root directory to the `server` directory and start the server.

```bash
cp start.sh server
cd server
./start.sh
```

**Note**: You can use `pm2` or `systemd` to run the server in the background.

Default url: http://localhost:1337 Demo user: `demo` Demo password: `demo`

## [Additional information (Google SSO, Nginx Configuration, Logging, Rotating Logs, Fail2ban, Helm Chart)](https://github.com/RARgames/4gaBoards/blob/main/docs/ADDITIONAL_INFO.md)

## Backup and Restore

Before executing backup/restore scripts, change current directory to the directory where docker-compose is located.

To backup your data use: `./boards-backup.sh`

To restore it use: `./boards-restore.sh 4gaBoards-backup.tgz` You can use any relative path.

When restoring, the password has to match docker-compose password (If you don't remember it, you can set new password in docker-compose, but you have to skip altering the default user in backup.tgz/postgres.sql file e.g. comment line `ALTER ROLE postgres WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'XXX'` before restoring the backup).

## Import from Trello

It's already available in 4ga Boards. Just add a project, then click Import while creating a new board.

## [Migration from Planka](https://github.com/RARgames/4gaBoards/blob/main/docs/MIGRATION.md)

## Development

Clone the repository into a directory of your choice, install dependencies, copy .env:

```bash
git clone https://github.com/RARgames/4gaBoards.git .
npm i
cp server/.env.sample server/.env
```

_Optional: Build client, copy build to the `server` directory to suppress startup warnings_

```bash
npm run client:build
cp -r client/build server/public
cp client/build/index.html server/views/index.ejs
```

Either use a local database or start the provided development database:

```bash
docker compose -f docker-compose-dev.yml up -d
```

Edit `DATABASE_URL` in `server/.env` if needed, then initialize the database:

```bash
npm run server:db:init
```

Start the development server:

```bash
npm start
```

Demo user: `demo` Demo password: `demo`
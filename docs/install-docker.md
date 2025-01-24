---
sidebar_label: 'Docker Compose (easy)'
---
import DefaultCredentials from './_default_credentials.mdx';


# Docker Compose
:::note
Make sure you have [Docker](https://docs.docker.com/install/) and [Docker Compose](https://docs.docker.com/compose/install/) installed and operational.
:::

**Download `docker-compose.yml`** _(or create `docker-compose.yml` based on [the example](https://raw.githubusercontent.com/RARgames/4gaBoards/main/docker-compose.yml))_
```
curl -L https://raw.githubusercontent.com/RARgames/4gaBoards/main/docker-compose.yml -o docker-compose.yml
```

**Configure 4ga Boards Instance Variables**

Edit `BASE_URL` to match your domain name or IP address.\
Edit `SECRET_KEY` with a random value. You can generate it by `openssl rand -hex 64`.\
Replace 2 occurrences of `notpassword` with generated db password in `POSTGRES_PASSWORD` and `DATABASE_URL`.

**Pull images and start 4ga Boards**
```
docker compose up -d
```

<DefaultCredentials />

Additional Links:\
[4ga Boards Docker Package](https://github.com/RARgames/4gaBoards/pkgs/container/4gaBoards)

Alternatively, install 4ga Boards with ease using [4ga Boards Professional Hosting](./install-4gaboards).

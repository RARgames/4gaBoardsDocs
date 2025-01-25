---
sidebar_label: 'Install'
description: ''
---

# Docker Compose Installation
:::note
Requirements: [Docker](https://docs.docker.com/install/), [Docker Compose](https://docs.docker.com/compose/install/)
:::

**Download `docker-compose.yml`** _(or create `docker-compose.yml` based on [the example](https://github.com/RARgames/4gaBoards/blob/main/docker-compose.yml))_
```bash
curl -L https://raw.githubusercontent.com/RARgames/4gaBoards/main/docker-compose.yml -o docker-compose.yml
```

**Configure 4ga Boards instance variables**

Configure `environment` sections in `docker-compose.yml`:

Edit `BASE_URL` to match your domain name or IP address.\
Edit `SECRET_KEY` with a random value. You can generate it by `openssl rand -hex 64`.\
Edit `POSTGRES_PASSWORD` and `DATABASE_URL` replacing `notpassword` with randomly generated db password.


**Pull images and start 4ga Boards**
```bash
docker compose up -d
```

:::tip
Default 4ga Boards url: http://localhost:3000 \
Default user: `demo`\
Default password: `demo`
:::

Additional Links:\
[4ga Boards Docker Package](https://github.com/RARgames/4gaBoards/pkgs/container/4gaBoards)\
[4ga Boards Professional Hosting](./4gaboards)

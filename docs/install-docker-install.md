---
sidebar_label: 'Installation'
---
import DefaultCredentials from './_default_credentials.mdx';

# Docker Compose Installation
:::note
Make sure you have [Docker](https://docs.docker.com/install/) and [Docker Compose](https://docs.docker.com/compose/install/) installed and operational.
:::

**Download `docker-compose.yml`** _(or create `docker-compose.yml` based on [the example](https://raw.githubusercontent.com/RARgames/4gaBoards/main/docker-compose.yml))_
```
curl -L https://raw.githubusercontent.com/RARgames/4gaBoards/main/docker-compose.yml -o docker-compose.yml
```

**Configure 4ga Boards Instance Variables**

Configure `environment` sections in `docker-compose.yml`:

Edit `BASE_URL` to match your domain name or IP address.\
Edit `SECRET_KEY` with a random value. You can generate it by `openssl rand -hex 64`.\
Edit `DATABASE_URL` and `DATABASE_URL` replacing `notpassword` with randomly generated db password.


**Pull images and start 4ga Boards**
```
docker compose up -d
```

<DefaultCredentials />

Additional Links:\
[4ga Boards Docker Package](https://github.com/RARgames/4gaBoards/pkgs/container/4gaBoards)

Alternatively, install 4ga Boards with ease using [4ga Boards Professional Hosting](./install-4gaboards).

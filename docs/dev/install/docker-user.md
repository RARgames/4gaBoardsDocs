---
sidebar_label: 'Docker Custom User'
description: ''
---

# Docker Custom User

To run 4ga Boards as a custom user (in order to work in e.g. unraid), configure these values in `docker-compose.yml`:

- Set `PUID: 99` in `4gaBoards` service `environment`.
- Set `PGID: 100` in `4gaBoards` service `environment`.
- Set `user: "0:0"` in `4gaBoards` service.

Example of 4gaBoards service part:
```yml
  4gaBoards:
    image: ghcr.io/rargames/4gaboards:latest
    restart: always
    networks:
      - boards-network
    volumes:
      - user-avatars:/app/public/user-avatars
      - project-background-images:/app/public/project-background-images
      - attachments:/app/private/attachments
    ports:
      - 3338:1337
    user: "0:0"
    environment:
      PUID: 99
      PGID: 100
      BASE_URL: http://localhost:3338
      SECRET_KEY: notsecretkey
      DATABASE_URL: postgresql://postgres:notpassword@db/4gaBoards
      NODE_ENV: production
      UPLOAD_RATE_LIMIT_STORE: redis
      UPLOAD_RATE_LIMIT_REDIS_URL: redis://:notredispassword@redis:6379/0
```

:::tip
**Download `docker-compose.yml`** _(or create `docker-compose.yml` based on [the example](https://github.com/RARgames/4gaBoards/blob/main/docker-compose.yml))_
:::

See also: [Docker Compose Variables](./docker-vars.md)
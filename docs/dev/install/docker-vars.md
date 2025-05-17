---
sidebar_label: 'Variables'
description: ''
---
import VarsYamlOptional from './_vars_yaml_optional.md';
import VarsDockerRequired from './_vars_docker_required.md';

# Docker Compose Variables

### Docker Compose Example File `docker-compose.yml`
```yml
services:
  db:
    image: postgres:16-alpine
    restart: always
    networks:
      - boards-network
    volumes:
      - db-data:/var/lib/postgresql/data
    environment:
      POSTGRES_DB: 4gaBoards
      POSTGRES_PASSWORD: notpassword
      POSTGRES_INITDB_ARGS: "-A scram-sha-256"
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres -d 4gaBoards"]
      interval: 1s
      timeout: 5s
      retries: 50

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
      - 3000:1337
    environment:
      BASE_URL: http://localhost:3000
      SECRET_KEY: notsecretkey
      DATABASE_URL: postgresql://postgres:notpassword@db/4gaBoards
      NODE_ENV: production
      ## Add optional 4ga Boards instance variables here
    depends_on:
      db:
        condition: service_healthy

volumes:
  user-avatars:
  project-background-images:
  attachments:
  db-data:
networks:
  boards-network:
```

### 4ga Boards - Required Instance Variables

**`db` service `environment` variables:**

- `POSTGRES_DB` - database name
- `POSTGRES_PASSWORD` - database password

**`4gaBoards` service `environment` variables:**

<VarsDockerRequired />

### 4ga Boards - Optional Instance Variables

**`4gaBoards` service `environment` variables:**

<VarsYamlOptional />

Additional Links:\
[4ga Boards `docker-compose.yml` File](https://github.com/RARgames/4gaBoards/blob/main/docker-compose.yml)\
[4ga Boards Professional Hosting](./4gaboards)


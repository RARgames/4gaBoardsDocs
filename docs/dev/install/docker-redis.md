---
sidebar_label: 'Redis Rate Limiting'
description: ''
---

# Redis Upload Rate Limiting

If you want to use Redis for upload rate limiting in Docker Compose, configure these values in `docker-compose.yml`:

- Set `UPLOAD_RATE_LIMIT_STORE: redis` in `4gaBoards` service `environment`.
- Set `UPLOAD_RATE_LIMIT_REDIS_URL: redis://:<password>@redis:6379/0` in `4gaBoards` service `environment`.
- Replace `notredispassword` with randomly generated redis password (3 occurrences):
  - in `redis` service `command`
  - in `redis` service `healthcheck`
  - in `4gaBoards` service `UPLOAD_RATE_LIMIT_REDIS_URL`

:::tip
You can generate a password with: `openssl rand -hex 32`
:::

See also: [Docker Compose Variables](./docker-vars.md)
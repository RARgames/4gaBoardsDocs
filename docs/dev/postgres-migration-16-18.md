---
sidebar_label: 'Postgres Migration 16 -> 18'
---

# Postgres Migration Guide

:::note
This guide is for docker installation only and it explains how to migrate an existing 4ga Boards Docker Compose PostgreSQL installation.
:::

## Create database backup

Create a full PostgreSQL backup:

``` bash
docker compose exec -T db bash -c 'PGPASSWORD=$POSTGRES_PASSWORD pg_dumpall -c -U postgres' > backup.sql
```

Verify that the backup file was created:

``` bash
head -50 backup.sql
```

## Stop 4ga Boards

Stop all containers:

``` bash
docker compose down
```

## Edit docker-compose.yml

Rename db volume (to keep additional backup) e.g. `db-data` to `db-data-18` and change the mount path from `/var/lib/postgresql/data` to `/var/lib/postgresql`:

```yaml
volumes:
  - db-data-18:/var/lib/postgresql
```
and
```yaml
volumes:
  db-data-18:
```

Update postgres version from `postgres:16-alpine` to `postgres:18-alpine`:

```yaml
db:
  image: postgres:18-alpine
```

## Start the new PostgreSQL container

Start only the database service:

``` bash
docker compose up -d db
```

## Restore database backup

Import the previous database:

``` bash
docker compose exec -T db bash -c 'PGPASSWORD=$POSTGRES_PASSWORD psql -U postgres' < backup.sql
```

## Start 4ga Boards

Restart all services:

``` bash
docker compose down
docker compose up -d
```

:::tip
Verify that all users, boards, cards, attachments, and other data are available before removing the old PostgreSQL volume backup.
:::

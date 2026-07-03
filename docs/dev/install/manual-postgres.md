---
sidebar_label: 'Postgres Installation and Setup'
description: ''
---

# Manual Installation (depending on your system)

### Ubuntu/Debian

```bash
sudo apt update
sudo apt install postgresql
```

### Rocky Linux/RHEL/AlmaLinux

```bash
sudo dnf install postgresql-server
sudo postgresql-setup --initdb
```

### Start PostgreSQL

```bash
sudo systemctl enable --now postgresql
```

### Create a database and user

```bash
sudo -u postgres psql
```
```sql
CREATE USER username WITH PASSWORD 'password';
CREATE DATABASE boards OWNER username;
\q
```

Use this value as `DATABASE_URL` in your `.env` file:

```text
postgresql://username:password@localhost/boards
```

Additional Links:\
[4ga Boards Professional Hosting](./4gaboards)

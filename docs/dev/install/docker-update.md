---
sidebar_label: 'Update'
description: ''
---

# Docker Compose Update

:::warning
Remember to backup before update: [Backup and restore](../backup-restore)
:::


**Update:**
```bash
docker compose pull
```
```bash
docker compose stop
```
```bash
docker compose up -d
```
Remove unused Docker images:
```bash
docker image prune -a -f
```

Additional Links:\
[4ga Boards Professional Hosting](./4gaboards)

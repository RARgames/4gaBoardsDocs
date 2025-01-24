---
sidebar_label: 'Additional Info'
description: 'External Postgress Database, Install in a namespace'
---

# Kubernetes Helm Chart Additional Info

### External Postgress Database

To set external postgress set `postgresql.enabled` to `false` and `postgresql.postgresUrl` to `ip` in `values.yaml`.

### Install 4ga Boards in a namespace

You can install 4ga Boards on a namespace `namespace-boards`:
```bash
sudo helm install boards . -n namespace-boards
```

Additional Links:\
[4ga Boards Professional Hosting](./install-4gaboards)

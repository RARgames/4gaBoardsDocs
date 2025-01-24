---
sidebar_label: 'Additional Info'
---

# Kubernetes Helm Chart Additional Info

### External Postgress Database

On a local machine you can set port forwarding:\
To set external postgress set `postgresql.enabled` to `false` and `postgresql.postgresUrl` to `ip` in `values.yaml`.

### Install 4ga Boards in a namespace

You can install 4ga Boards on a namespace `namespace-boards`:
```
sudo helm install boards . -n namespace-boards
```

Additional Links:\
[4ga Boards Professional Hosting](./install-4gaboards)

---
sidebar_label: 'Install'
description: ''
---

# True NAS Installation
:::note
Requirements: [True NAS Scale](https://www.truenas.com/download-truenas-scale) with Apps Service Running
:::

**Clone 4ga Boards Repo** _(or just the helm-chart dir)_
```bash
git clone https://github.com/RARgames/4gaBoards.git
```
**Switch dir to `helm-chart`**
```bash
cd /4gaBoards/helm-chart
```
**Configure 4ga Boards instance variables**

Configure `auth` and `env` sections in `values.yaml`:

Edit `password` and `postgresPassword` with generated db passwords.\
Edit `BASE_URL` to match your domain name or IP address.\
Edit `SECRET_KEY` with a random value. You can generate it by `openssl rand -hex 64`.

Configure `env` section in `values.truenas.yaml`:

Edit `BASE_URL` to match your domain name or IP address (node address).

**Install helm chart**

Values in `values.truenas.yaml` overrride values in `values.yaml`.
```bash
sudo helm install boards . --values values.yaml --values values.truenas.yaml --kubeconfig /etc/rancher/k3s/k3s.yaml
```

:::tip
Default 4ga Boards url: http://localhost:30001 \
Default user: `demo`\
Default password: `demo`
:::

Additional Links:\
[4ga Boards Helm Chart](https://github.com/RARgames/4gaBoards/tree/main/helm-chart)\
[4ga Boards Professional Hosting](./install-4gaboards)

---
sidebar_label: 'Install'
---

# Kubernetes Helm Chart Installation
:::note
Requirements: [Kubernetes](https://kubernetes.io/docs/setup/)
:::

**Start your Kubernetes provider (e.g. `minikube`)**
```bash
minkube start
```
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

**Install helm chart**
```bash
sudo helm install boards .
```

:::tip
Default 4ga Boards url: http://localhost:3000 \
Default user: `demo`\
Default password: `demo`
:::

Additional Links:\
[4ga Boards Helm Chart](https://github.com/RARgames/4gaBoards/tree/main/helm-chart)\
[4ga Boards Professional Hosting](./install-4gaboards)

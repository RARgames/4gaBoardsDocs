---
sidebar_label: 'Install'
---

# Kubernetes Helm Chart Installation
:::note
Make sure you have Kubernetes installed and operational.
:::

**Start your Kubernetes provider (e.g. `minikube`)**
```
minkube start
```
**Clone 4ga Boards Repo** _(or just the helm-chart dir)_
```
git clone https://github.com/RARgames/4gaBoards.git
```
**Switch dir to `helm-chart`**
```
cd /4gaBoards/helm-chart
```
**Configure 4ga Boards instance variables**

Configure `auth` and `env` sections in `values.yaml`:

Edit `password` and `postgresPassword` with generated db passwords.\
Edit `BASE_URL` to match your domain name or IP address.\
Edit `SECRET_KEY` with a random value. You can generate it by `openssl rand -hex 64`.

**Install helm chart**
```
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

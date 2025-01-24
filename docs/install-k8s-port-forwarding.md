---
sidebar_label: 'Installation'
---

# Kubernetes Helm Chart Port Forwarfing


WIP

Uninstall:
```
sudo helm uninstall boards
```


On a local machine you can set port forwarding:
```
sudo -E kubectl port-forward svc/app-4gaboards 80:80
```

To set external postgress set `postgresql.enabled` to `false` and `postgresql.postgresUrl` to `ip` in `values.yaml`.

You can install 4ga Boards on a namespace `namespace-boards`:
```
sudo helm install boards . -n namespace-boards
```

Additional Links:\
[4ga Boards Helm Chart](https://github.com/RARgames/4gaBoards/tree/main/helm-chart)



To install it use: `helm install boards .` or `helm install boards . --values values.yaml --values values.truenas.yaml`



🤡 Too hard? - Install 4ga Boards with ease using [4ga Boards Professional Hosting](./install-4gaboards)

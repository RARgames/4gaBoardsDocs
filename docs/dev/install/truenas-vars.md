---
sidebar_label: 'Variables'
description: ''
---
import K8sValues from './_k8s_values.md';
import K8sVars from './_k8s_vars.md';

# TrueNAS Variables

<K8sValues />

### Additional Values For TrueNAS Example File `values.truenas.yaml`
```yaml
service:
  type: NodePort
  nodePort: 30001
  port: 1337
  deploymentPort: 30001
nodeName: ix-truenas
pv:
  storageClass: openebs-zfspv-default
env:
  required:
    BASE_URL: http://localhost:30001
```

<K8sVars />

**`env` variables in `values.truenas.yaml`:**

All variables configured here override values from `values.yaml`

- `BASE_URL` - domain or ip address used to access 4ga Boards (Use this only when installing for TrueNAS)

Additional Links:\
[4ga Boards `values.yaml` File](https://github.com/RARgames/4gaBoards/blob/main/helm-chart/values.yaml)\
[4ga Boards `values.truenas.yaml` File](https://github.com/RARgames/4gaBoards/blob/main/helm-chart/values.truenas.yaml)\
[4ga Boards Professional Hosting](./4gaboards)
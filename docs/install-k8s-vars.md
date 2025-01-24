---
sidebar_label: 'Variables'
---

# Kubernetes Helm Chart Variables

### Values Example File `values.yaml`
```yaml
replicaCount: 1

image:
  repository: ghcr.io/rargames/4gaboards
  pullPolicy: Always
  tag: "latest"

imagePullSecrets: []
nameOverride: "app-4gaboards"
fullnameOverride: "app-4gaboards"

podAnnotations: {}

podSecurityContext: {}

securityContext: {}

service:
  type: ClusterIP
  port: 1337

ingress:
  enabled: false
  className: ""
  annotations: {}
  hosts:
    - host: chart-example.local
      paths:
        - path: /
          pathType: Prefix
  tls: []

resources:
  limits:
    cpu: 1000m
    memory: 1Gi
  requests:
    cpu: 200m
    memory: 200Mi

nodeSelector: {}

tolerations: []

affinity: {}

autoscaling:
  enabled: false
serviceAccount:
  create: false
postgresql:
  enabled: true
  auth:
    database: "4gaBoards"
    username: "boards-user"
    password: "notpassword"
    postgresPassword: "adminPassword"
  postgresUrl: <URL> #Set only if using external postgres and postgresql.enabled: false
  volumePermissions:
    enabled: true
env:
  required:
    SECRET_KEY: notsecretkey
    BASE_URL: http://localhost:80
  optional:
    CLIENT_URL: http://localhost:80
    GOOGLE_CLIENT_ID: googleClientId
    GOOGLE_CLIENT_SECRET: googleClientSecret

pv:
  storageClass: standard
  useravatars:
    pvcname: user-avatars
    size: 5Gi
  projectbackgroundimages:
    pvcname: project-background-images
    size: 5Gi
  attachments:
    pvcname: attachments
    size: 5Gi
```

### Additional Values For True NAS Example File `values.truenas.yaml`
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

### 4ga Boards Instance Variables**

**`postgresql` variables in `values.yaml`:**

- `database` - database name
- `username` - database username
- `password` - database password
- `postgresPassword` - database admin password
- `postgresUrl` - _(optional)_ - url for extental postgres database (When using this set postgresql.enabled: false)

**`env` variables in `values.yaml`:**

- `BASE_URL` - domain or ip address used to access 4ga Boards
- `SECRET_KEY` - session secret key
- `CLIENT_URL` - _(optional)_ - domain or ip address of client url (skip this unless you really need it, might be useful in some configurations)
- `GOOGLE_CLIENT_ID` - _(optional)_ - SSO client id
- `GOOGLE_CLIENT_SECRET` - _(optional)_ - SSo client secret

**`env` variables in `values.truenas.yaml`:**

- `BASE_URL` - domain or ip address used to access 4ga Boards (Use this only when installing for True NAS)

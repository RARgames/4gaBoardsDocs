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
    # Add optional 4ga Boards instance variables here

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

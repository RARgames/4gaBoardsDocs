---
sidebar_label: 'Install'
description: ''
---

# Easypanel Installation
:::note
Requirements: an [Easypanel](https://easypanel.io/) instance
:::

[Easypanel](https://easypanel.io/) is a server control panel that can deploy 4ga Boards with one click using its official template, without needing to manually write a `docker-compose.yml` file or configure a database.

**Deploy 4ga Boards**

1. Open your Easypanel dashboard and create (or open) a project
2. Click **+ Add Service** and choose **Templates**
3. Search for **4ga Boards** and select it
4. Click **Create** to deploy the service

Easypanel provisions the PostgreSQL database automatically and runs the [official 4ga Boards Docker image](https://github.com/RARgames/4gaBoards/pkgs/container/4gaBoards) for you, exposing it through a domain.

:::tip
Default user: `demo`\
Default password: `demo`
:::

Additional Links:\
[4ga Boards Easypanel Template](https://easypanel.io/templates/4gaboards)\
[4ga Boards Professional Hosting](./4gaboards.md)

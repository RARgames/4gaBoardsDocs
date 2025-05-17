---
sidebar_label: 'Variables'
description: ''
---
import VarsEnvOptional from './_vars_env_optional.md';
import VarsEnvRequired from './_vars_env_required.md';

# Manual Variables

### Env File `.env`
```bash
# Required
BASE_URL=http://localhost:1337
DATABASE_URL=postgresql://postgres@localhost/4gaBoards
SECRET_KEY=notsecretkey

# Add optional 4ga Boards instance variables here

# Do not edit this
TZ=UTC
```

### 4ga Boards - Required Instance Variables

<VarsEnvRequired />

### 4ga Boards - Optional Instance Variables

<VarsEnvOptional />

Additional Links:\
[4ga Boards `.env` File](https://github.com/RARgames/4gaBoards/blob/main/server/.env.sample)\
[4ga Boards Professional Hosting](./4gaboards)

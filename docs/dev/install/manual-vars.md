---
sidebar_label: 'Variables'
description: ''
---

# Manual Variables

### Env File `.env`
```bash
## Required
BASE_URL=http://localhost:1337
DATABASE_URL=postgresql://postgres@localhost/4gaBoards
SECRET_KEY=notsecretkey

## Optional
# TRUST_PROXY=0
# TOKEN_EXPIRES_IN=365 # In days

## Do not edit this
TZ=UTC
```

### 4ga Boards Instance Variables

- `BASE_URL` - domain or ip address used to access 4ga Boards
- `SECRET_KEY` - session secret key
- `DATABASE_URL` - database url in the following format: `postgresql://<username>:<password>@<host>/<database_name>`
- `CLIENT_URL` - _(optional)_ - domain or ip address of client url (skip this unless you really need it, might be useful in some configurations)
- `GOOGLE_CLIENT_ID` - _(optional)_ - SSO client id
- `GOOGLE_CLIENT_SECRET` - _(optional)_ - SSO client secret
- `GITHUB_CLIENT_ID` - _(optional)_ - SSO client id
- `GITHUB_CLIENT_SECRET` - _(optional)_ - SSO client secret
- `MICROSOFT_CLIENT_ID` - _(optional)_ - SSO client id
- `MICROSOFT_CLIENT_SECRET` - _(optional)_ - SSO client secret


Additional Links:\
[4ga Boards `.env` File](https://github.com/RARgames/4gaBoards/blob/main/server/.env.sample)\
[4ga Boards Professional Hosting](./4gaboards)


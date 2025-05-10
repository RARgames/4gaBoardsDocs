### 4ga Boards Instance Variables

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
- `GOOGLE_CLIENT_SECRET` - _(optional)_ - SSO client secret
- `GITHUB_CLIENT_ID` - _(optional)_ - SSO client id
- `GITHUB_CLIENT_SECRET` - _(optional)_ - SSO client secret
- `MICROSOFT_CLIENT_ID` - _(optional)_ - SSO client id
- `MICROSOFT_CLIENT_SECRET` - _(optional)_ - SSO client secret

import VarsYamlOptional from './_vars_yaml_optional.md';

### 4ga Boards - Required Instance Variables

**`postgresql` variables in `values.yaml`:**

- `database` - database name
- `username` - database username
- `password` - database password
- `postgresPassword` - database admin password
- `postgresUrl` - _(optional)_ - url for extental postgres database (When using this set postgresql.enabled: false)

**`env` variables in `values.yaml`:**

- `BASE_URL` - domain or ip address used to access 4ga Boards
- `SECRET_KEY` - session secret key

### 4ga Boards - Optional Instance Variables

**`env` variables in `values.yaml`:**

<VarsYamlOptional />

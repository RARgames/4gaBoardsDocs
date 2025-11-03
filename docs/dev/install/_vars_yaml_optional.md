#### Default settings (applied only on first run)
##### Default admin user is always created, but you can override the default values:

- `DEFAULT_ADMIN_USERNAME: "demo"` - default admin username, defaults to `demo`
- `DEFAULT_ADMIN_EMAIL: "demo@demo.demo"` - default admin email, defaults to `demo@demo.demo`
- `DEFAULT_ADMIN_NAME: "Demo Demo"` - default admin name, defaults to `Demo Demo`
- `DEFAULT_ADMIN_PASSWORD: "demo"` - default admin password, defaults to `demo`

##### Other settings:

- `DEFAULT_PROJECT_CREATION_ALL: true` - only admins can create projects if true, defaults to `true`
- `DEFAULT_REGISTRATION_ENABLED: true` - registration enabled if true, defaults to `true`
- `DEFAULT_LOCAL_REGISTRATION_ENABLED: true` - local registration emabled if true, defaults to `true`
- `DEFAULT_SSO_REGISTRATION_ENABLED: true` - sso registration enabled if true, defaults to `true`
- `DEFAULT_ALLOWED_REGISTER_DOMAINS: "4gaboards.com;example.com"` - a semicolon separated list of allowed domain for registration, defaults to ` ` - meaning all domains are allowed
- `DEFAULT_SYNC_SSO_DATA_ON_AUTH: false` - sync all user data (except admin status) after each sso login, defaults to `false`
- `DEFAULT_SYNC_SSO_ADMIN_ON_AUTH: false` - sync user admin status after each sso login, defaults to `false`

#### Google OAuth2.0

- `GOOGLE_CLIENT_ID: googleClientId` - client id from the project on: https://console.cloud.google.com/
- `GOOGLE_CLIENT_SECRET: googleClientSecret` - client secret from the project: generated in app settings

#### GitHub OAuth2.0

- `GITHUB_CLIENT_ID: githubClientId` - client id from the app after creating on: https://github.com/settings/applications/new or https://github.com/settings/apps/new
- `GITHUB_CLIENT_SECRET: githubClientSecret` - client secret from the app: generated in app settings

#### Microsoft OIDC

- `MICROSOFT_CLIENT_ID: microsoftClientId` - client id from the app after creating on: https://portal.azure.com/
- `MICROSOFT_CLIENT_SECRET: microsoftClientSecret` - client secret from the app: generated in app settings

#### Generic OIDC

- `OIDC_CLIENT_ID: oidcClientId` - client id from the app after creating in custom OIDC provider
- `OIDC_CLIENT_SECRET: oidcClientSecret` - client secret from the app: generated in app settings
- `OIDC_ISSUER_URL: https://oidcIssuer.com` - OIDC issuer URL, if OIDC issuer supports discovery protocol (.well-known/openid-configuration) other URLs are configured automatically. However some URLs can be overridden using settigs below:
- `OIDC_AUTH_URL: https://oidcIssuer.com/auth` - optional auth URL
- `OIDC_TOKEN_URL: https://oidcIssuer.com/token`- optional token URL
- `OIDC_USERINFO_URL: https://oidcIssuer.com/userinfo` - optional userinfo URL
- `OIDC_STATE_SECRET: stateSecret` - OIDC state secret, generate using `openssl rand -hex 64`
- `OIDC_ENABLED_METHODS: Google,Microsoft,GitHub` - a comma-separated list of methods supported by OIDC provider (this is used to show custom buttons for each method - supported methods: Google, Microsoft, GitHub - open GitHub issue if more methods are needed) 
- `OIDC_DISABLE_HINT_*: false` - disable one of the methods supported by OIDC provider e.g. `OIDC_DISABLE_HINT_GITHUB: false`, defaults to `false`
- `OIDC_SKIP_ACCOUNT_SELECTION: false` - don't send `select_account` or `login` prompt to OIDC provider, defaults to `false`
- `OIDC_SKIP_ACCOUNT_SELECTION_HINT_*: false` - don't send `select_account` or `login` prompt to OIDC provider (only for some method) e.g. `OIDC_SKIP_ACCOUNT_SELECTION_HINT_GITHUB: false`, defaults to `false`

#### Other settings

- `CLIENT_URL: http://localhost:3000` - main client URL - usually not needed, if running production defaults to `BASE_URL`, if development defaults to `http://localhost:3000` (skip this unless you really need it)
- `DEMO_MODE: false` - demo mode enabled if true, defaults to `false`
- `LOG_LEVEL: warn` - log levels from highest to lowest - error, warn, info, http, verbose, debug, silly, defaults to `warn`
- `TRUST_PROXY: 0` - trust proxy used only if 4ga Boards are behind a proxy/load balancer, defaults to `0`
- `TOKEN_EXPIRES_IN: 365` - token expiration in days, defaults to `365`
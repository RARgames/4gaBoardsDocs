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

#### Google OAuth2.0

- `GOOGLE_CLIENT_ID: googleClientId` - client id from the project on: https://console.cloud.google.com/
- `GOOGLE_CLIENT_SECRET: googleClientSecret` - client secret from the project: generated in app settings

#### GitHub OAuth2.0

- `GITHUB_CLIENT_ID: githubClientId` - client id from the app after creating on: https://github.com/settings/applications/new or https://github.com/settings/apps/new
- `GITHUB_CLIENT_SECRET: githubClientSecret` - client secret from the app: generated in app settings

#### Microsoft OIDC

- `MICROSOFT_CLIENT_ID: microsoftClientId` - client id from the app after creating on: https://portal.azure.com/
- `MICROSOFT_CLIENT_SECRET: microsoftClientSecret` - client secret from the app: generated in app settings

#### Other settings

- `CLIENT_URL: http://localhost:3000` - main client URL - usually not needed, if running production defaults to `BASE_URL`, if development defaults to `http://localhost:3000` (skip this unless you really need it)
- `DEMO_MODE: false` - demo mode enabled if true, defaults to `false`
- `LOG_LEVEL: warn` - log levels from highest to lowest - error, warn, info, http, verbose, debug, silly, defaults to `warn`
- `TRUST_PROXY: 0` - trust proxy used only if 4ga Boards are behind a proxy/load balancer, defaults to `0`
- `TOKEN_EXPIRES_IN: 365` - token expiration in days, defaults to `365`
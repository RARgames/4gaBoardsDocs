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

#### Notifications (Email Notifications, Email Verifications, Email-to-Card)

- `NOTIFICATIONS_HOST_URL: http://localhost:3223` - notifications host URL, defaults to `null`, all notification variables have to be configured in order for notifications to work
- `NOTIFICATIONS_CLIENT_ID: notificationsClientId` - noitifications client id
- `NOTIFICATIONS_CLIENT_SECRET: notificationsClientSecret` - notifications client secret
- `MAIL_SERVICE_INBOUND_EMAIL: localhost@inbound.4gaboards.com` - inbound email address (used mainly as a hint for correct email addresses for Email-to-Card)
- `INSTANCE_NAME: localhost` - instance name (used mainly for notifications email subject)

#### HyperDx
- `HYPERDX_ENABLED: false` - enable HyperDx integration, defaults to `false`
- `HYPERDX_API_KEY: hyperdxApiKey` - HyperDx api key
- `HYPERDX_INSTANCE_NAME: 4gaboards.com` - HyperDx instance name, defaults to `INSTANCE_NAME` or `4gaboards.com` if instance name is not available
- `HYPERDX_TRACE_PROPAGATION_TARGETS: string` - HyperDx trace propagation targets (string), defaults to `null`
- `OTEL_URL: https://otel.prod.4gacore.com` - HyperDx Otel URL, defaults to `null`
- `OTEL_URL_FORMAT: http/protobuf` - HyperDx Otel URL format, defaults to `http/protobuf`

#### Uploads, Attachments and Image Processing
- `UPLOAD_RATE_LIMIT_ENABLED: true` - upload rate limit disabled if false, defaults to `true`
- `UPLOAD_RATE_LIMIT_MAX_ATTEMPTS: 30` - upload rate limit max attempts in window, defaults to `30`
- `UPLOAD_RATE_LIMIT_WINDOW_MS: 60000` - upload rate limit window in milliseconds, defaults to `60000` - 1 minute
- `UPLOAD_RATE_LIMIT_STORE: memory` - upload rate limit store (`memory` or `redis`), defaults to `memory`
- `UPLOAD_RATE_LIMIT_REDIS_URL: redis://:notredispassword@localhost:6379/0` - upload rate limit redis url, required if `UPLOAD_RATE_LIMIT_STORE: redis`
- `UPLOAD_RATE_LIMIT_REDIS_CONNECT_TIMEOUT_MS: 500` - upload rate limit redis connect timeout in milliseconds, defaults to `500`
- `UPLOAD_RATE_LIMIT_KEY_PREFIX: rl:upload` - upload rate limit redis key prefix, defaults to `rl:upload`
- `ATTACHMENT_MAX_BYTES: 26214400` - max attachment file size in bytes, defaults to `26214400` - 25 MB
- `AVATAR_MAX_BYTES: 26214400` - max avatar image size in bytes, defaults to `26214400` - 25 MB
- `PROJECT_BACKGROUND_IMAGE_MAX_BYTES: 26214400` - max project background image size in bytes, defaults to `26214400` - 25 MB
- `BOARD_IMPORT_MAX_BYTES: 104857600` - max board import file size in bytes, defaults to `104857600` - 100 MB
- `BOARD_IMPORT_MAX_COMPRESSED_BYTES: 104857600` - max compressed board import size in bytes, defaults to `104857600` - 100 MB
- `BOARD_IMPORT_MAX_UNCOMPRESSED_BYTES: 524288000` - max uncompressed board import size in bytes, defaults to `524288000` - 500 MB
- `BOARD_IMPORT_MAX_ENTRIES: 5000` - max extracted entries in board import archive, defaults to `5000`
- `BOARD_IMPORT_MAX_EXTRACTION_MS: 30000` - max extraction time for board import in milliseconds, defaults to `30000` - 30 seconds
- `SHARP_MAX_INPUT_PIXELS: 40000000` - Sharp max input pixels, defaults to `40000000`
- `SHARP_CONCURRENCY: 2` - Sharp concurrency, defaults to `2`
- `SHARP_CACHE_MEMORY_MB: 50` - Sharp cache memory in MB, defaults to `50`
- `SHARP_CACHE_ITEMS: 100` - Sharp cache item count, defaults to `100`
- `SHARP_CACHE_FILES: 20` - Sharp cache file count, defaults to `20`

#### Other settings

- `CLIENT_URL: http://localhost:3000` - main client URL - usually not needed, if running production defaults to `BASE_URL`, if development defaults to `http://localhost:3000` (skip this unless you really need it)
- `DEMO_MODE: false` - demo mode enabled if true, defaults to `false`
- `LOG_LEVEL: warn` - log levels from highest to lowest - error, warn, info, http, verbose, debug, silly, defaults to `warn`
- `TRUST_PROXY: 0` - trust proxy used only if 4ga Boards are behind a proxy/load balancer, defaults to `0`
- `TOKEN_EXPIRES_IN: 365` - token expiration in days, defaults to `365`
- `AUTH_RATE_LIMIT_ENABLED: true` - login rate limit disabled if false, defaults to `true`
- `AUTH_RATE_LIMIT_MAX_ATTEMPTS: 5` - login rate limit max attempts in window, defaults to `5`
- `AUTH_RATE_LIMIT_WINDOW_MS: 60000` - login rate limit window, defaults to `60000` - 10 minutes
- `SYSTEM_NOTIFICATIONS_DISABLED: true` - stop receiving system notifications, we honor it and do not send notifications except important security update releases to admins

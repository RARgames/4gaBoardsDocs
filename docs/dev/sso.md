---
sidebar_label: 'SSO'
description: 'Setup Google SSO'
---

# SSO (Single sign-on)

### Google SSO

Create a project on [Google Cloud Console](https://console.cloud.google.com).\
Create OAuth 2.0 Client ID and Client Secret.\
Configure 4ga Boards instance variables in the appropriate config file _(check your install method docs for details)_ - set Client ID and Client Secret to `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` to the values from the Google Cloud Console.
```yml
GOOGLE_CLIENT_ID: googleClientId
GOOGLE_CLIENT_SECRET: googleClientSecret
```

### GitHub SSO

Create an app on GitHub: [OAuth App](https://github.com/settings/applications/new) or [GitHub App](https://github.com/settings/apps/new).\
Create OAuth 2.0 Client ID and Client Secret.\
Configure 4ga Boards instance variables in the appropriate config file _(check your install method docs for details)_ - set Client ID and Client Secret to `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` to the values from the GitHub App.
```yml
GITHUB_CLIENT_ID: githubClientId
GITHUB_CLIENT_SECRET: githubClientSecret
```

### Microsoft SSO

Create an app on [Azure Portal](https://portal.azure.com).\
Create OIDC Client ID and Client Secret.\
Configure 4ga Boards instance variables in the appropriate config file _(check your install method docs for details)_ - set Client ID and Client Secret to `MICROSOFT_CLIENT_ID` and `MICROSOFT_CLIENT_SECRET` to the values from the Entra App.
```yml
MICROSOFT_CLIENT_ID: microsoftClientId
MICROSOFT_CLIENT_SECRET: microsoftClientSecret
```

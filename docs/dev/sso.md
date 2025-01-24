---
sidebar_label: 'SSO'
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
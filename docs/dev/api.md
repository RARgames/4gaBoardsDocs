---
sidebar_label: 'API'
description: '4ga Boards API'
---

# API

### Description

API can be used to automate tasks in 4ga Boards either by developers through external calls/scripts or to allow 4ga Boards built-in functionality such as creating cards using email.

### API Clients

#### Internal

Internal API clients are generated (if needed) on app startup and exchanged with 4ga Boards Notifications server to allow creating cards using email.\
For email-to-card functionality mailToken creator is used as a card creator.

#### External

Any user can generate API client to authenticate on it's behalf.\
Permissions are separated into groups: all `*`, all for group api e.g. attachments `attachments.*` or separate permissions e.g. `attachments.create`.

### API Usage Examples

Creating a card named `Card Name`:

```
curl -X POST "http://localhost:1337/api/lists/<listId>/cards" \
-H "Content-Type: application/json" \
-H "X-Client-Id: notclientid" \
-H "X-Client-Secret: notclientsecret" \
-d '{
  "name": "Card Name"
}'
```
Replace `http://localhost:1337` with you instance server URL.\
Replace `notclientid` and `notclientsecret` with data generated in `Authentication Settings`.\
You need approperiate permissions - in this case `cards.create`.\
You need to fetch listId using another API call, or just for testing using browser inspect.

Additional Links:\
[API Endpoints](https://github.com/RARgames/4gaBoards/blob/main/server/config/routes.js)

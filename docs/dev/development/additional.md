---
sidebar_label: 'Additional Info'
---

# Development Additional Info

### Check Database Using pgAdmin

Start pgAdmin container to view 4gaBoards db:
```bash
docker run --name pgadmin-container -p 5050:80 -e PGADMIN_DEFAULT_EMAIL=user@example.com -e PGADMIN_DEFAULT_PASSWORD=password --link 4gaboards-db-1 --network 4gaboards_default --restart always -d dpage/pgadmin4
```
You might want to configure:
- `-p 5050:80` - pgAdmin web port
- `-e PGADMIN_DEFAULT_EMAIL=user@example.com` - pgAdmin web username
- `-e PGADMIN_DEFAULT_PASSWORD=password` - pgAdmin web password
- `--link 4gaboards-db-1` - 4ga Boards db container name
- `--network 4gaboards_default` - 4ga Boards db network _if changed_
- `--restart always` - pgAdmin container restart policy

Open `http://locahost:80` to access pgAdmin.


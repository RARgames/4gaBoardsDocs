---
sidebar_label: 'Backup and Restore'
---

# Backup and Restore

### Backup and Restore

Before executing backup/restore scripts, change current directory to the directory where `docker-compose.yml` is located.

**Backup 4ga Boards instance data**
```
./boards-backup.sh
```
**Restore 4ga Boards instance data**
```
./boards-restore.sh 4gaBoards-backup.tgz
```
_You can use any relative path._

When restoring, the password has to match docker-compose password (If you don't remember it, you can set new password in docker-compose, but you have to skip altering the default user in backup.tgz/postgres.sql file e.g. comment line `ALTER ROLE postgres WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'XXX'` before restoring the backup).

Additional Links:\
[4ga Boards Backup Script](https://github.com/RARgames/4gaBoards/blob/main/boards-backup.sh)\
[4ga Boards Restore Script](https://github.com/RARgames/4gaBoards/blob/main/boards-restore.sh)

---
sidebar_label: 'Additional Information'
description: 'Logging, Rotating Logs, Fail2Ban, other'
---

# Additional Information

### Logging

4ga Boards currently allow you to expose the application's logfile directory to the host machine via a shared volume. This feature is not enabled by default.

To expose the logfile director to the host machine, add the item `./logs/:/app/logs/` under `services.4gaBoards.volumes`.

Note that the directory to the left of the semicolon is regarding the host machine while the directory to the right of the semicolon is regarding the Docker container.

For example, in the above step, `./logs/:/app/logs/` will create the folder `logs` in the same directory where the `docker-compose.yml` file lives.

### Rotating Logs

Logrotate is designed to ease administration of systems that generate large numbers of log files. It allows automatic rotation, compression, removal, and mailing of log files. Each log file may be handled daily, weekly, monthly, or when it grows too large.

**Setup logrotate for 4ga Boards logs**

Create a file in `/etc/logrotate.d` named `4gaBoards` with the following contents:

```bash
/path/to/4gaBoards/logs/4gaBoards.log {
  daily
  missingok
  rotate 14
  compress
  delaycompress
  notifempty
  create 640 root adm
  sharedscripts
}
```

Ensure to replace logfile directory with your installation’s `/logs/4gaBoards.log` location.\
Restart the logrotate service.

### Fail2ban

Fail2ban is a service that uses iptables to automatically drop connections for a pre-defined amount of time from IPs that continuously failed to authenticate to the configured services.

**Setup a filter and a jail for 4ga Boards**

A filter defines regex rules to identify when users fail to authenticate on 4ga Boards's user interface.\
Create a file in `/etc/fail2ban/filter.d` named `4gaBoards.conf` with the following contents:

```bash
[Definition]
failregex = ^(.*) Invalid (email or username:|password!) (\"(.*)\"!)? ?\(IP: <ADDR>\)$
ignoreregex =
```

The jail file defines how to handle the failed authentication attempts found by the 4ga Boards filter.\
Create a file in `/etc/fail2ban/jail.d` named `4gaBoards.local` with the following contents:

```bash
[4gaBoards]
enabled = true
port = http,https
filter = 4gaBoards
logpath = /path/to/4gaBoards/logs/4gaBoards.log
maxretry = 5
bantime = 900
```

Ensure to replace `logpath`'s value with your installation’s `/logs/4gaBoards.log` location. If you are using ports other than 80 and 443 for your Web server you should replace those too. The bantime and findtime are defined in seconds.

Restart the fail2ban service. You can check the status of your 4ga Boards jail by running:

```bash
fail2ban-client status 4gaBoards
```

### Custom file replacement

To replace any file inside docker container, you can use the following method e.g. to replace favicon.ico:\
Add extra `volume` entry in `docker-compose.yml`:\
`- /docker/4gaboards/instance/custom-favicon.ico:/app/public/favicon.ico`

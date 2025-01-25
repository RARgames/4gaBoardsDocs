---
sidebar_label: 'Web Server Configuration'
description: 'Nginx, Apache, SSL'
---

# Web Server Configuration

Examples for Nginx/Apache with/without SSL.

### Nginx with SSL (Recommended)

In this example `BASE_URL=https://demo.4gaboards.com` is used as 4ga Boards instance variable.\
Replace `demo.4gaboards.com` with your domain name, and configure SSL using preferred method.

File: _/etc/nginx/conf.d/4gaBoards.conf_
```nginx
upstream 4gaBoards {
   server localhost:3000;
   keepalive 32;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name demo.4gaboards.com;

    access_log /var/log/nginx/4gaBoards-access.log;
    error_log  /var/log/nginx/4gaBoards-error.log error;

    # SSL Configuration
    ssl_certificate /etc/letsencrypt/live/demo.4gaboards.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/demo.4gaboards.com/privkey.pem;
    ssl_session_cache shared:SSL:10m;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers "ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384";
    ssl_prefer_server_ciphers on;

    client_max_body_size 50M;
    proxy_set_header Host $http_host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Frame-Options SAMEORIGIN;
    proxy_buffers 256 16k;
    proxy_buffer_size 16k;

    location ~* \.io {
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_read_timeout 1d;
        client_body_timeout 60;
        send_timeout 300;
        lingering_timeout 5;
        proxy_connect_timeout 1d;
        proxy_send_timeout 1d;
        proxy_pass http://4gaBoards;
    }

    location / {
        proxy_set_header Connection "";
        proxy_read_timeout 600s;
        proxy_cache_revalidate on;
        proxy_cache_min_uses 2;
        proxy_cache_use_stale timeout;
        proxy_cache_lock on;
        proxy_http_version 1.1;
        proxy_pass http://4gaBoards;
    }
}
```

### Nginx without SSL

In this example `BASE_URL=http://demo.4gaboards.com` is used as 4ga Boards instance variable.\
Replace `demo.4gaboards.com` with your domain name.

File: _/etc/nginx/conf.d/4gaBoards.conf_
```nginx
upstream 4gaBoards {
    server localhost:3000;
    keepalive 32;
}

server {
    server_name demo.4gaboards.com;
    listen 80;
    listen [::]:80;
    access_log  /var/log/nginx/4gaBoards.access.log;
    error_log   /var/log/nginx/4gaBoards.error.log error;

    client_max_body_size 50M;
    proxy_set_header Host $http_host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Frame-Options SAMEORIGIN;
    proxy_buffers 256 16k;
    proxy_buffer_size 16k;

    location ~* \.io {
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_read_timeout 1d;
        client_body_timeout 60;
        send_timeout 300;
        lingering_timeout 5;
        proxy_connect_timeout 1d;
        proxy_send_timeout 1d;
        proxy_pass http://4gaBoards;
    }

    location / {
        proxy_set_header Connection "";
        proxy_read_timeout 600s;
        proxy_cache_revalidate on;
        proxy_cache_min_uses 2;
        proxy_cache_use_stale timeout;
        proxy_cache_lock on;
        proxy_http_version 1.1;
        proxy_pass http://4gaBoards;
    }
}
```

### Nginx without SSL (custom directory)

In this example `BASE_URL=http://demo.4gaboards.com/4gaBoards` is used as 4ga Boards instance variable.\
Replace `demo.4gaboards.com/4gaBoards` with your domain name, and configure SSL using preferred method (as in the example above).

Note: _Favicon might disappear._

File: _/etc/nginx/conf.d/4gaBoards.conf_
```nginx
upstream 4gaBoards {
    server localhost:3000;
    keepalive 32;
}

server {
    server_name demo.4gaboards.com/4gaBoards;
    listen 80;
    listen [::]:80;
    access_log  /var/log/nginx/4gaBoards.access.log;
    error_log   /var/log/nginx/4gaBoards.error.log error;

    client_max_body_size 50M;
    proxy_set_header Host $http_host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Frame-Options SAMEORIGIN;
    proxy_buffers 256 16k;
    proxy_buffer_size 16k;

    location ~* \.io {
        rewrite ^/4gaBoards/(.*)$ /$1 break;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_read_timeout 1d;
        client_body_timeout 60;
        send_timeout 300;
        lingering_timeout 5;
        proxy_connect_timeout 1d;
        proxy_send_timeout 1d;
        proxy_pass http://4gaBoards;
    }

    location /4gaBoards {
        rewrite ^/4gaBoards/(.*)$ /$1 break;
        proxy_set_header Connection "";
        proxy_read_timeout 600s;
        proxy_cache_revalidate on;
        proxy_cache_min_uses 2;
        proxy_cache_use_stale timeout;
        proxy_cache_lock on;
        proxy_http_version 1.1;
        proxy_pass http://4gaBoards;
    }
}
```

### Apache with SSL (Recommended)

In this example `BASE_URL=https://demo.4gaboards.com` is used as 4ga Boards instance variable.\
Replace `demo.4gaboards.com` with your domain name, and configure SSL using preferred method.

File: _/etc/httpd/conf/httpd.conf_
```apacheconf
LoadModule ssl_module modules/mod_ssl.so

Listen 443
<VirtualHost *:443>#
    ServerName demo.4gaboards.com
    SSLEngine on
    SSLCertificateFile "/etc/letsencrypt/live/demo.4gaboards.com/fullchain.pem"
    SSLCertificateKeyFile "/etc/letsencrypt/live/demo.4gaboards.com/privkey.pem"

    RewriteEngine On
        RewriteCond %{HTTP:Upgrade} =websocket [NC]
        RewriteRule /socket.io/(.*) ws://localhost:3000/socket.io/$1 [P,L]

    ProxyPreserveHost On
    ProxyRequests Off
            ProxyPass /.well-known !
            ProxyPassReverse /.well-known !
            ProxyPass /robots.txt !
            ProxyPassReverse /robots.txt !
            ProxyPass / http://localhost:3000/
            ProxyPassReverse / http://localhost:3000/

</VirtualHost>
```

### Apache without SSL

In this example `BASE_URL=http://demo.4gaboards.com` is used as 4ga Boards instance variable.\
Replace `demo.4gaboards.com` with your domain name.

File: _/etc/httpd/conf/httpd.conf_
```apacheconf
<VirtualHost *:80>#
    ServerName demo.4gaboards.com

    RewriteEngine On
        RewriteCond %{HTTP:Upgrade} =websocket [NC]
        RewriteRule /socket.io/(.*) ws://localhost:3000/socket.io/$1 [P,L]

    ProxyPreserveHost On
    ProxyRequests Off
            ProxyPass /.well-known !
            ProxyPassReverse /.well-known !
            ProxyPass /robots.txt !
            ProxyPassReverse /robots.txt !
            ProxyPass / http://localhost:3000/
            ProxyPassReverse / http://localhost:3000/

</VirtualHost>
```

### Apache without SSL (custom directory)

In this example `BASE_URL=http://demo.4gaboards.com/4gaBoards` is used as 4ga Boards instance variable.\
Replace `demo.4gaboards.com/4gaBoards` with your domain name, and configure SSL using preferred method (as in the example above).

File: _/etc/httpd/conf/httpd.conf_
```apacheconf
<VirtualHost *:80>#
    ServerName demo.4gaboards.com

    RewriteEngine On
        RewriteCond %{HTTP:Upgrade} =websocket [NC]
        RewriteRule /4gaBoards/socket.io/(.*) ws://localhost:3000/socket.io/$1 [P,L]

    ProxyPreserveHost On
    ProxyRequests Off
            ProxyPass /.well-known !
            ProxyPassReverse /.well-known !
            ProxyPass /robots.txt !
            ProxyPassReverse /robots.txt !
            ProxyPass /4gaBoards/ http://localhost:3000/
            ProxyPassReverse /4gaBoards/ http://localhost:3000/

</VirtualHost>
```

### SSL Certificate

You can get a free SSL Certificate using [Let's Encrypt](https://letsencrypt.org/).\
Tutorial for Rocky Linux 9: https://docs.rockylinux.org/guides/security/generating_ssl_keys_lets_encrypt/
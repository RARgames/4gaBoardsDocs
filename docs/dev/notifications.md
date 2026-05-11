---
sidebar_label: 'Notifications'
description: '4ga Boards Notifications'
---

# Notifications

### Description

Notifications are used to send email notifications from 4ga Boards to verififed email addresses and convert received email to card via Email-to-Card.

#### Email Notifications

This service sends email notifications respecting customizable per user notifications settings.

#### EmaIl Verification

Email notifications are only send after user is verified by clicking the link received in an email.

#### Email-to-Card

After creating email address in 4ga Boards (for list or board), anyone can send an email to the generated address to create a card within 4ga Boards.

### Setup

4ga Boards Email Notifications are enabled out of the box on 4ga Boards instances hosted by us.

Other ways to get 4ga Boards Notifications:
- make a [donation](https://4gaboards.com/contribute#donate) and send us donation confirmation via [contact form](https://4gaboards.com/contact)
- do some promotional activities (you might be requested to repeat the activities after some time) and send us proof via [contact form](https://4gaboards.com/contact)
This helps us promote the product and cover server costs.

If you want to setup email notifications on your private instance here are the steps:
- Host a mailserver e.g. `mailserver/docker-mailserver:latest` or purchase external server
- Set up DNS MX entries
- Set up Reverse DNS entry
- Set up DNS DKIM
- Set up NDS DMARC
- Set up DNS SPF
- Set up SSL Certs using e.g. Let's Encrypt
- Set up firewall rules to let e.g. 465, 993, 25 ports through 
- Prepare `postfix-accounts.cf`, `postfix-virtual.cf`, `sni.map`, `dovecot/conf.d`, `opendkim configuration` via e.g. `user-patches.sh`
- Prepare simple scripts to handle `NOTIFICATIONS_HOST_URL/api/clients/self`, `NOTIFICATIONS_HOST_URL/api/notifications/email-verification/request` `NOTIFICATIONS_HOST_URL/api/notifications/email` (you can simplify the flow by verifying every user request, hardcoding `self` request to skip Email-to-Card and just properly redirecting an email using email api).

We are aware that this selfhosted process is not that easy, we cannot simplify DNS and mailserver config as it is required to reduce spam by external servers.\
However, we'll try to expand this guide to provide detailed example of how to set up DNS records and provide a docker compose file with scripts that auto configure the mailserver.\
We'll also provide the files needed to do this without writing your own scripts.\

We have some parts of it, but it is not yet automated for public release. (any docs PR are welcome). Right now, we have to focus on other feature requests.



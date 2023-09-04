---
slug: /ssh-server-debian-11
sidebar_position: 1
tags: [ssh,remote,debian]
---

# Tutorial Remote dengan SSH

Dalam tutorial kali ini Aku akan membagikan cara untuk konfigurasi SSH Server Debian 11, oke langsung saja buka aplikasi VMWare dan hidupkan VM nya.
Pertama masuk dulu ke mode `superuser` dengan mengetik perintah berikut.

```bash
$ su

Password:
root@VM1:/home/debian#
```
kemudian masukan **kata sandi** dan kilk `enter`
## Konfigurasi
### Instalasi SSH Server

Selanjutnya kita perlu update repositori dengan mengetik perintah berikut.
```bash
apt-get update
```
Kemudian instal paket SSH Server.
```bash
apt-get install openssh-server -y
```
### Mengubah port SSH
Selanjutnya untuk mengubah port SSH kita perlu edit file konfigurasi, buka file konfigurasi dengan text editor `nano`.
```bash
nano /etc/ssh/sshd_config
```
Cari baris kode seperti di bawah ini.
```plain title="/etc/ssh/sshd_config"
#Port 22
```
Secara default/bawaan SSH memakai port `22` untuk mengubah nya edit file konfigurasi seperti berikut.
```plain title="/etc/ssh/sshd_config"
Port 1234
```
### Root login SSH
Secara default/bawaan user `root` atau `superuser` tidak diperbolehkan untuk login melalui remote tool seperti SSH 
karena user `root` adalah user yang memiliki hak akses paling tinggi atau bisa disebut `admin`, namun ada cara untuk agar user `root` bisa login melalui SSH. Pertama buka file konfigurasi dengan text editor `nano`.
```bash
nano /etc/ssh/sshd_config
```
Kemudian cari baris kode seperti berikut.
```plain title="/etc/ssh/sshd_config"
#PermitRootLogin prohibit-password
```
Dan ubah seperti di bawah ini.
```plain title="/etc/ssh/sshd_config"
PermitRootLogin yes
```
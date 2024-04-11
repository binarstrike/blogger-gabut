---
slug: /instalasi-ssh-server
tags: [ssh, remote, debian, linux]
---

# Instalasi dan konfigurasi SSH server pada Linux

Dalam tutorial kali ini Aku akan membagikan cara untuk konfigurasi SSH Server Debian 11, oke langsung saja buka aplikasi VMWare dan hidupkan VM nya.
Pertama masuk dulu ke mode `superuser` dengan mengetik perintah berikut.

```txt
$ su

Password:
root@VM1:/home/debian#
```

kemudian masukan kata sandi dan tekan tombol `enter`

## Konfigurasi

### Instalasi SSH Server

Selanjutnya kita perlu update repositori dengan mengetik perintah berikut.

```bash title="CLI"
apt-get update
```

Kemudian instal paket openssh-server.

```bash title="CLI"
apt-get install openssh-server -y
```

### Mengubah port SSH

Selanjutnya untuk mengubah port SSH kita perlu edit file konfigurasi, buka file konfigurasi dengan text editor `nano`.

```bash title="CLI"
nano /etc/ssh/sshd_config
```

Cari baris kode seperti di bawah ini.

```text title="/etc/ssh/sshd_config"
#Port 22
```

Secara default/bawaan SSH memakai port `22` untuk mengubah nya edit file konfigurasi seperti berikut.

```text title="/etc/ssh/sshd_config"
Port 1234
```

Tekan kombinasi tombol `ctrl + s` dan `ctrl + x` untuk menyimpan file konfigurasi.

### Login sebagai root

Secara default/bawaan user `root` atau `superuser` tidak diperbolehkan untuk login dengan SSH
karena user `root` adalah user yang memiliki hak akses paling tinggi atau bisa disebut `admin`, namun ada cara untuk agar user `root` bisa login melalui SSH. Pertama buka file konfigurasi dengan text editor `nano`.

```bash title="CLI"
nano /etc/ssh/sshd_config
```

Kemudian cari baris kode seperti berikut.

```text title="/etc/ssh/sshd_config"
#PermitRootLogin prohibit-password
```

Dan ubah seperti di bawah ini.

```text title="/etc/ssh/sshd_config"
PermitRootLogin yes
```

### Memulai ulang SSH server

Agar semua konfigurasi dari file konfigurasi SSH yang sudah diedit dapat aktif perlu memulai ulang SSH server dengan mengetik perintah berikut

```bash title="CLI"
systemctl restart ssh
```

## Remote akses menggunakan SSH

### Akses terminal melalui SSH

Setelah melakukan konfigurasi SSH pada server Linux sekarang kita akan melakukan remote akses terhadap mesin server Linux tersebut
dengan menggunakan SSH. Jalankan perintah berikut pada komputer klien atau komputer lain yang akan digunakan untuk mengakses Linux server melalui SSH.

```bash title="CLI" {1,4}
ssh <nama pengguna>@<ip atau host ssh server>

# Contoh perintah
ssh admin@10.8.0.33
```

Setelah menjalankan perintah diatas maka akan muncul pada terminal untuk konfirmasi izin melakukan koneksi ssh ke Linux server dengan mengetik "yes" dan tekan tombol `enter` juga meminta untuk memasukan kata sandi pengguna sesuai kredensial pengguna pada Linux server.

```text title="konfirmasi dan masukan kata sandi"
ssh admin@10.8.0.33

The authenticity of host '10.8.0.33 (10.8.0.33)' can't be established.
ED25519 key fingerprint is SHA256:cGeB10pdqGj3iuvCY3V7MEbO+b38Yq9PGzPVhN3Jz8o.
This key is not known by any other names.
// highlight-next-line
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added '10.8.0.33' (ED25519) to the list of known hosts.
// highlight-next-line
eclair@192.168.8.10's password:
Last login: Thu Apr 11 21:00:41 2024 from ::1
admin@linux-server$
```

Dengan mennggunakan SSH untuk mengakses terminal pada server dapat mempermudah pekerjaan dalam hal administrasi dan lainnya tanpa harus mengakses server tersebut secara fisik karena remote akses SSH dapat dilakukan dari jarak jauh dengan internet publik maupun lokal.

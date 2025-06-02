# NodeJS NPM

### Apa Itu NPM ?

**NPM** atau Node Package Manager adalah package manager atau penyedia paket untuk NodeJS yang menyediakan ribuat package gratis siap pakai untuk aplikasi NodeJS kita.

### Apa Itu Package ?

**Package** adalah tempat yang menyimpan kumpulan modul, dan modul adalah library JavaScript yang dapat dimasukkan ke dalam proyek NodeJS.

### Download Package

Untuk mendownload package caranya sangat mudah, caranya melalui terminal, lalu panggil nama package yang ingin didownload. Contohnya saya akan mendownload package yang namanya **upper-case**

```
E:\study-materials\nodejs-notes\basic\npm>npm install upper-case

added 2 packages in 4s
```

Sekarang kita sudah berhasil mendownload package pertama kita, dan secara otomatis dilokasi download package akan muncul folder dengan nama **node_modules** yang digunakan untuk menampung semua package yang telah di download dari NPM.

### Menggunakan Package

Setelah package di download, maka dia sudah ready untuk digunakan. Memasukkan package sama seperti memasukkan modul pada umumnya, dengan method **require()**

```
var uc = require('upper-case');
```

Buat file dengan nama **demo_npm.js** dan isi dengan kode berikut

```
var http = require("http");
var uc = require("upper-case");
http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(uc.upperCase("Hello World!"));
    res.end();
}).listen(8080);
```

Lalu run filenya di terminal seperti biasa.

Dan semua package bisa kita lihat di website resminya NPM, yaitu **[https://www.npmjs.com/](https://www.npmjs.com/)**

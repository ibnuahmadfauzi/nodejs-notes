# NodeJS HTTP Module

### Built-in HTTP Module

NodeJS memiliki salah satu Built-in module dengan nama HTTP, yang memungkinkan NodeJS untuk transfer data melalui **Hyper Text Transfer Protocol (HTTP)**. Untuk menggunakan HTTP module, kita juga memakai method **require()**

```
var http = require('http');
```

### NodeJS Sebagai Web Server

HTTP module bisa digunakan untuk membuat HTTP server yang mendengarkan port tertentu guna mengembalikan konten ke client. Gunakan method **createServer()** untuk membuat HTTP server.

```
var http = require("http");

http.createServer(function (req, res) {
    res.write("Hello World!");
    res.end();
}).listen(8080);
```

**http.createServer()** digunakan untuk membuat sebuah objek server, **res.write('Hello World!')** digunakan untuk mengembalikan respon atau menuliskan respon ke client, **res.end()** digunakan untuk mengakhiri respon, dan **.listen(8080)** digunakan agar objek server mendengarkan port 8080.

Simpan kode di atas dalam file **demo_http.js**, lalu jalankan di browser dengan mengakses **[http://localhost:8080/](http://localhost:8080/)**.

### Menambahkan HTTP Header

Jika respon dari HTTP server menampilkan HTML, kita harus memasukkan HTTP header dengan type konten yang benar, seperti berikut ini

```
var http = require("http");

http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hello World!");
    res.end();
}).listen(8080);

```

Argumen pertama dari method **res.writeHead()** adalah status kode **200** yang berarti **OK**, dan argumen kedua berupa objek respon yang diinginkan.

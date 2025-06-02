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

### Membaca Query String

Dalam fungsi **http.createServer()** yang digunakan untuk pembuatan web server, kita menemukan argumen **req** dalam pengembalian fungsinya, yang digunakan untuk request dari client dan dianggap sebaga **http.IncomingMessage object** atau objek bawaan Node.js yang mewakili permintaan (request) yang masuk dari client ke server HTTP.

Objek tersebut memilki property dengan nama **url** dan menampung data yang tampil setelah nama domain.

Contohnya sekarang buat file dengan nama **demo_htto_url.js** lalu isi dengan kode berikut

```
var http = require("http");
http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(req.url);
    res.end();
}).listen(8080);

```

**res.write(req.url)** respon dari web browser adalah data dari property **url**, sebagai contoh jalankan web servernya dan akses di browser dengan berbagai macam alamat berikut:

- **[http://localhost:8080/](http://localhost:8080/)**
- **[http://localhost:8080/about](http://localhost:8080/about)**
- **[http://localhost:8080/contact](http://localhost:8080/contact)**
- **[http://localhost:8080/blog](http://localhost:8080/blog)**
- **[http://localhost:8080/user/fauziyahmeitaya](http://localhost:8080/user/fauziyahmeitaya)**

### Mengolah Query String

Setelah bisa mengakses data **url** yang di ambil setelah nama domain, kita bisa mengolah string yang diberikan dengan menggunakan module **url**. Sebagai contoh buat file dengan nama **demo_querystring.js** lalu isi dengan kode berikut

```
var http = require("http");
var url = require("url");

http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    var q = url.parse(req.url, true).query;
    var txt = "";
    if (q.userid == 1) {
      txt = "<h1>Selamat Datang, Ibnu Ahmad Fauzi</h1>";
    } else if (q.userid == 2) {
      txt = "<h1>Selamat Datang, Fauziyah Meitaya</h1>";
    } else {
      txt = "<h1>User ID Tidak Ditemukan</h1>";
    }
    res.write(txt);
    res.end();
}).listen(8080);

```

Lalu akses dengan beberapa alamat berikut

- **[http://localhost:8080/?userid=1](http://localhost:8080/?userid=1)**
- **[http://localhost:8080/?userid=2](http://localhost:8080/?userid=2)**
- **[http://localhost:8080/?userid=3](http://localhost:8080/?userid=3)**

Jika ingin membawa lebih dari satu data, artinya tinggal tambahkan simbol **&** untuk membagi data satu dengan data lainnya, contoh

**[http://localhost:8080/?userid=1&username=fauziyahmeitaya](http://localhost:8080/?userid=1)**

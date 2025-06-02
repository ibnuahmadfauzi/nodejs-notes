# NodeJS Modules

### Apa Module di NodeJS ?

Konsepnya module sama seperti library atau pustaka dalam JavaScript, artinya kita membuat function yang bisa digunakan sewaktu-waktu ke dalam aplikasi.

### Built-in Modules

NodeJS memiliki berbagai macam built-in module yang bisa digunakan tanpa melakukan installasi Lihat berbagai macam referensinya di **[https://www.w3schools.com/nodejs/ref_modules.asp](https://www.w3schools.com/nodejs/ref_modules.asp)**.

### Menggunakan Module

Untuk menggunakan module, gunakan fungsi **require()** yang diisi nama modul dalam parameternya.

```
var http = require('http');
```

Sekarang aplikasi bisa mengakses module HTTP dan memungkinkan digunakan untuk membuat web server

```
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);
```

### Membuat Module

Kita bisa membuat module sendiri dan menggunakan ke aplikasi dengan mudah. Contohnya kita akan membuat modul untuk menampilkan waktu dan tanggal. Buat file dengan nama **myfirstmodule.js** dan isi dengan kode berikut

```
exports.myDateTime = function () {
  return Date();
};
```

Gunakan keyword **exports** untuk membuat property dan method bisa diakses diluar module.

### Menggunakan Module Yang Sudah Dibuat

Sekarang kita bisa memanggil module ke dalam file NodeJS, dan caranya juga memanggilnya dengan fungsi **require()** seperti pada kode di bawah ini

```
var http = require("http");
var dt = require("./myfirstmodule");

http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Date and Time : " + dt.myDateTime());
    res.end();
}).listen(8080);

```

Simpan kode di atas dengan nama **demo_module.js**, lalu jalankan di terminal dan lihat hasilnya di web browser

```
E:\study-materials\nodejs-notes\basic\modules>node demo_module.js

```

Dalam web browser ketika mengakses **[http://localhost:8080/](http://localhost:8080/)** akan muncul konten **Date and Time : Mon Jun 02 2025 14:32:31 GMT+0700 (Western Indonesia Time)** (hasil tergantung waktu saat kita akses websitenya).

Perhatikan pada kode di atas kita menggunakan **./** untuk menandakan bahwa module memiliki lokasi yang sama dengan file NodeJS.

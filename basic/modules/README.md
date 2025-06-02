# NodeJS Modules

### Apa Module di NodeJS ?

Konsepnya module sama seperti library atau pustaka dalam JavaScript, artinya kita membuat function yang bisa digunakan sewaktu-waktu ke dalam aplikasi.

### Built-in Modules

NodeJS memiliki berbagai macam built-in module yang bisa digunakan tanpa melakukan installasi Lihat berbagai macam referensinya di **[https://www.w3schools.com/nodejs/ref_modules.asp](https://www.w3schools.com/nodejs/ref_modules.asp)**.

### Menggunaka Modul

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

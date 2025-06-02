# NodeJS Get Stared

### Download NodeJS

NodeJS bisa didapatkan secara gratis dari situs resminya **[nodejs.org](https://nodejs.org/en/download)**. Gunakan perintah **node -v** dan **npm -v** untuk melihat versi NodeJS dan NPM yang didapakan.

```
C:\>node -v
v22.12.0

C:\>npm -v
10.9.0
```

### Getting Started

Setelah download dan install NodeJS di komputer, sekarang kita akan belajar menampilkan teks **Hello, world** menggunakan webserver yang kita buat dengan NodeJS. Langkah pertama buat file dengan nama **myfirst.js**, lalu isi dengan kode berikut:

<pre>
```
var http = require("http");

http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello World!");
  }).listen(8080);
```
</pre>

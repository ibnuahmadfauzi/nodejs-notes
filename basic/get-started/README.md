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

```
var http = require("http");

http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello World!");
}).listen(8080);
```

Kode di atas akan memberikan intruksi kepada komputer untuk menulis konten **Hello World!** di halaman browser ketika mengakses port **8080**. Untuk sementara kita tidak perlu memahami semua kodenya, akan dibahas secara perlahan nanti.

### Command Line Interface

File NodeJS harus dimulai dengan program CLI di komputer. Contohnya di sini kita akses programnya dengan perintah **Terminal**, gunakan **Command Prompt** atau **CMD** jika menggunakan sistem operasi Windows. Navigasikan ke tempat dimana file tersebut di simpan

```
C:\Users\Ibnu Fauzi>e:

E:\>cd study-materials\nodejs-notes\basic\get-started

E:\study-materials\nodejs-notes\basic\get-started>dir
 Volume in drive E is DATA
 Volume Serial Number is 5CB8-24FB

 Directory of E:\study-materials\nodejs-notes\basic\get-started

02/06/2025  13:39    <DIR>          .
02/06/2025  13:39    <DIR>          ..
02/06/2025  13:40               188 myfirst.js
02/06/2025  13:49             1.830 README.md
               2 File(s)          2.018 bytes
               2 Dir(s)  603.498.192.896 bytes free

E:\study-materials\nodejs-notes\basic\get-started>
```

### Menginisiasi File NodeJS

Jika lokasi file sudah ditemukan dan posisi di terminal sudah berada pada file tersimpan, kita bisa melakukan run program NodeJS dengan perintah **node myfirst.js** lalu tekan **enter**

```
E:\study-materials\nodejs-notes\basic\get-started>node myfirst.js

```

Jika tidak ada error yang terjadi, artinya web server sudah berjalan, silahkan buka web browser dan akses alamat **[http://localhost:8080/](http://localhost:8080/)**. Sekarang komputer kita sudah bekerja sebagai server.

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

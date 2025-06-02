# NodeJS File System Module

### NodeJS Sebagai File Server

Module file system memungkinkan kita untuk bekerja dengan file system di dalam komputer. Untuk memasukkan module file system gunakan

```
var fs = require('fs');
```

Tugas file system untuk menangani:

- Read files
- Create files
- Update files
- Delete files
- Rename files

### Read Files

Method **fs.readFile()** digunakan untuk membaca file di komputer. Buat 2 file dengan nama **demofile1.html** dan **demo_readfile.js** di dalam folder yang sama.

Isi file **demofile1.html** dengan kode berikut

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Demo File System</title>
  </head>
  <body>
    <h1>Data Mahasiswa</h1>
    <table border="1" cellspacing="0" cellpadding="5">
      <thead>
        <tr>
          <th>Nama</th>
          <th>Jurusan</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ibnu Ahmad Fauzi</td>
          <td>Teknik Informatika</td>
        </tr>
        <tr>
          <td>Fauziyah Meitaya</td>
          <td>Pendidikan Matematika</td>
        </tr>
      </tbody>
    </table>
  </body>
</html>

```

Lalu isi file **demo_readfile.js** dengan kode berikut

```
var http = require("http");
var fs = require("fs");
http.createServer(function (req, res) {
    fs.readFile("demofile1.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
}).listen(8080);

```

Lalu seperti biasa jalankan web server dan akses di web browser.

### Create Files

Module file system memiliki beberapa method untuk pembuatan file:

- **fs.appendFile()**
- **fs.open()**
- **fs.writeFile()**

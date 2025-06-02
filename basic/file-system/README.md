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

Method **fs.appendFile()** digunakan untuk menambahkan konten spesifik ke dalam sebuah file. Jika fle tidak tersedia, maka file baru akan dibuat

```
var fs = require("fs");
fs.appendFile("mynewfile1.txt", "Hello content!", function (err) {
  if (err) throw err;
  console.log("File tersimpan!");
});
```

Simpan dengan nama **demo_create_append.js**.

```
E:\study-materials\nodejs-notes\basic\file-system>node demo_create_append.js
File tersimpan!
```

Method **fs.open()** menggunakan "flag" yang ditaruh di argumen kedua, jika flag "w" berarti "writing", maka spesifik file dibuka untuk melakukan penulisan, namun jika file tidak tersedia maka file kosong akan dibuat

```
var fs = require("fs");
fs.open("mynewfile2.txt", "w", function (err, file) {
  if (err) throw err;
  console.log("File tersimpan!");
});
```

Simpan dengan nama **demo_create_open.js** lalu run filenya

```
E:\study-materials\nodejs-notes\basic\file-system>node demo_create_open.js
File tersimpan!
```

Method **fs.writeFile()** mengganti atau mengupdate spesifik file dan konten, jika file tidak ada maka file baru berisi konten baru akan dibuat

```
var fs = require("fs");
fs.writeFile("mynewfile3.txt", "Hello content!", function (err) {
  if (err) throw err;
  console.log("File tersimpan");
});
```

Simpan dengan nama **demo_create_writefile.js**, lalu run filenya

```
E:\study-materials\nodejs-notes\basic\file-system>node demo_create_writefile.js
File tersimpan
```

### Update Files

Module file system memiliki beberapa method untuk melakukan update file:

- **fs.appendFile()**
- **fs.writeFile()**

Method **fs.appendFile()** menambahkan spesifik konten diakhir konten asli

```
var fs = require("fs");
fs.appendFile("mynewfile1.txt", ". Ini konten baru.", function (err) {
  if (err) throw err;
  console.log("File diperbarui!");
});
```

Simpan dengan nama **demo_update_append.js** lalu run filenya

```
E:\study-materials\nodejs-notes\basic\file-system>node demo_update_append.js
File diperbarui!
```

Method **fs.writeFile()** mengganti file dan konten secara langsung

```
var fs = require("fs");
fs.writeFile("mynewfile3.txt", "File mynewfile3.txt sudah diganti!", function (err) {
    if (err) throw err;
    console.log("File diganti!");
  }
);
```

Simpan dengan nama **demo_update_writefile.js** dan run filenya

```
E:\study-materials\nodejs-notes\basic\file-system>node demo_update_writefile.js
File diganti!
```

### Delete Files

Method **fs.unlink()** digunakan untuk menghapus file spesifik dalam module file system

```
var fs = require("fs");
fs.unlink("mynewfile2.txt", function (err) {
  if (err) throw err;
  console.log("File dihapus!");
});

```

Simpan dengan nama **demo_delete.js** lalu run filenya

```
E:\study-materials\nodejs-notes\basic\file-system>node demo_delete.js
File dihapus!
```

### Rename Files

Method **fs.rename()** digunakan untuk melakukan rename pada file spesifik dalam module file system

```
var fs = require("fs");
fs.rename("mynewfile1.txt", "myrenamedfile.txt", function (err) {
  if (err) throw err;
  console.log("File Renamed!");
});
```

Simpan dengan nama **demo_rename.js** lalun run filenya

```
E:\study-materials\nodejs-notes\basic\file-system>node demo_rename.js
File Renamed!
```

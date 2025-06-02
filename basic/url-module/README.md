# NodeJS URL Module

### Built-in URL Module

Module **url** membagi alamat web menjadi beberapa bagian untuk diolah. Untuk menggunakan module **url** ambil modulenya dengan method **require()**

```
var url = require('url');
```

Lalu parsing alamat dengan method **url.parse()** dan itu akan mengembalikan URL yang terbagi menjadi beberapa part

```
var url = require("url");
var adr = "http://localhost:8080/fauzidleware.html?userid=1&username=fauziyahmeitaya";
var q = url.parse(adr, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qdata = q.query;
console.log(qdata.username);
```

Simpan file denga nama **demo_urlmodule.js** lalu run filenya

```
E:\study-materials\nodejs-notes\basic\url-module>node demo_urlmodule.js
localhost:8080
/fauzidleware.html
?userid=1&username=fauziyahmeitaya
fauziyahmeitaya
```

### NodeJS File Server

Sekarang kita bisa melakukan split string query dari url, pada materi sebelumnya kita sudah belajar bagaimana cara membaca file di system file. Sekarang kita akan gabungkan maka website akan menampilkan file yang diminta oleh client

Sekarang coba kita buat 4 file dengan nama

- **home.html**
- **about.html**
- **contact.html**
- **demo_fileserver.js**

File **home.html**

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Site - HomePage</title>
  </head>
  <body>
    <h1>My Site</h1>
    <ul>
      <li><a href="home.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
    <h3>HomePage</h3>
    <p>Copyright &copy; 2025</p>
  </body>
</html>

```

File **about.html**

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Site - About</title>
  </head>
  <body>
    <h1>My Site</h1>
    <ul>
      <li><a href="home.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
    <h3>About</h3>
    <p>Copyright &copy; 2025</p>
  </body>
</html>
```

File **about.html**

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Site - About</title>
  </head>
  <body>
    <h1>My Site</h1>
    <ul>
      <li><a href="home.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
    <h3>About</h3>
    <p>Copyright &copy; 2025</p>
  </body>
</html>
```

File **contact.html**

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Site - Contact</title>
  </head>
  <body>
    <h1>My Site</h1>
    <ul>
      <li><a href="home.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
    <h3>Contact</h3>
    <p>Copyright &copy; 2025</p>
  </body>
</html>
```

File **demo_fileserver.js**

```
var http = require("http");
var url = require("url");
var fs = require("fs");
http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404 Not Found");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
}).listen(8080);
```

Pada contoh di atas kita membuat routing sederhana, yang mana file yang ditampilkan tergantung request yang diminta client, ketika file tidak tersedia maka akan menampilkan konten **"404 Not Found"**

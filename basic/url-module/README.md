# NodeJS URL Module

### Built-in URL Module

Module **url** membagi alamat web menjadi beberapa bagian untuk diolah. Untuk menggunakan module **url** ambil modulenya dengan method **require()**

```
var url = require('url');
```

Lalu parsing alamat dengan method **url.parse()** dan itu akan mengembalikan URL yang terbagi menjadi beberapa part

```
var url = require("url");
var adr =
  "http://localhost:8080/fauzidleware.html?userid=1&username=fauziyahmeitaya";
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

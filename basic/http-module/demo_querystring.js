var http = require("http");
var url = require("url");

http
  .createServer(function (req, res) {
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
  })
  .listen(8080);

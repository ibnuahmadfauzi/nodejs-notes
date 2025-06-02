# NodeJS Introduction

### Apa Itu NodeJS ?

NodeJS merupakan **Open Source Server Environment** yang memungkinkan **JavaScript** dijalankan pada sisi server dan bisa digunakan pada berbagai macam platform serta gratis untuk dipergunakan.

### Mengapa Memilih NodeJS ?

NodeJS menggunakan **asynchronous programming!** yaitu pendekatan pemrograman di mana fungsi atau operasi dapat berjalan secara tidak terikat (tidak menunggu) tanpa menghentikan eksekusi kode lainnya.

Tugas umum **web server** adalah membuka file di server dan mengembalikan konten ke client.

Berikut perbedaan cara handle file antara **PHP** dan **NodeJS**.

**PHP**:

- Mengirim task ke file system
- Menunggu file system membuka dan membaca file
- Mengembalikan konten ke client
- Siap untuk handle request berikutnya

**NodeJS**:

- Mengirim task ke file system
- Siap handle request berikutnya
- Ketika file system dibuka dan dibaca, server mengembalikan konten ke client

NodeJS menghilangkan waktu tunggu dan melanjutkan proses berikutnya. Menjalankan **single-threaded**, **non-blocing**, dan **asynchronous programming** yang lebih hemat memory.

# CASE PROJECT : sistem manajemen penyewaan peralatan photography 📸📸

Deskripsi:  Sistem ini memungkinkan pengguna untuk membeli berbagai jenis menu coffe, seperti coffe Americano, Cappucino, dan Coffe Latte. Pengguna dapat melihat menu yang tersedia, melakukan pemesanan, dan mengatur pengembalian coffe.

# DESKRIPSI CASE 🤳

Dalam project ini terdapat beberapa entitas utama yang berhubungan satu sama lain:

## Hubungan Antar Tabel:
### 1. Admin (Admin): Admin bisa menerima pesanana yang dilakukan oleh pengguna.
### 2. Customer (Pelanggan): Pengguna yang membeli coffe.
### 3. Menu (Menu): Pengguna yang ingin membeli bisa melihat menu.
### 4. Order (Pesan Coffe): Pesanan coffe yang dilakukan ke admin untuk menambah keranjang.
### 5. Payment (Pembayaran): Pembayaran yang dilakukan pelanggan setelah membeli coffe.

# RELASI ANTAR ENTITAS ✍

## 1. Admin (admin):
Setiap pelanggan dapat melakukan transaksi. <br>
Relasi: One-to-Many

## 2. Customer (pelanggan):
Setiap pelanggan dapat melakukan pembelian. <br>
Relasi: One-to-Many

## 3. Menu (menu):
Setiap pelanggan dapat melihat menu yang tertera di atas untuk melakukan pembelian. <br>
Relasi: One-to-Many

## 4. Order (pesan coffe):
Setiap pelanggan bisa melalakukan pesanan coffe jika sudah melakukan transaksi. <br>
Relasi: One-to-Ma

## 5. Payment (Pembayaran):
Setiap pelanggan bisa melakukan transaksi all payment. <br>
Relasi: One-to-Many


## Dependecies / Teknologi yang digunakan 💻

1. *npm init -y*

    Perintah ini digunakan untuk secara otomatis menginisialisasi dan membuat file package.json

    bash
    npm init -y
    

2. *express*

    Express JS sebagai framework Node.js untuk mengelola request dan response HTTP

    bash
   npm i express
    

3. *mysql*

    package untuk melakukan koneksi ke database

    bash
    npm i mysql2
    

4. *dotenv*

    Dotenv untuk mengatur variabel lingkungan
    bash
    npm i dotenv
    

5. *sequelize*

    Sebagai Orm yang dipakai

    bash
    npm i sequelize
    


6. *nodemon*

    jalankan dengan mengetikan perintah (nodemon namaFile)

    bash
    npm install nodemon
    

    Perintah ini akan menjalankan server secara terus menerus

    Aplikasi akan berjalan pada port yang ditentukan di file .env .


<br>



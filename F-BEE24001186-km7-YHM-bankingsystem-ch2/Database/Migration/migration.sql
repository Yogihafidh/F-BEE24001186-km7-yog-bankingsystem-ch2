-- Active: 1728269097332@@127.0.0.1@5432@bankingsytem_db@public

-- DATABASE
-- Buat Database
CREATE DATABASE bankingsystem_db;

-- Hapus Database
DROP DATABASE bankingsystem_db;

-- TABEL
-- Membuat tabel nasabah 
CREATE TABLE nasabah (
    ID_Nasabah BIGSERIAL PRIMARY KEY,  
    Nama VARCHAR(100),
    Alamat VARCHAR(255),
    No_Telepon VARCHAR(20),
    Email VARCHAR(100),
    Tanggal_Lahir DATE
);

-- Membuat tabel akun 
CREATE TABLE akun (
    ID_Akun BIGSERIAL PRIMARY KEY,  
    Nomor_Akun VARCHAR(50) UNIQUE,
    Tipe_Akun VARCHAR(50),
    Saldo DECIMAL(15, 2) DEFAULT 0,
    Tanggal_Pembuatan DATE DEFAULT CURRENT_DATE,  
    ID_Nasabah BIGINT,
    FOREIGN KEY (ID_Nasabah) REFERENCES nasabah(ID_Nasabah)
);

-- Membuat tabel transaksi 
CREATE TABLE transaksi (
    ID_Transaksi BIGSERIAL PRIMARY KEY,
    Nomor_Transaksi VARCHAR(50) UNIQUE,
    Tanggal_Transaksi TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Jumlah DECIMAL(15, 2),
    Tipe_Transaksi VARCHAR(50),
    Deskripsi VARCHAR(255),
    ID_Akun BIGINT,
    FOREIGN KEY (ID_Akun) REFERENCES akun(ID_Akun)
);

-- Mengapus tabel
DROP TABLE nasabah;
DROP TABLE akun;
DROP TABLE transaksi;
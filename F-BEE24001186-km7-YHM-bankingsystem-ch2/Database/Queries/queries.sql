-- Active: 1728269097332@@127.0.0.1@5432@bankingsytem_db@public

-- INSERT DATA TABEL
-- Memasukkan data dummy ke tabel nasabah 
INSERT INTO nasabah (nama, alamat, no_telepon, email, tanggal_lahir)
VALUES
('Andi Pratama', 'Jl. Merdeka No. 1, Jakarta', '081234567890', 'andi.pratama@mail.com', '1985-04-12'),
('Budi Santoso', 'Jl. Sudirman No. 10, Bandung', '081987654321', 'budi.santoso@mail.com', '1990-05-22'),
('Citra Dewi', 'Jl. Diponegoro No. 7, Surabaya', '081567890123', 'citra.dewi@mail.com', '1988-11-15');

-- Memasukkan data dummy ke tabel akun 
INSERT INTO akun (nomor_akun, tipe_akun, saldo, id_nasabah)
VALUES
('101-234-567', 'tabungan', 5000000.00, 1),
('101-987-654', 'giro', 15000000.00, 2),
('102-456-789', 'tabungan', 3000000.00, 3);

-- Memasukkan data dummy ke tabel transaksi 
INSERT INTO transaksi (nomor_transaksi, tanggal_transaksi, jumlah, tipe_transaksi, deskripsi, id_akun)
VALUES
('TXN001', '2023-06-01', 1000000.00, 'debit', 'Pembelian barang elektronik', 1),
('TXN002', '2023-06-10', 500000.00, 'debit', 'Pembayaran listrik', 1),
('TXN003', '2023-07-01', 2000000.00, 'kredit', 'Gaji Bulanan', 2),
('TXN004', '2023-08-15', 100000.00, 'debit', 'Pembelian makanan', 3);

-- SELECT TABEL
SELECT * FROM nasabah;
SELECT * FROM akun;
SELECT * FROM transaksi;

-- UPDATE TABEL DEPOSIT (Menambah saldo pada akun tertentu)
UPDATE akun
SET saldo = saldo + 500000.00  -- Nominal
WHERE id_akun = 1;  -- Pilih akun berdasarkan ID

-- UPDATE TABEL WITHDRAW (Mengurangi saldo)
UPDATE akun
SET saldo = saldo - 250000.00  -- Nominal
WHERE id_akun = 1 AND saldo >= 250000.00;  -- Pilih akun berdasarkan ID

-- UPDATE TABEL TRANSAKSI (Memperbarui jumlah transaksi dan deskripsi pada transaksi tertentu)
UPDATE transaksi
SET jumlah = 300000.00, deskripsi = 'Update jumlah transaksi'
WHERE id_transaksi = 2;  -- Pilih akun berdasarkan ID


-- MENAMPILKAN SALDO
SELECT saldo
FROM akun
WHERE id_akun = 1;  -- Pilih akun berdasarkan ID

SELECT saldo
FROM akun
WHERE nomor_akun = '101-234-567';  -- Pilih akun berdasarkan nomor akun

-- DELETE
-- Menghapus transaksi berdasarkan transaksi_id
DELETE FROM transaksi
WHERE id_transaksi = 1;  -- Hapus transaksi dengan ID tertentu

-- DELETE ROW (Menghapus transaksi berdasarkan akun_id)
DELETE FROM transaksi
WHERE id_akun = 2;  -- Pilih akun berdasarkan ID

DELETE FROM akun
WHERE id_akun = 1;

DELETE FROM nasabah
WHERE id_nasabah = 1;

-- INDEXING
CREATE INDEX idx_akun_saldo ON akun(id_akun); -- Mempercepat pencarian saldo berdasarkan akun_id
CREATE INDEX idx_transaksi_akun ON transaksi(id_akun); -- Mempercepat pencarian transaksi berdasarkan id_akun
CREATE INDEX idx_transaksi_tanggal ON transaksi(tanggal_transaksi); -- Mempercepat pencarian transaksi berdasarkan tanggal_transaksi
CREATE INDEX idx_transaksi_akun_tipe_transaksi ON transaksi(id_akun, tipe_transaksi); -- Mempercepat pencarian transaksi berdasarkan id_akun dan tipe_transaksi
CREATE INDEX idx_akun_nasabah_id ON akun(id_nasabah); -- relasi dengan tabel nasabah
CREATE INDEX idx_akun_nomor_tipe ON akun(nomor_akun, tipe_akun); -- nomor_akun dan tipe_akun
CREATE INDEX idx_transaksi_id_akun ON transaksi(id_akun); -- relasi dengan tabel akun
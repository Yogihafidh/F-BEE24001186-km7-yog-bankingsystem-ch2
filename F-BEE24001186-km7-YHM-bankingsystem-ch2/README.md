Berikut adalah deskripsi lengkap tentang cara kerja kode yang dapat Anda masukkan ke dalam `README.md`:

---

# Bank Account Management System

## Deskripsi

Sistem Manajemen Akun Bank ini ditulis dalam JavaScript menggunakan Node.js. Kode ini menyediakan fitur untuk menambah (deposit) dan mengurangi (withdraw) saldo dari akun bank. Sistem ini menggunakan modul `readline` untuk interaksi pengguna di terminal, sehingga pengguna dapat memasukkan nominal yang ingin ditambahkan atau dikurangi.

## Struktur Kode

Sistem ini terdiri dari dua file utama:

1. **`bank_account.js`**: Berisi definisi kelas `Bank` dengan metode untuk melakukan deposit dan withdraw.
2. **`bank_system.js`**: Menjalankan aplikasi dan mengelola interaksi pengguna dengan objek `Bank`.

## Cara Kerja Kode

### 1. Import dan Setup `readline`

Pada awal file `bank_account.js`, modul `readline` diimpor dan digunakan untuk membuat antarmuka (interface) bagi pengguna untuk berinteraksi melalui terminal.

```javascript
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
```

### 2. Kelas `Bank`

Kelas `Bank` didefinisikan dengan:

- **Properti**:
  - `saldo`: Menyimpan saldo awal, yang diinisialisasi melalui constructor.
- **Metode**:

  - **`deposit()`**:

    - Meminta pengguna untuk memasukkan nominal yang ingin ditambahkan.
    - Memvalidasi input untuk memastikan bahwa nominal yang dimasukkan adalah angka positif.
    - Menambahkan nominal ke saldo setelah 3 detik.
    - Mengembalikan pesan sukses atau pesan error jika input tidak valid.

  - **`withdraw()`**:
    - Meminta pengguna untuk memasukkan nominal yang ingin dikurangi.
    - Memvalidasi input untuk memastikan bahwa nominal yang dimasukkan adalah angka positif dan saldo mencukupi.
    - Mengurangi nominal dari saldo setelah 3 detik.
    - Mengembalikan pesan sukses atau pesan error jika input tidak valid atau saldo tidak mencukupi.

### 3. Menangani Input dan Output

Di dalam file `bank_system.js`, fungsi `main()` didefinisikan untuk menjalankan proses deposit dan withdraw secara berurutan. Fungsi ini juga menangani error yang mungkin terjadi selama proses input.

```javascript
async function main() {
  const rekening = new Bank();
  try {
    const deposit = await rekening.deposit();
    console.log(deposit);

    const withdraw = await rekening.withdraw();
    console.log(withdraw);
  } catch (err) {
    console.error(err.message);
  } finally {
    rl.close(); // Menutup interface setelah seluruh operasi selesai
  }
}
```

### 4. Menutup Interface

Setelah semua operasi selesai, interface `readline` ditutup, dan pesan khusus akan ditampilkan jika ada error yang terjadi.

## Fitur

- Menambah saldo dengan validasi input.
- Mengurangi saldo dengan validasi input dan pengecekan saldo mencukupi.
- Penutupan interface readline setelah semua operasi selesai.
- Pesan error yang informatif untuk membantu pengguna dalam mengatasi kesalahan input.

## Cara Menjalankan

1. Pastikan Anda memiliki Node.js terinstal.
2. Clone repositori ini.
3. Navigasi ke direktori proyek dan jalankan perintah:
   ```bash
   node bank_system.js
   ```
4. Ikuti instruksi di terminal untuk melakukan deposit dan withdraw.

---

Anda dapat menyesuaikan atau menambahkan informasi lain yang mungkin relevan untuk proyek ini.

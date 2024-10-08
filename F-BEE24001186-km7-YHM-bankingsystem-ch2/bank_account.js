const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
class Bank {
  constructor(saldoAwal = 0) {
    this.saldo = saldoAwal;
  }

  deposit() {
    return new Promise((resolve, reject) => {
      rl.question("Masukkan nominal yang ingin ditambahkan: ", (input) => {
        const nominal = Number(input);

        setTimeout(() => {
          if (isNaN(nominal) || nominal <= 0) {
            return reject(
              new Error(
                "Error: Nominal yang dimasukkan tidak valid. Harus berupa angka positif."
              )
            );
          }
          this.saldo += nominal;
          resolve(
            `Saldo berhasil ditambahkan. Saldo anda sekarang ${this.saldo}`
          );
        }, 3000);
      });
    });
  }
}

// Menangani event 'close' untuk menampilkan custom message
rl.on("close", () => {
  console.log("Input sudah selesai, interface ditutup.");
});

module.exports = { Bank, rl };

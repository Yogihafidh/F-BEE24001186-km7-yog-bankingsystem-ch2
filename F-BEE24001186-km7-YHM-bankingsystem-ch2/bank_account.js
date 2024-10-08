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

  withdraw() {
    return new Promise((resolve, reject) => {
      rl.question("Masukkan nominal yang ingin dikurangi: ", (input) => {
        const nominal = Number(input);

        setTimeout(() => {
          if (isNaN(nominal) || nominal <= 0) {
            return reject(
              new Error(
                "Error: Nominal yang dimasukkan tidak valid. Harus berupa angka positif."
              )
            );
          }
          if (this.saldo < nominal) {
            return reject(
              new Error(
                `Error: Saldo tidak mencukupi. Saldo anda saat ini ${this.saldo}.`
              )
            );
          }
          this.saldo -= nominal;
          resolve(
            `Saldo berhasil dikurangi. Saldo anda sekarang ${this.saldo}`
          );
        }, 3000);
      });
    });
  }

  getBalance() {
    return `Saldo anda saat ini adalah ${this.saldo}`;
  }
}

// Menangani event 'close' untuk menampilkan custom message
rl.on("close", () => {
  console.log("Input sudah selesai, interface ditutup.");
});

module.exports = { Bank, rl };

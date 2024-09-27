// Modul Readline
const readline = require("readline");

// Membuat interface untuk input dan output di terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Deklarasi class bank
class Bank {
  // Construktor function
  constructor(saldoAwal = 0) {
    this.saldo = saldoAwal;
  }
  // Fungsi Tambah Saldo
  deposit() {
    return new Promise((resolve, reject) => {
      rl.question("Masukan nominal yang ingin ditambahkan: ", (input) => {
        const nominal = Number(input);

        setTimeout(() => {
          if (isNaN(nominal) || nominal <= 0)
            return reject("Input anda tidak valid");
          this.saldo += nominal;
          resolve(
            `Saldo berhasil ditambahkan. Saldo anda sekarang ${this.saldo}`
          );
        }, 3000);
      });
    });
  }
  // Fungsi Kurangi Saldo
  withdraw() {
    return new Promise((resolve, reject) => {
      rl.question("Masukan nominal yang ingin anda kurangi: ", (input) => {
        const nominal = Number(input);

        setTimeout(() => {
          if (isNaN(nominal) || nominal <= 0)
            return reject("Input anda tidak valid");
          if (this.saldo < nominal) return reject("Saldo tidak mencukupi.");

          this.saldo -= nominal;
          resolve(
            `Saldo berhasil dikurangi. Saldo anda sekarang ${this.saldo}`
          );
        }, 3000);
      });
    });
  }
}

// Penggunaan

async function main() {
  const rekeking = new Bank();
  try {
    const deposit = await rekeking.deposit();
    console.log(deposit);

    const withdraw = await rekeking.withdraw();
    console.log(withdraw);
  } catch (err) {
    console.error(err);
  } finally {
    rl.close(); // Menutup interface input/output di terminal
  }
}
main();

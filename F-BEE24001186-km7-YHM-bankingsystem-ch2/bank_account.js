const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Bank {
  constructor(saldoAwal = 0) {
    this.saldo = saldoAwal;
  }
}

// Menangani event 'close' untuk menampilkan custom message
rl.on("close", () => {
  console.log("Input sudah selesai, interface ditutup.");
});

module.exports = { Bank, rl };

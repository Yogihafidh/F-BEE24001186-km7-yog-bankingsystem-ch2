class Bank {
  constructor(saldoAwal = 0) {
    this.saldo = saldoAwal;
  }
  // Fungsi Tambah Saldo
  deposit() {
    let nominal = Number(prompt("Masukan nominal yang ingin anda tambahkan"));
    if (isNaN(nominal) || nominal <= 0) alert("Tidak Valid");

    this.saldo += nominal;
    alert(`Saldo berhasil ditambahkan. Saldo anda sekarang ${this.saldo}`);
  }
  // Fungsi Kurangi Saldo
  withdraw() {
    let nominal = Number(prompt("Masukan nominal yang ingin anda kurangi"));
    if (isNaN(nominal) || nominal <= 0) alert("Tidak Valid");
    if (this.saldo < nominal) return alert("Saldo anda tidak mencukup");

    this.saldo -= nominal;
    alert(`Saldo berhasil dikurangi. Saldo anda sekarang ${this.saldo}`);
  }
}

// Penggunaan
const rekeking = new Bank();
rekeking.deposit();
rekeking.withdraw();

const { Bank, rl } = require("./bank_account");

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

main();

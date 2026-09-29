function canTransfer(balance, amount) {
  return amount > 0 && amount <= balance;
}

console.log("Case 1:", canTransfer(5000000, 1000000));
console.log("Case 2:", canTransfer(5000000, 6000000));
console.log("Case 3:", canTransfer(5000000, 0));

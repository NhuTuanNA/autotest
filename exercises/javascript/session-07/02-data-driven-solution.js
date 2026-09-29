const testCases = [
  { name: "normal", balance: 5000000, amount: 1000000, expected: true },
  { name: "equal balance", balance: 5000000, amount: 5000000, expected: true },
  { name: "over balance", balance: 5000000, amount: 5000001, expected: false },
  { name: "zero", balance: 5000000, amount: 0, expected: false },
  { name: "negative", balance: 5000000, amount: -1, expected: false }
];

function canTransfer(balance, amount) {
  return amount > 0 && amount <= balance;
}

for (const tc of testCases) {
  const actual = canTransfer(tc.balance, tc.amount);
  const result = actual === tc.expected ? "PASS" : "FAIL";
  console.log(result, "-", tc.name, "| expected:", tc.expected, "| actual:", actual);
}

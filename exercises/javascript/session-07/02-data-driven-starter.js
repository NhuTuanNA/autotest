const testCases = [
  { name: "normal", balance: 5000000, amount: 1000000, expected: true },
  { name: "equal balance", balance: 5000000, amount: 5000000, expected: true },
  { name: "over balance", balance: 5000000, amount: 5000001, expected: false },
  { name: "zero", balance: 5000000, amount: 0, expected: false },
  { name: "negative", balance: 5000000, amount: -1, expected: false }
];

function canTransfer(balance, amount) {
  // TODO
}

for (const tc of testCases) {
  // TODO:
  // 1. gọi canTransfer
  // 2. so sánh actual với expected
  // 3. console.log PASS hoặc FAIL
}

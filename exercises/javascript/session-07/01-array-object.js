const account = {
  accountNo: "001",
  balance: 5000000,
  status: "ACTIVE"
};

const amounts = [1, 1000, 5000000, 5000001, 0, -1];

console.log("Account:", account);
console.log("Balance:", account.balance);

for (const amount of amounts) {
  console.log("Amount:", amount);
}

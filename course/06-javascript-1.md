# Buổi 06 — JavaScript tối thiểu I

## Mục tiêu
- Hiểu variable, data type, comparison, if và function.
- Liên hệ code với business rule.

## Học ở đâu
F8 JavaScript cơ bản: https://f8.edu.vn/courses/javascript-co-ban

Chỉ học các phần:
- biến
- kiểu dữ liệu
- toán tử so sánh
- boolean
- if/else
- function

## Cách chạy
Dùng trình duyệt:
1. Chrome -> F12.
2. Tab Console.
3. Paste code và Enter.

Hoặc tạo file `practice.js`, chạy:
```bash
node practice.js
```

## Ví dụ
```javascript
let balance = 5000000;
let amount = 1000000;

if (amount > 0 && amount <= balance) {
  console.log("Transfer allowed");
} else {
  console.log("Transfer rejected");
}
```

Function:
```javascript
function canTransfer(balance, amount) {
  return amount > 0 && amount <= balance;
}

console.log(canTransfer(5000000, 1000000));
console.log(canTransfer(5000000, 6000000));
```

## Bài tập
1. Viết function `isValidAmount(amount)`.
2. Trả về true nếu amount > 0.
3. Test với 1000, 0, -1.
4. Viết `isEnoughBalance(balance, amount)`.

## AI
> Hãy biến business rule “amount > 0 và amount <= balance” thành 3 bài JavaScript tăng dần độ khó. Đừng đưa đáp án trước.

## Interview
1. Variable là gì?
2. if/else dùng khi nào?
3. Function giúp gì cho test code?

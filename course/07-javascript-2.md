# Buổi 07 — JavaScript tối thiểu II

## Mục tiêu
- Hiểu Array, Object và loop.
- Biết chúng thường dùng cho test data.

## Học ở đâu
Tiếp tục F8: https://f8.edu.vn/courses/javascript-co-ban

Chỉ học:
- Array
- Object
- for / for...of cơ bản

## Ví dụ Object
```javascript
const account = {
  accountNo: "001",
  balance: 5000000,
  status: "ACTIVE"
};

console.log(account.balance);
```

## Ví dụ Array
```javascript
const amounts = [1, 1000, 5000000, 5000001, 0, -1];

for (const amount of amounts) {
  console.log(amount);
}
```

## Ghép lại thành data-driven thinking
```javascript
const testCases = [
  { amount: 1000, expected: true },
  { amount: 0, expected: false },
  { amount: -1, expected: false }
];

for (const tc of testCases) {
  const actual = tc.amount > 0;
  console.log(tc.amount, actual === tc.expected);
}
```

## Bài tập
Tạo array 5 testcase transfer gồm:
- name
- balance
- amount
- expected

Loop qua và in PASS/FAIL.

## AI
> Hãy đóng vai interviewer. Hỏi tôi 10 câu JavaScript chỉ về variable, if, function, array, object và loop. Mỗi lần một câu, chờ tôi trả lời rồi mới chữa.

## Checklist
- [ ] Đọc được object.
- [ ] Đọc được array.
- [ ] Hiểu loop đang lặp test data.

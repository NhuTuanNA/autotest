# Buổi 05 — API Assertion trong Postman

## Mục tiêu
- Hiểu assertion.
- Viết test script đầu tiên.
- Cố tình tạo PASS và FAIL.

## Học ở đâu
- Video: https://www.youtube.com/watch?v=E-GD4jK5fIQ
- Postman test scripts: https://learning.postman.com/docs/tests-and-scripts/write-scripts/test-scripts/

## Chuẩn bị
GET:
```text
https://jsonplaceholder.typicode.com/posts/1
```

## Assertion 1 — status
Trong tab Tests/Scripts:
```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
```

## Assertion 2 — field
```javascript
pm.test("Post id is 1", function () {
    const body = pm.response.json();
    pm.expect(body.id).to.eql(1);
});
```

## Bắt buộc tạo FAIL
Đổi:
```javascript
pm.expect(body.id).to.eql(999);
```
Chạy lại và đọc message lỗi.

## Bài tập
Viết thêm assertion:
- `userId === 1`
- body có field `title`
- status là 200

## Prompt AI
> Đây là Postman assertion tôi viết và error message. Đừng sửa code ngay. Hãy giải thích Expected và Actual rồi cho tôi 2 gợi ý.

## Interview
1. Assertion là gì?
2. Test PASS nghĩa là gì?
3. Nếu status đúng nhưng body sai thì test nên PASS hay FAIL?

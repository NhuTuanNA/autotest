# Postman Exercises

## Import collection

1. Mở Postman.
2. Chọn **Import**.
3. Chọn file:
   `Automation-Learning.postman_collection.json`
4. Collection `Automation Learning` sẽ xuất hiện.

## Request có sẵn

### 1. GET Post
API:

```text
GET https://jsonplaceholder.typicode.com/posts/1
```

Tests:
- status = 200
- id = 1
- response có title

### 2. POST Post

```text
POST https://jsonplaceholder.typicode.com/posts
```

Tests:
- status = 201
- title đúng với request

## Bài tập

Sau khi import:

1. Chạy GET Post.
2. Mở tab Tests/Scripts và đọc code.
3. Cố tình đổi expected id từ 1 thành 999.
4. Chạy lại để thấy FAIL.
5. Sửa về 1.
6. Tạo thêm một request GET khác với id = 2.
7. Tự viết assertion id = 2.

## Lưu ý

JSONPlaceholder là API demo. Dữ liệu POST không được lưu vĩnh viễn; mục tiêu ở đây là học request/response/assertion.

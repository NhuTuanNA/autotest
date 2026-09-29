# Buổi 03 — Postman cơ bản

## Mục tiêu
- Cài Postman.
- Gửi request đầu tiên.
- Đọc status, body, header, response time.
- Lưu request vào Collection.

## Học ở đâu
- Anh Tester Bài 3: https://anhtester.com/blog/api-testing-with-postman/api-postman-bai-3-cai-dat-cong-cu-postman-de-kiem-thu-api
- Postman Quick Start: https://learning.postman.com/docs/getting-started/first-steps/creating-the-first-collection/

## Thực hành
Dùng API demo:
```text
https://jsonplaceholder.typicode.com/posts/1
```

### GET
1. Mở Postman.
2. Chọn GET.
3. Nhập URL trên.
4. Send.
5. Quan sát Status = 200 và JSON body.

### POST
URL:
```text
https://jsonplaceholder.typicode.com/posts
```

Body -> raw -> JSON:
```json
{
  "title": "bank transfer",
  "body": "first API test",
  "userId": 1
}
```

Expected: status 201.

## Bài tập
- Tạo collection `Automation Learning`.
- Lưu GET và POST vào collection.
- Đổi `userId`, `title` rồi chạy lại.
- Ghi lại status code và body.

## Lỗi thường gặp
- Quên chọn Body = raw/JSON.
- URL sai.
- Nhầm GET/POST.
- Body JSON thiếu dấu phẩy hoặc dấu ngoặc kép.

## Prompt AI
> Tôi vừa gửi request Postman và nhận response sau. Hãy giải thích từng phần như cho Manual Tester mới học API. Không viết script test.

## Interview
1. Postman dùng để làm gì?
2. Collection là gì?
3. Response gồm những phần nào?

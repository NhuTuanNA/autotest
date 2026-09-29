# Buổi 02 — API, HTTP, Request và Response

## Mục tiêu
- Hiểu API ở mức đủ dùng cho tester.
- Biết GET/POST/PUT/PATCH/DELETE.
- Biết request/response và nhóm status code.

## Học ở đâu
- Anh Tester Bài 1: https://anhtester.com/blog/api-testing-with-postman/api-postman-bai-1-api-la-gi-tai-sao-can-kiem-thu-api
- Video: https://www.youtube.com/watch?v=Nzeo6NJwoNk
- Bài 2: https://anhtester.com/public/blog/api-postman-bai-2-cac-phuong-thuc-request-trong-rest-api-va-cac-trang-thai-cua-response

## Mô hình
```text
Web/Mobile -> HTTP Request -> API Server
Web/Mobile <- HTTP Response <- API Server
```

## Ví dụ
```http
POST /transfers
Content-Type: application/json
```

```json
{
  "fromAccount": "001",
  "toAccount": "002",
  "amount": 1000000
}
```

Response:
```json
{
  "status": "SUCCESS",
  "transactionId": "TX123"
}
```

## Cần nhớ
- GET: đọc dữ liệu
- POST: tạo/gửi dữ liệu
- PUT/PATCH: cập nhật
- DELETE: xóa

Status thường gặp:
- 200 OK
- 201 Created
- 400 Bad Request
- 401 Unauthorized
- 403 Forbidden
- 404 Not Found
- 500 Internal Server Error

## Bài tập
Với chức năng “chuyển tiền”, tự viết:
- method
- URL giả định
- request body
- expected status
- expected response

Làm cho 3 case: thành công, số tiền âm, tài khoản đích không tồn tại.

## Prompt AI
> Giải thích Request, Response, Header, Body, GET, POST và status code bằng ví dụ chuyển tiền ngân hàng. Sau đó hỏi tôi 5 câu trắc nghiệm, mỗi lần một câu.

## Interview
1. API là gì?
2. GET khác POST thế nào?
3. 401 khác 403 thế nào?
4. Vì sao API test thường nhanh hơn UI test?

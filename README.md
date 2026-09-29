# Automation Testing Learning Path

Giáo trình nhập môn Automation Testing dành cho **Manual Tester đã có kinh nghiệm nghiệp vụ nhưng chưa có nền tảng lập trình**.

Mục tiêu là học theo kiểu:

```text
Bắt chước -> Chạy được -> Hiểu -> Tự làm -> AI review
```

Thay vì học lập trình nhiều tuần rồi mới bắt đầu automation.

---

## Bắt đầu từ đâu?

Nếu học trên **Windows**, làm theo đúng thứ tự:

1. **[Setup Windows](setup/windows.md)** — cài VS Code, Node.js, Postman, Playwright. Nếu lỗi, xem **[Troubleshooting Windows](setup/troubleshooting-windows.md)**.
2. **[Buổi 00 — Cách học & dùng AI](course/00-learning-method.md)**.
3. Học lần lượt Buổi 01 -> 14.
4. Khi bài học yêu cầu thực hành, dùng code có sẵn trong **[exercises/](exercises/)**.
5. Chỉ mở `solutions/` sau khi đã thử `starter/`.

### Kiểm tra môi trường nhanh trên Windows

Từ thư mục repo:

```powershell
powershell -ExecutionPolicy Bypass -File .\setup\check-environment.ps1
```

JavaScript:

```powershell
node .\exercises\javascript\session-06\hello.js
```

Playwright:

```powershell
cd .\exercises\playwright
npm install
npx playwright install chromium
npm test
```

> `npm test` chỉ chạy bộ solution đã hoàn chỉnh để kiểm tra môi trường. Các bài starter/debug được chạy riêng trong từng buổi.

---

## Mục tiêu vòng 1 — 14 buổi

Sau 14 buổi, người học có thể:

- Giải thích Automation Testing là gì và khi nào nên automate.
- Hiểu API, HTTP, Request, Response, JSON và status code cơ bản.
- Sử dụng Postman để gửi request và viết assertion đơn giản.
- Đọc/viết JavaScript tối thiểu phục vụ automation.
- Cài và chạy Playwright.
- Viết UI test cơ bản bằng locator + action + assertion.
- Đọc lỗi và debug test đơn giản.
- Biết dùng AI như gia sư, người gợi ý và reviewer.
- Trả lời được nhóm câu hỏi phỏng vấn Automation Junior cơ bản.

**Thời lượng:** khoảng 60–90 phút/buổi.

---

## Lộ trình

| Buổi | Chủ đề | Thực hành chính |
|---|---|---|
| 00 | Cách học & dùng AI | Prompt AI đúng cách |
| 01 | Automation mindset | Phân loại testcase |
| 02 | API & HTTP | Mô hình request/response |
| 03 | Postman | Import collection + gửi request |
| 04 | API test design | Positive/negative/boundary |
| 05 | API assertion | Tạo PASS/FAIL |
| 06 | JavaScript I | `session-06/` |
| 07 | JavaScript II | `session-07/` |
| 08 | Playwright | Setup và chạy test |
| 09 | Anatomy of UI test | Add Todo |
| 10 | Locator | getByRole/getByText/... |
| 11 | Codegen | Record -> đọc -> chỉnh |
| 12 | Assertion & Debug | `04-debug-me.spec.ts` |
| 13 | Guided mini project | 3 UI tests |
| 14 | Final challenge | API + JS + UI + interview |

Bắt đầu tại **[course/00-learning-method.md](course/00-learning-method.md)**.

---

## Cấu trúc repo

```text
autotest/
├── README.md
├── setup/
│   ├── windows.md
│   ├── troubleshooting-windows.md
│   └── check-environment.ps1
├── course/
│   ├── 00-learning-method.md
│   ├── ...
│   └── 15-next-steps.md
├── exercises/
│   ├── javascript/
│   │   ├── session-06/
│   │   └── session-07/
│   ├── postman/
│   │   └── Automation-Learning.postman_collection.json
│   └── playwright/
│       ├── package.json
│       ├── playwright.config.ts
│       └── tests/
│           ├── starter/
│           └── solutions/
└── interview/
    └── README.md
```

---

## Cách dùng bài tập

### Postman

Import:

```text
exercises/postman/Automation-Learning.postman_collection.json
```

Có sẵn GET/POST và assertion mẫu.

### JavaScript

Ví dụ:

```powershell
node .\exercises\javascript\session-06\01-condition.js
node .\exercises\javascript\session-06\02-function-starter.js
```

Sau khi tự làm mới xem:

```text
02-function-solution.js
```

### Playwright

Cài một lần:

```powershell
cd .\exercises\playwright
npm install
npx playwright install chromium
```

Chạy bộ solution để kiểm tra:

```powershell
npm test
```

Chạy một bài starter:

```powershell
npx playwright test tests\starter\01-add-todo.spec.ts --headed
```

Chạy bài debug cố tình FAIL:

```powershell
npx playwright test tests\starter\04-debug-me.spec.ts --headed
```

---

## Nguyên tắc học

- Không học JavaScript dài ngày trước khi automation.
- Mỗi kiến thức code phải gắn với một bài test cụ thể.
- Mỗi buổi có: mục tiêu -> tài liệu -> ví dụ -> bài tập -> prompt AI -> interview -> checklist.
- Luôn cố tình tạo ít nhất một test **FAIL** để học đọc lỗi.
- AI được dùng ngay từ đầu, nhưng ưu tiên **giải thích / gợi ý / review**, không copy mù quáng.
- Vòng đầu chưa cần Git/GitHub Actions/Jenkins/Docker/Selenium/Java.
- CI/CD chỉ cần hiểu khái niệm ở mức phỏng vấn.

---

## Nguồn học chính

- Anh Tester / WeTest — API Testing with Postman: https://anhtester.com/blog/category/api-testing-with-postman
- F8 — JavaScript cơ bản: https://f8.edu.vn/courses/javascript-co-ban
- Playwright Việt Nam: https://playwrightvn.com/
- Playwright Official Docs: https://playwright.dev/docs/intro
- Postman Docs: https://learning.postman.com/

---

## Sau vòng 1

Tiếp tục tại **[course/15-next-steps.md](course/15-next-steps.md)** để chuyển sang 2–4 tuần đào sâu và làm Banking Automation mini project.

Bộ câu hỏi phỏng vấn: **[interview/README.md](interview/README.md)**.

# Buổi 11 — Codegen: bắt chước có kiểm soát

## Mục tiêu
- Record thao tác để tạo code.
- Không copy mù quáng.
- Biết đọc và chỉnh generated code.

## Học ở đâu
- https://playwright.dev/docs/codegen
- https://playwrightvn.wordpress.com/2024/04/17/voc-playwright-code-gen/

## Chạy Codegen
```bash
npx playwright codegen https://demo.playwright.dev/todomvc/
```

Thao tác:
1. Nhập một todo.
2. Enter.
3. Click checkbox.
4. Quan sát code được generate.

## Bài tập
- Copy code vào file test.
- Chạy lại.
- Đổi text todo.
- Xóa các dòng thừa nếu có.
- Thêm assertion riêng của bạn.

## Quy tắc
Buổi này được phép **copy 100%**, nhưng phải giải thích được ít nhất:
- URL mở ở đâu
- locator nào đang dùng
- action nào đang xảy ra
- assertion nào đang verify

## AI
> Đây là code do Playwright Codegen tạo. Hãy đánh dấu từng dòng là Setup / Locator / Action / Assertion. Chưa refactor.

## Interview
1. Codegen có thay thế việc học automation không?
2. Vì sao generated code vẫn cần review?

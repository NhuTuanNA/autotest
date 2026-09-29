# Buổi 12 — Assertion và Debug

## Mục tiêu
- Hiểu Expected vs Actual.
- Cố tình tạo test fail.
- Biết dùng UI mode/Inspector để đọc lỗi.

## Học ở đâu
- https://playwrightvn.com/blog/voc-playwright-chay-va-debug-tests/
- https://playwright.dev/docs/test-assertions
- https://playwright.dev/docs/debug

## Ví dụ PASS
```typescript
await expect(page.getByText('Transfer money')).toBeVisible();
```

## Ví dụ FAIL
Sau khi tạo todo “Transfer money”, đổi expected:
```typescript
await expect(page.getByText('ABCXYZ')).toBeVisible();
```

Chạy:
```bash
npx playwright test --ui
```

Hoặc:
```bash
npx playwright test --debug
```

## Khi test fail, hỏi 4 câu
1. Expected là gì?
2. Actual là gì?
3. Fail ở step nào?
4. Locator sai, data sai hay application sai?

## Bài tập
Tạo 3 lỗi:
- expected text sai
- locator sai
- URL sai

Ghi lại error message khác nhau thế nào.

## AI
> Đây là error Playwright của tôi. Đừng viết code sửa ngay. Hãy phân loại lỗi thuộc locator, test data, assertion hay environment và giải thích bằng Expected/Actual.

## Interview
1. Flaky test là gì?
2. Debug automation test theo thứ tự nào?
3. Assertion khác action thế nào?

# Buổi 09 — Cấu trúc một UI Automation Test

## Mục tiêu
- Đọc được một test đơn giản.
- Liên hệ từng dòng code với manual test step.

## Học ở đâu
- https://playwrightvn.com/blog/voc-playwright-viet-test/
- https://playwright.dev/docs/writing-tests

## Ví dụ
```typescript
import { test, expect } from '@playwright/test';

test('add todo', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');

  const input = page.getByPlaceholder('What needs to be done?');
  await input.fill('Transfer money');
  await input.press('Enter');

  await expect(page.getByText('Transfer money')).toBeVisible();
});
```

## Dịch sang manual steps
1. Mở Todo page.
2. Tìm ô nhập.
3. Nhập “Transfer money”.
4. Nhấn Enter.
5. Verify item xuất hiện.

## Cách chạy
Lưu file vào `tests/todo.spec.ts`, sau đó:
```bash
npx playwright test tests/todo.spec.ts --headed
```

## Bài tập
Đổi text thành:
- Check balance
- Pay electricity bill

Sau đó thêm 2 test riêng.

## AI
> Hãy giải thích code Playwright này từng dòng bằng manual test step. Giải thích async/await ở mức trực quan, không đi sâu JavaScript internals.

## Interview
1. test() dùng để làm gì?
2. page là gì?
3. expect dùng để làm gì?
4. Action và assertion khác nhau thế nào?

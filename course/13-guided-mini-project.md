# Buổi 13 — Guided Mini Project

## Mục tiêu
- Ghép locator + action + assertion.
- Viết 3 test hoàn chỉnh.
- AI được hỗ trợ nhưng phải giải thích code.

## Website
https://demo.playwright.dev/todomvc/

## TC01 — Add todo
**Given** Todo page mở  
**When** nhập “Pay electricity bill” và Enter  
**Then** item xuất hiện.

## TC02 — Complete todo
**Given** todo “Transfer money” tồn tại  
**When** click checkbox  
**Then** todo ở trạng thái completed.

## TC03 — Multiple todos
Thêm:
- Pay electricity
- Transfer money
- Check balance

Expected: cả 3 item xuất hiện.

## Skeleton
```typescript
import { test, expect } from '@playwright/test';

test('TC01 - add todo', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');

  // TODO: locate input
  // TODO: fill
  // TODO: press Enter
  // TODO: assert item visible
});
```

## Cách dùng AI hôm nay
Được phép:
> Hãy giúp tôi viết Playwright TypeScript cho testcase này. Dùng locator đơn giản. Sau code hãy giải thích từng phần.

Sau khi chạy được:
> Hãy xóa 30% code quan trọng và biến thành bài fill-in-the-blank để tôi làm lại.

## Bài nâng cao
Tự thêm TC04:
- tạo 2 todo
- complete 1
- verify còn 1 active item

## Checklist
- [ ] 3 test chạy PASS.
- [ ] Mỗi test từng được cố tình làm FAIL.
- [ ] Giải thích được locator/action/assertion.

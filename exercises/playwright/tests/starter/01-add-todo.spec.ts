import { test, expect } from '@playwright/test';

test('TC01 - add todo', async ({ page }) => {
  await page.goto('/');

  // TODO 1: tìm input bằng getByPlaceholder
  // TODO 2: nhập "Transfer money"
  // TODO 3: nhấn Enter
  // TODO 4: assert text "Transfer money" hiển thị

  await expect(page).toHaveTitle(/TodoMVC/);
});

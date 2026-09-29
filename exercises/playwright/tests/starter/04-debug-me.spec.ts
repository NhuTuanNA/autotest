import { test, expect } from '@playwright/test';

test('Debug me', async ({ page }) => {
  await page.goto('/');

  const input = page.getByPlaceholder('What needs to be done?');
  await input.fill('Transfer money');
  await input.press('Enter');

  // Cố tình sai.
  // Hãy chạy test, đọc Expected / Actual rồi tự sửa.
  await expect(page.getByText('ABCXYZ')).toBeVisible();
});

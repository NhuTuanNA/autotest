import { test, expect } from '@playwright/test';

test('Debug me - fixed', async ({ page }) => {
  await page.goto('/');

  const input = page.getByPlaceholder('What needs to be done?');
  await input.fill('Transfer money');
  await input.press('Enter');

  await expect(page.getByText('Transfer money')).toBeVisible();
});

import { test, expect } from '@playwright/test';

test('TC03 - complete todo', async ({ page }) => {
  await page.goto('/');

  const input = page.getByPlaceholder('What needs to be done?');
  await input.fill('Transfer money');
  await input.press('Enter');

  // TODO:
  // tìm todo item "Transfer money"
  // click checkbox trong item
  // verify item có class completed
});

import { test, expect } from '@playwright/test';

test('TC03 - complete todo', async ({ page }) => {
  await page.goto('/');

  const input = page.getByPlaceholder('What needs to be done?');
  await input.fill('Transfer money');
  await input.press('Enter');

  const item = page.getByRole('listitem').filter({ hasText: 'Transfer money' });
  await item.getByRole('checkbox').check();

  await expect(item).toHaveClass(/completed/);
});

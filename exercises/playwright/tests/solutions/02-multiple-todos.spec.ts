import { test, expect } from '@playwright/test';

test('TC02 - add multiple todos', async ({ page }) => {
  await page.goto('/');

  const todos = [
    'Pay electricity',
    'Transfer money',
    'Check balance'
  ];

  const input = page.getByPlaceholder('What needs to be done?');

  for (const todo of todos) {
    await input.fill(todo);
    await input.press('Enter');
    await expect(page.getByText(todo)).toBeVisible();
  }
});

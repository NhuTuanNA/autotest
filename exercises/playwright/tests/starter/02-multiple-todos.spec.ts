import { test, expect } from '@playwright/test';

test('TC02 - add multiple todos', async ({ page }) => {
  await page.goto('/');

  const todos = [
    'Pay electricity',
    'Transfer money',
    'Check balance'
  ];

  // TODO:
  // loop qua todos
  // add từng todo
  // verify từng todo xuất hiện

  expect(todos.length).toBe(3);
});

import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Salo's Portfolio/);
});

test('get started link', async ({ page }) => {
  await page.goto('/');

  // Click the get started link.
  await page.getByRole('link', { name: 'GitHub link' }).click();

  // Expects page to have a heading with the name of Playwright.
  await expect(page.getByRole('link', { name: 'GitHub link' })).toHaveAttribute('href', 'https://github.com/salko-ua/');
});
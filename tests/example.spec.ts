import { test, expect } from '@playwright/test';

test('Google Search', async ({ page }) => {
  await page.goto('https://www.google.com'); // Ir a Google
  await expect(page).toHaveTitle(/Google/); // Verificar que el título sea correcto
});

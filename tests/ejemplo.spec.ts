import { test, expect } from '@playwright/test';

test('Nombre del Testcase', async ({ page }) => {
  await page.goto('https://usuario.claro.com.do/login');
  //await expect()
  await expect(page).toHaveURL('https://usuario.claro.com.do/login');
  await page.locator('#username').fill('prueba4');
  await page.locator('#password').fill(process.env.USER_PASSWORD);
  await page.getByRole('button', { name: 'Acceder' }).click();
});

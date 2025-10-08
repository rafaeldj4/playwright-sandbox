import { test, expect } from "@playwright/test";
import {LoginPage} from "@pages/LoginPage";

const ssoProd = process.env.SSO_QA!;
const username = process.env.USER_NAME_QA!;
const password = process.env.USER_PASSWORD!;
const newPassword = process.env.USER_NEW_PASSWORD!;


test("navegar al portal de Claro", async ({ page }) => {
  //Login Page
  const loginPage = new LoginPage(page)
  loginPage.usernameInput.fill(username);
  await page.goto(ssoProd);
  await expect(page).toHaveTitle("Portal Único Claro");
  await page.locator("#username").fill(username);
  await page.locator("#password").fill(password);
  await page.getByRole("button", { name: "Acceder" }).click();

  //Portal de Aplicaciones
  await page.locator(".user-settings-username").hover();
  await page.getByRole("link", { name: "Perfil" }).click();

  //Perfil
  await page.locator("#edit-password-profile").click();

  //Editar Password
  await page.locator("#actualPassword").fill(password);
  await page.locator("input[ng-reflect-name='password']").fill(newPassword);
  await page.locator("input[ng-reflect-name='confirmPassword']").fill(newPassword);
  await page.getByRole("button", { name: "Guardar cambios" }).click();

  //Perfil
  //await expect(page.locator(".butter-bar-callout")).toBeVisible();
  await page.locator(".user-settings-username").hover();
  await page.getByRole("link", { name: "Cerrar sesión" }).click();

  //Login - Validar cambio de contraseña
  await page.locator("#username").fill(username);
  await page.locator("#password").fill(newPassword);
  await page.locator(".password-visibility-toggle").last().click();
  await expect(page.locator("#password")).toHaveValue(newPassword);
  await page.getByRole("button", { name: "Acceder" }).click();

  //Cierre de sesion
  await page.locator(".user-settings-username").hover();
  await page.getByRole("link", { name: "Cerrar sesión" }).click();

});

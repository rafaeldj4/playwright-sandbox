import {test, expect} from "@pages/TestBase";

test("Login", async({loginPage})=>{

    await loginPage.goto();
    await loginPage.login("prueba4","12345678");
    await expect(1).toBe(1);


})
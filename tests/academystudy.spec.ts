import {test, expect} from "@playwright/test";
import {AcademystudyLoginPage} from "@pages/academystudyLoginPage";


const username: string = "test1234";
const password: string = "12345678";


test("Login", async({page})=>{
    const academystudyLoginPage = new AcademystudyLoginPage(page);
    await academystudyLoginPage.goto()
    await academystudyLoginPage.login(username,password);


})
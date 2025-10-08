import {Locator, Page} from "@playwright/test";

export class AcademystudyLoginPage {

    get emailInput(): Locator{
        return this.page.locator("#userEmail");
    }

    get passwordInput(): Locator{
        return this.page.locator("#userPassword");
    }

    get loginBtn(): Locator{
        return this.page.locator("#login");
    }

    constructor(readonly page: Page){}

    async goto(){
        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    }

    async login(username: string,password: string){
        await this.emailInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginBtn.click();
    }


}
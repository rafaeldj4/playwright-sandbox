import {Page, Locator} from "@playwright/test";

export class LoginPage {

    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly accederBtn: Locator;

    get email(): Locator {
        return this.page.locator("#email");
    }

    constructor(page:Page){
        this.page = page;
        this.usernameInput = page.locator("#username");
        this.passwordInput = page.locator("#password");
        this.accederBtn = page.getByRole("button",{name: "Acceder"});
    }

    async goto(){
        await this.page.goto("/");
    }

    async login(username: string, password: string){

        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.accederBtn.click();

    }


}
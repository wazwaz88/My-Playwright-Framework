import { BasePage } from './BasePage'

export class LoginPage extends BasePage{
    constructor(page){
        super(page)
        this.usernameInput = page.locator('#username')
        this.passwordInput = page.locator('#password')
        this.loginButton = page.locator('#login_btn')
        this.loginMessage = page.locator('#success_lgn')
        this.errorMessage = page.locator('#error_message')
    }

    async clickLoginButton() {
        await this.loginButton.click()
    }

    async userLogin(username, password){
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.clickLoginButton()
    }
}
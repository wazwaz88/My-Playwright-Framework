export class BasePage{

    constructor(page){
        this.page = page
        this.logo = page.locator('#logo')
        this.navigationDropdown = page.locator('#dropdown-menu')
        this.mainHeading = page.locator('#main_heading')
    }

    async selectDropdownOption(option) {
        await this.navigationDropdown.locator(`a:has-text("${option}")`).click()
    }
    
}
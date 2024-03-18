import test from '@playwright/test'
import { clickButton, clickLink } from '../../helpers/clickHelpers'

test.describe('User Actions', () => {


    test.beforeEach(async ({ page }) => {
        await page.goto('https://techglobal-training.com/frontend')
    
        await clickLink(page, 'Html Elements')
    })

    test('User Actions - Click and Hover', async ({ page }) => {
        const dropdownButton = page.locator('#dropdown-button')

        await dropdownButton.hover()

        await clickButton(page, 'Register')
    })

    test('User Actions - Type', async ({ page }) => {
        const textinput1 = page.locator('#text_input1')

        await textinput1.fill('Cypress') //fill clears the input box before typing
        await textinput1.fill('Playwright') 
    })

    test('User Actions - Checkbox and Radio Buttons', async ({ page }) => {
        const apple = page.getByRole('checkbox', { name: 'Apple' })
        const microsoft = page.getByRole('checkbox', { name: 'Microsoft' })
        const tesla = page.getByRole('checkbox', { name: 'Tesla' })

        await apple.check()
        await apple.uncheck()

        const checkBoxGroup = await page.locator('#checkbox-button-group input')
        const checkBoxGroupCount = checkBoxGroup.count()
        
        for(let i = 0; i < checkBoxGroupCount; i++){
            await checkBoxGroup.nth(i).check()
            await checkBoxGroup.nth(i).uncheck()
        }

        const checkBoxGroup2 = await page.locator('#checkbox-button-group input').all()

        for(const checkBox of checkBoxGroup2){
            await checkBox.check()
            await checkBox.uncheck()
        }
        
    })

    test('User Actions - Dropdowns', async ({ page }) => {
        const companyDropdown = page.locator('#company_dropdown1')

        await companyDropdown.selectOption({index: 1})
        await companyDropdown.selectOption({label: 'Apple'})
        await companyDropdown.selectOption({value: 'Tesla'})
    })

    test('User Actions - Calendar/Date Picker', async ({ page }) => {
        const date1 = page.locator('#date_input1')
        const date2 = page.locator('#date_input2')

        await date1.fill('01/01/2000')
        await page.keyboard.press('Enter')

        await date2.fill('01/01/2025')
        await page.keyboard.press('Enter')

    })


})
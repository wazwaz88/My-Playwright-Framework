import {test, expect} from '@playwright/test'
import { clickLink } from '../../helpers/clickHelpers'

test.describe('Assertions', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://techglobal-training.com/frontend')
    
        await clickLink(page, 'Html Elements')
    })
    

    test('Auto-retry, web-first async locator assertions', async ({ page }) => {
        const mainHeading = page.locator('#main_heading')

        await expect(mainHeading).toBeVisible()
        await expect(mainHeading).toBeAttached()
        await expect(mainHeading).toHaveText('Html Elements')
        await expect(mainHeading).toContainText('Html')
        await expect(mainHeading).toHaveAttribute('id', 'main_heading')
        await expect(mainHeading).toHaveCount(1)

        const checkbox1= page.locator('#checkbox_1')
        await expect(checkbox1).toBeEnabled()
        
        await expect(checkbox1).not.toBeChecked()

        await checkbox1.check()
        await expect(checkbox1).toBeChecked()

        const textInput = page.locator('#text_input1')
        await expect(textInput).toBeEmpty()
        await expect(textInput).toHaveAttribute('placeholder', 'Enter text here')

        await textInput.fill('TechGlobal')
        await expect(textInput).toHaveValue('TechGlobal')

        // await expect(mainHeading).toHaveCSS('color', 'rgb(105, 105, 105')

        const orderedList = page.locator('#ordered_list > li')
        const arr = ['Cypress', 'Playwright', 'Selenium Webdriver']

        await expect(orderedList).toHaveText(arr)

        
    })

    test('Non-retry Assertions', async ({ page }) => {
        const num = 1

        expect(num).toBe(1)
        expect(num).toBeLessThan(2)
        expect(num).toBeLessThanOrEqual(1)
        expect(num).toBeGreaterThan(0)
        expect(num).toEqual(1)
    })

    test('Creating custom assertion', async ({ page }) => {
        await page.goto('https://techglobal-training.com/frontend')
    
        await clickLink(page, 'Infinite Scroll')

        const articles = page.locator('.infinite-scroll-component > div')
        const articlesCount = await articles.count()

        console.log(articlesCount + ' is the count of the articles')

        await articles.last().scrollIntoViewIfNeeded()

        await expect(async () => {
            const newCount = await articles.count()
            console.log('Trying here' + newCount)    
            expect(newCount).toBeGreaterThan(articlesCount)
        }).toPass({
            timeout: 3000
        })
    })

    test('Soft Assertions', async ({ page }) => {
        const mainHeading = page.locator('#main_heading')

        //flaky assertion here - means sometime fails. sometimes passsed. - inconsistent
        test.fail()
        await expect.soft(mainHeading).toHaveText('Random Text')

        const checkBoxGroup2 = await page.locator
        ('#checkbox-button-group input').all()

        for(const checkBox of checkBoxGroup2){
            await checkBox.check()
            console.log('Checked')
            await expect(checkBox).toBeChecked()
        }
    })
})
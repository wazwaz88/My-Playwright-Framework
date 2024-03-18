import test from '@playwright/test'
import { link } from 'fs'

test.describe('Playwright locators', () => {

    test('Playwright Locator API', async ({ page }) => {

        await page.goto('https://techglobal-training.com')

        const myLogo = page.locator('#logo')

        await myLogo.click()
    })

    test('Playwright - Custom Pseudo Classes', async ({ page }) => {

        await page.goto('https://techglobal-training.com/frontend')

        // await page.locator('a', {hasText: 'Html Elements'}).click()

        await page.locator('a:has-text("Html Elements")').click()

        await page.locator('button', {hasText: 'Register'}).highlight()
        await page.locator('button', {hasText: 'Sign in'}).highlight()

        await page.locator('button:has-text("Sign in"):visible').highlight()

        await page.locator('#checkbox-button-group:has(#apple_check)').highlight()

        await page.pause()
    })

    test('Playwright - chaining locators', async ({ page }) => {

        await page.goto('https://techglobal-training.com/frontend')
    
        await page.locator('a:has-text("Html Elements")').click()
    
        const unorderedList = page.locator('#unordered_list')
    
        const getText = await unorderedList.locator('li:has-text("JavaScript")').textContent()
    
        console.log(getText + ' name of element')
    })
    
    test('Playwright - handling multiple elements', async ({ page }) => {
    
        await page.goto('https://techglobal-training.com/frontend')
    
        await page.locator('a:has-text("Html Elements")').click()
    
        const unorderedList = page.locator('#unordered_list > li')
    
        await unorderedList.first().highlight()
        await unorderedList.last().highlight()
        await unorderedList.nth(1).highlight()
    
        const checkBoxGroup = page.locator('#checkbox-button-group input')
        const checkBoxCount = await checkBoxGroup.count()
    
        for(let i = 0; i < checkBoxCount; i++){
            await checkBoxGroup.nth(i).click()
        }

        const checkBoxGroup2 = page.locator('#checkbox-button-group input').all()

        for(const checkBox of await checkBoxGroup2){
            await checkBox.click()
        }
    
    })

    test('Playwright built in locators', async ({ page }) => {

        await page.goto('https://techglobal-training.com/frontend')
    
        await page.getByRole('link', {name: 'Html Elements'}).click()

        await page.getByRole('heading', {name: 'Unordered List'}).highlight()

        await page.getByPlaceholder('Enter text here').highlight()

        await page.getByText('Checkboxes').highlight()

    })

    test('Playwrgiht - filter() locator API', async ({ page }) => {

        await page.goto('https://techglobal-training.com/frontend')
    
        await page.getByRole('link', {name: 'Html Elements'}).click()

        const testingParagraphs = page.locator('p').filter({hasText: 'testing'})

        const text = await testingParagraphs.textContent()

        console.log(`Text of the first paragrapsh: ${text}`)

        const nonLanguageheadings = page.locator('label').filter({hasNotText: 'Java'})

        const count = await nonLanguageheadings.count()

        console.log(`Numbers of elements that does not have Java: ${count}`)

        const textOfDiv = page.locator('div').filter({has: page.locator('h3:has-text("Headings")')})

        const headingItems = await textOfDiv.locator('h4').all()

        for(const heading of headingItems){
            console.log(await heading.textContent())
        }        

    })
})
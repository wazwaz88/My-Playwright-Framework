import {test, expect} from '@playwright/test'

test.describe('First test suite', () => {

    test('Refresh, navigate back and forward', async ({ page }) => {

        await page.goto('https://techglobal-training.com')

        await page.reload()

        await page.goto('https://techglobal-training.com/frontend')

        await page.goBack()

        await page.goForward()


    })

    test('Validate page Title', async ({ page }) => {

        await page.goto('https://techglobal-training.com')

        const title = await page.title()

        // 1st way to assert Title
        expect(title).toBe('TechGlobal Training | Home')

        await expect(page).toHaveTitle('TechGlobal Training | Home', {timeout: 20000})

    })

    test('Validate page URL', async ({ page }) => {

        await page.goto('https://techglobal-training.com')

        const url = page.url()

        // expect(url).toBe('https://techglobal-training.com')

        await expect(page).toHaveURL('https://techglobal-training.com', {timeout: 20000})

    })


    test('My First Test', async ({ page }) => {

        await page.goto('https://techglobal-training.com')

        const logo = page.locator('#logo')

        await logo.click()

        await expect(logo).not.toBeVisible()

    })

})
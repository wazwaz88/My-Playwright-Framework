import { test, chromium } from '@playwright/test'

test('Playwright 101 - Test Case 1', () => {
    console.log('techglobal')
})

test('Playwright 101 - Test Case 2',  ({ page }) => {
    console.log('techglobal')
})

test('Playwright 101 - Test Case 3',  async ({ page }) => {
    await page.goto('https://techglobal-training.com')
})

test('Playwright 101 - Test Case | Browser Context',  
async ({ browser }) => {

    const context = await browser.newContext()

    const page = await context.newPage()

    await page.goto('https://techglobal-training.com')

    await context.close()

})

test('Playwright 101 - Manual trigger',  async () => {

    const browser = await chromium.launch()

    const context = await browser.newContext()

    const page = await context.newPage()

    await page.goto('https://techglobal-training.com')

    await context.close()

})
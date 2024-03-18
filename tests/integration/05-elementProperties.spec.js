import test from '@playwright/test'
import { clickLink } from '../../helpers/clickHelpers'

test.describe('Element Properties', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://techglobal-training.com/frontend')
    
        await clickLink(page, 'Html Elements')
    })

    test('Getting Element Properties', async ({ page }) => {

        const headings = page.locator('[data-identifier="Headings"]')

        const allInnerText = await headings.allInnerTexts()

        const innerText = await headings.innerText()

        const innerHtml = await headings.innerHTML()

        console.log(allInnerText)
        console.log(innerText)
        console.log(innerHtml)

        const textContent = await headings.textContent()

        console.log(textContent)

        const innerElements = headings.locator('h4')
        console.log(await innerElements.count() + ' count of web elements')

        const attr = await headings.getAttribute('data-identifier')

        console.log(attr)


        const compandyDropdown = page.locator('#company_dropdown1')

        await compandyDropdown.selectOption({index: 1})

        console.log(await compandyDropdown.inputValue())
    })

    test('Executing JavaScript code in Playwright', async ({ page }) => {

        const result = await page.evaluate(() => {
            return document.title
        })

        console.log(result)

        const hreft = await page.evaluate(() => {
            return document.location.href
        })

        console.log(hreft)

        const element = page.locator('#main_heading')

        const backgroundColor = await element.evaluate((el) => {
            return window.getComputedStyle(el).getPropertyValue('backgroundColor')
        })

        console.log(backgroundColor)

        const x = 10
        const y = 20

        const getResult = await page.evaluate(
            ([a,b]) => {
                return a + b
            },
            [x, y]
        )

        console.log(getResult)

    })
})
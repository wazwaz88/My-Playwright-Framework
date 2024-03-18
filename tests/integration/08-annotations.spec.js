import test, { expect } from '@playwright/test'
import { clickLink } from '../../helpers/clickHelpers'

test.describe('Annotations', () => {


    test.beforeEach(async ({ page }) => {
        await page.goto('https://techglobal-training.com/frontend')
    
        await clickLink(page, 'Html Elements')
    })

    // test.fail passes if test fails. if test passes it fails
    // test('Annotations - fail', async ({ page }) => {
    //     test.fail()

    //     const heading = page.locator('#main_heading')

    //     await expect(heading).toHaveText('asdfasdf')
    // })

    test.fixme('Annotations - fixme', async ({ page }) => {
        const heading = page.locator('#main_heading')

        await expect(heading).toHaveText('Html Elements')
    })

    test('Annotation - slow', async ({ page }) => {
        test.slow() // triple the timeout for this test

        const heading = page.locator('#main_heading')

        await expect(heading).toHaveText('Html Elements')
    })



    test('Annotations - step @smoke', async ({ page }) => {
        const paragraphs = page.locator('[data-identifier="Paragraphs"] > p')
        const paragraphsArr = await paragraphs.all()

        await test.step('1. Validate text is visible', async () => {
            for(const para of paragraphsArr){
                await expect(para).toBeVisible()
            }
        })

        await test.step('2. Validate text is as expected', async () => {
                await expect(page.locator('[data-identifier="Paragraphs"] > p')).toHaveText(['Hello World!', 'I like automation testing!'])
        })
    })


})
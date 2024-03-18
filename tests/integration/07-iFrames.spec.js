import {test, expect} from '@playwright/test'
import { clickLink } from '../../helpers/clickHelpers'

test.describe('Assertions', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://techglobal-training.com/frontend')
    
        await clickLink(page, 'iFrames')
    })

    test('iFrames Test Case', async ({ page }) => {

        const frameLocator = page.frameLocator('#form_frame')
        const fNameInput = frameLocator.locator('#first_name')
        const lNameInput = frameLocator.locator('#last_name')
        const submitBtn = frameLocator.locator('#submit')
        const result = page.locator('#result')
        const name = 'John'
        const lastName = 'Doe'

        await fNameInput.fill(name)
        await lNameInput.fill(lastName)

        await submitBtn.click()

        await expect(result).toHaveText(`You entered: ${name} ${lastName}`)

    })
})
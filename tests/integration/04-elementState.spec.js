import test from '@playwright/test'
import { clickLink } from '../../helpers/clickHelpers'

test.describe('Element State', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://techglobal-training.com/frontend')
    
        await clickLink(page, 'Html Elements')
    })

    test('Getting Element State', async ({ page }) => {
        const registerButton = page.getByRole('button', {name: 'Register'})
        const signInButton = page.getByRole('button', {name: 'Sign in'})
        const buttonMessage = page.locator('.mt-1')

        const registerButtonState = await registerButton.isEnabled()
        console.log(registerButtonState)
        const isMessageVisible = await buttonMessage.isVisible()
        console.log(isMessageVisible)

        await page.pause()

        isMessageVisible ? await signInButton.click() : await registerButton.click()
        const isMessageVisible2 = await buttonMessage.isVisible()

        console.log(isMessageVisible2)
        await page.pause()

    })

    test('Getting Element State - Checkbox and Radio Button', async ({ page }) => {
        const apple = page.getByRole('checkbox', { name: 'Apple' })
        const microsoft = page.getByRole('checkbox', { name: 'Microsoft' })
        const tesla = page.locator('#checkbox_3')

        await apple.check()

        const isAppleChecked = await apple.isChecked()


        if(isAppleChecked){
            await microsoft.check()
            await tesla.check()
        }else {
            await apple.check()
        }

        await page.pause()

    })
})
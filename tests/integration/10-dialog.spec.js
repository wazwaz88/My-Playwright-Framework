import test, { chromium, expect } from '@playwright/test'
import { clickButton, clickLink } from '../../helpers/clickHelpers'

test.describe('Interacting Multiple Tabs', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://techglobal-training.com/frontend')
    
        await clickLink(page, 'Alerts')
    })

    test('Handling Dialogs', async ({ page }) => {
        // page.once only respond to one listener. if you need to separate handling, use one for each dialog
        page.on('dialog', async (dialog) => {
            // console.log(dialog.message())
            // console.log(dialog.type())
            if(dialog.type() === 'alert'){
                await dialog.accept()
            }else if(dialog.type() === 'confirm') {
                await dialog.dismiss()
            }else{
                await dialog.accept('My Message')
            }
            console.log(dialog.message())
        })


        await clickButton(page, 'Warning Alert')
        await clickButton(page, 'Confirmation Alert')
        await clickButton(page, 'Prompt Alert')
    })


})
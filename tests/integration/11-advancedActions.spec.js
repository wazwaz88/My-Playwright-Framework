import test, {  expect } from '@playwright/test'
import {  clickLink } from '../../helpers/clickHelpers'

test.describe('Advanced User Actions', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://techglobal-training.com/frontend')
    
        await clickLink(page, 'Actions')
    })

    test('Mouse Actions', async ({ page }) => {

        await page.dblclick('#double-click')
        await page.click('#right-click', { button: 'right'})
        await page.dragAndDrop('#drag_element', '#drop_element')

        await page.pause()
        
    })

    test('Keyboard Actions', async ({ page }) => {

        const inputBox = page.locator('#input_box')

        await inputBox.press('Escape')

        await inputBox.focus()
        // await page.keyboard.press('Shift+KeyA+KeyB+KeyC')
        // await page.keyboard.press('ArrowLeft')
        // await page.keyboard.press('KeyA+KeyB+KeyC')
        // await page.keyboard.press('Backspace')

        await page.keyboard.type('Hello World!')
        await page.keyboard.press('ArrowLeft')

        await page.keyboard.down('Shift')
        for(let i = 0; i < 'World'.length; i++){
            await page.keyboard.press('ArrowLeft')
        }

        await page.keyboard.up('Shift')
        await page.keyboard.press('Backspace')

        await page.pause()

    })

    test('Test Case', async ({ page }) => {
        const inputBox = page.locator('#input_box')

        await inputBox.focus()

        await page.keyboard.press('Shift+KeyH')
        await page.keyboard.type('ello')

        await expect(inputBox).toHaveValue('Hello')
    })

    test('Test Case 2', async ({ page }) => {
        const inputBox = page.locator('#input_box')

        await inputBox.focus()

        await page.keyboard.down('Shift')
        await page.keyboard.press('KeyT+KeyE+KeyC+KeyH+KeyG+KeyL+KeyO+KeyB+KeyA+KeyL')
        await expect(inputBox).toHaveValue('TECHGLOBAL')
        await page.keyboard.up('Shift')

        await page.keyboard.down('Control')
        await page.keyboard.press('KeyA+KeyX')
        await page.keyboard.press('KeyV+KeyV')
        await expect(inputBox).toHaveValue('TECHGLOBALTECHGLOBAL')

        await page.pause()



    })


})
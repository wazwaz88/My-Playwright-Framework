import test, { chromium, expect } from '@playwright/test'
import { clickLink } from '../../helpers/clickHelpers'

test.describe('Interacting Multiple Tabs', () => {


    test.beforeEach(async ({ page }) => {
        await page.goto('https://techglobal-training.com/frontend')
    
        await clickLink(page, 'Multiple Windows')
    })

    test('Creating a new tab', async ({ page }) => {
    //  Use the existing 'page' to navigate to a URL in the new tab
    const newTab = await page.context().newPage()

    // Use the new tab to navigate to different URL
    await newTab.goto('https://www.apple.com/')

    await page.bringToFront()

    await newTab.bringToFront()

    await newTab.close()
    })

    test('Creating a new tab - 2nd way', async ({ page, context }) => {
        
    const newTab = await context.newPage()

    // Use the new tab to navigate to different URL
    await newTab.goto('https://www.apple.com/')

    await page.bringToFront()

    await newTab.bringToFront()

    await newTab.close()
        
    })

    test('Creating a new browser', async ({ page, context }) => {
        
        const newBroswer = await chromium.launch()

        const newContext = await newBroswer.newContext()

        const newPage = await newContext.newPage()

        await newPage.goto('https://www.apple.com/')

        await newBroswer.close()
       
    })

    test('Interacting/switching new tab', async ({ page }) => {

        await clickLink(page, 'Apple')

        const newTab = await page.waitForEvent('popup')

        await newTab.bringToFront()
        
        await page.pause()
    })

    test('Interacting/switching new tab - 2nd way', async ({ page }) => {

        // this is the suggest usage
        const [newTab] = await Promise.all([
            page.waitForEvent('popup'),
            clickLink(page, 'Apple')
        ])

        await newTab.bringToFront()

        await expect(newTab).toHaveTitle('Apple')

        const [newTab2] = await Promise.all([
            page.waitForEvent('popup'),
            clickLink(page, 'Microsoft')
        ])

        await newTab2.bringToFront()
        
    })

    test('Test case', async ({ page }) => {

        const links = ['Apple', 'Microsoft', 'Tesla']

        for(const link of links){
            const [newTab] = await Promise.all([
                page.waitForEvent('popup'),
                clickLink(page, link)
            ]) 

            expect(newTab.url()).toContain(link.toLowerCase())
            await newTab.close()
        }

    })
            

})
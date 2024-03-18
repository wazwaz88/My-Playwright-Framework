import test, { expect } from '@playwright/test'
import { clickLink } from '../../helpers/clickHelpers'
import fs from 'fs'

test.describe('Download & Upload', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/frontend')
    
        await clickLink(page, 'File Download & Upload')
    })

    test('Download a file', async ({ page }) => {
        const [download] = await Promise.all([page.waitForEvent('download'), page.click('#file_download')])
    
        const downloadPath = 'downloads/' + download.suggestedFilename()
    
        await download.saveAs(downloadPath)
    
        expect(fs.existsSync(downloadPath)).toBeTruthy()
      })

    test('Upload a file', async ({ page }) => {

        const uploadLink = page.locator('#file_upload')
        const uploadPath = 'downloads/SampleText.txt'

        await uploadLink.setInputFiles(uploadPath)
        await uploadLink.setInputFiles([uploadPath])

        await page.click('#file_submit')

        console.log(process.env.BASE_URL)
        console.log(process.env.USERNAM)


        
    })
})


/**
 * 
 * @param page - Page context
 * @param linkText - clicks the link by its visual text
 */

async function clickLink(page, linkText) {    
    await page.getByRole('link', { name: linkText }).click()
}

/**
 * 
 * @param page - Page context
 * @param buttonText - visual text of button
 */

async function clickButton(page, buttonText) {    
    await page.getByRole('button', { name: buttonText }).click()
}

export {clickLink, clickButton}
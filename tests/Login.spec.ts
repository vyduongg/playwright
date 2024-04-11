import {test} from '@playwright/test';

test('Login Test', async ({page}) => {
	// const browser: Browser = await chromium.launch();
	// const context = await browser.newContext();
	// const page: Page = await context.newPage(); 

	await page.goto("https://playwright.dev");
	const elem = await page.locator('teocodon');
	await elem.click();

	// DEBUG PURPOSE ONLY
	await page.waitForTimeout(1000);

	// await browser.close();

})
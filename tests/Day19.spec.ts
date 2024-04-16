import {test} from '@playwright/test';

test('Link Text - XPATH', async ({page}) => {
	await page.goto("https://the-internet.herokuapp.com/");
	// const footerLinkElem = await page.locator('//a[contains(text(), "Elemental")]');
	const footerLinkElem = await page.waitForSelector('//a[contains(text(), "Elemental_teo")]', {timeout: 10000});
	await footerLinkElem.click();

	// DEBUG PURPOSE ONLY
	await page.waitForTimeout(1000);
})

test('Link Text - CSS', async ({page}) => {
	await page.goto("https://the-internet.herokuapp.com/");
	const footerLinkElem = await page.locator('a:has-text("Elemental")');

	await footerLinkElem.click();

	// DEBUG PURPOSE ONLY
	await page.waitForTimeout(1000);
})

test('Link Text - Filtering', async ({page}) => {
	await page.goto("https://the-internet.herokuapp.com/");
	const footerLinkElem = await page.locator('a').filter({hasText: "Elemental"});

	await footerLinkElem.scrollIntoViewIfNeeded();
	// DEBUG PURPOSE ONLY
	await page.waitForTimeout(1000);

	await footerLinkElem.click();

	// DEBUG PURPOSE ONLY
	await page.waitForTimeout(1000);
})

test('Multiple matching', async ({page}) => {
	await page.goto("https://the-internet.herokuapp.com/");
	const footerLinkElems= await page.locator('a').elementHandles();

	await footerLinkElems[10].click();

	// DEBUG PURPOSE ONLY
	await page.waitForTimeout(1000);
})

test('Handle Login Form', async ({page}) => {
	await page.goto("https://the-internet.herokuapp.com/");

	// Navigating to the login form
	await page.locator('a').filter({hasText: "Form Authentication"}).click();
	await page.waitForLoadState("domcontentloaded");
	
	// Form interaction
	await page.locator('#username').fill("teo@sth.com");
	await page.locator('#password').fill("123456");
	// DEBUG PURPOSE ONLY
	await page.waitForTimeout(1000);
	await page.locator('button[type="submit"]').click();
	await page.waitForLoadState("domcontentloaded");
	
	// DEBUG PURPOSE ONLY
	await page.waitForTimeout(1000);
})

test.only('ELement attribute, page title, url...', async ({page}) => {
	await page.goto("https://the-internet.herokuapp.com/");

	// Navigating to the login form
	await page.locator('a').filter({hasText: "Form Authentication"}).click();
	await page.waitForLoadState("domcontentloaded");
	
	// Form interaction
	await page.locator('#username').fill("teo@sth.com");
	await page.locator('#password').fill("123456");
	// DEBUG PURPOSE ONLY
	await page.waitForTimeout(1000);
	await page.locator('button[type="submit"]').click();
	await page.waitForLoadState("domcontentloaded");

	// Get Text
	const textContent = await page.locator('h4').textContent();
	const innerText = await page.locator('h4').innerText();

	console.log(textContent);
	console.log(innerText);
	
	
	// DEBUG PURPOSE ONLY
	await page.waitForTimeout(1000);
})
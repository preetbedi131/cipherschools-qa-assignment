
// Playwright E2E test

const { test, expect } = require('@playwright/test');

test('Learner enrollment flow', async ({ page }) => {

await page.goto(process.env.BASE_URL);

await page.click('text=Sign in');

await page.fill('#email', process.env.EMAIL);
await page.fill('#password', process.env.PASSWORD);

await page.click('button[type="submit"]');

await page.fill('[data-test="search-input"]','hammer');

await page.press('[data-test="search-input"]','Enter');

await page.click('.card >> nth=0');

await page.click('text=Add to cart');

await expect(page.locator('.cart-count')).toHaveText('1');

});

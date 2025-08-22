import { test, expect } from '@playwright/test';

test('sauce demo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1//');
// await page.locator('[data-test="username"]').click();
await page.locator('[data-test="username"]').fill('standard_user');
// await page.locator('[data-test="password"]').click();
await page.locator('[data-test="password"]').fill('secret_sauce');
await page.getByRole('button', { name: 'LOGIN' }).click();
  
await page.getByRole('link', { name: 'Sauce Labs Backpack' }).click();
await page.getByRole('button', { name: 'ADD TO CART' }).click();
await page.getByRole('link', { name: '1' }).click();
await page.getByRole('button', { name: 'REMOVE' }).click();
await page.getByRole('link', { name: 'Continue Shopping' }).click();


await page.getByRole('combobox').selectOption('az');
await page.getByRole('combobox').selectOption('za');
await page.locator('div').filter({ hasText: /^\$49\.99ADD TO CART$/ }).getByRole('button').click();
await page.getByRole('link', { name: '1' }).click();
await page.getByRole('link', { name: 'Continue Shopping' }).click();
await page.getByRole('button', { name: 'REMOVE' }).click();
await page.getByRole('button', { name: 'Open Menu' }).click();
await page.getByRole('link', { name: 'Logout' }).click();
});


test('sauce demo 1', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1//');
// await page.locator('[data-test="username"]').click();
await page.locator('[data-test="username"]').fill('standard_user');
// await page.locator('[data-test="password"]').click();
await page.locator('[data-test="password"]').fill('secret_sauce');
await page.getByRole('button', { name: 'LOGIN' }).click();
  
await page.getByRole('link', { name: 'Sauce Labs Backpack' }).click();
await page.getByRole('button', { name: 'ADD TO CART' }).click();
await page.getByRole('link', { name: '1' }).click();
await page.getByRole('button', { name: 'REMOVE' }).click();
await page.getByRole('link', { name: 'Continue Shopping' }).click();


await page.getByRole('combobox').selectOption('az');
await page.getByRole('combobox').selectOption('za');
await page.locator('div').filter({ hasText: /^\$49\.99ADD TO CART$/ }).getByRole('button').click();
await page.getByRole('link', { name: '1' }).click();
await page.getByRole('link', { name: 'Continue Shopping' }).click();
await page.getByRole('button', { name: 'REMOVE' }).click();
await page.getByRole('button', { name: 'Open Menu' }).click();
await page.getByRole('link', { name: 'Logout' }).click();
});

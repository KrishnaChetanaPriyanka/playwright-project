import { test, expect } from '@playwright/test';

test.describe('product demo', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');
  });

  test('product demo home', async ({ page }) => {
    await page.getByRole('link', { name: 'Home (current)' }).click();
    await page.locator('#carouselExampleIndicators').getByRole('button', { name: 'Next' }).click();
    await page.locator('#carouselExampleIndicators').getByRole('button', { name: 'Next' }).click();
    await page.locator('#carouselExampleIndicators').getByRole('button', { name: 'Next' }).click();
    await page.locator('#carouselExampleIndicators').getByRole('button', { name: 'Next' }).click();
    await page.getByRole('link', { name: 'Phones' }).click();
    await page.getByRole('link', { name: 'Laptops' }).click();
    await page.getByRole('link', { name: 'Monitors' }).click();
  });

  test('product demo contact', async ({ page }) => {
    test.slow();
    await page.getByRole('link', { name: 'Contact' }).click();
    await page.locator('#recipient-email').fill('test@gmail.com');
    await page.getByRole('textbox', { name: 'Contact Email: Contact Name:' }).fill('test');
    await page.getByRole('textbox', { name: 'Message:' }).fill('testing');
    page.once('dialog', dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        dialog.dismiss().catch(() => {});
    });
    await page.getByRole('button', { name: 'Send message' }).click();
    });
        
   test('product demo cart', async ({ page }) => {
    test.slow();
   await page.getByRole('link', { name: 'Iphone 6 32gb' }).click();
   page.once('dialog', dialog => {
     console.log(`Dialog message: ${dialog.message()}`);
     dialog.dismiss().catch(() => {});
   });
   await page.getByRole('link', { name: 'Add to cart' }).click();
   await page.getByRole('link', { name: 'Cart', exact: true }).click();
    });


});

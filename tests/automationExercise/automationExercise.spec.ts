import { test, expect } from '@playwright/test';

test.describe('automation testing', () => {

  // 🔹 Put these here
  let email: string;
  let password: string;

  test.beforeEach(async ({ page }) => {
    await page.goto('https://automationexercise.com/');

    // generate unique email and fixed password
    email = `test_${Date.now()}@gmail.com`;
    password = 'test@123';
  });

test('Register User', async ({ page }) => {
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.getByRole('heading', { name: 'New User Signup!' }).click();

  await page.getByRole('textbox', { name: 'Name' }).fill('test');
  await page.locator('form').filter({ hasText: 'Signup' })
    .getByPlaceholder('Email Address').fill(email);
  await page.getByRole('button', { name: 'Signup' }).click();

  await page.getByRole('textbox', { name: 'Password *' }).fill(password);
  await page.locator('#days').selectOption('11');
  await page.locator('#months').selectOption('6');
  await page.locator('#years').selectOption('2000');

  await page.getByRole('textbox', { name: 'First name *' }).fill('test');
  await page.getByRole('textbox', { name: 'Last name *' }).fill('user');
  await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).fill('123 test street');
  await page.locator('#country').selectOption('India');
  await page.getByRole('textbox', { name: 'State *' }).fill('AP');
  await page.getByRole('textbox', { name: 'City * Zipcode *' }).fill('Vizag');
  await page.locator('#zipcode').fill('530001');
  await page.getByRole('textbox', { name: 'Mobile Number *' }).fill('9876543210');

  await page.getByRole('button', { name: 'Create Account' }).click();
  await expect(page.getByText('Account Created!')).toBeVisible();
    await page.getByText('Account Created! Congratulations! Your new account has been successfully').click();
    await page.getByRole('link', { name: 'Continue' }).click();
    await page.getByRole('link', { name: 'Website for automation' }).click();

  });

test('Login with created user', async ({ page }) => {
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.getByRole('heading', { name: 'Login to your account' }).click();

  await page.locator('form').filter({ hasText: 'Login' })
    .getByPlaceholder('Email Address').fill(email);
  await page.getByRole('textbox', { name: 'Password' }).fill(password);
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('Logged in as')).toBeVisible();
});
  });
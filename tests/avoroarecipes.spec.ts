import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://avoroa.sirisapps.com//');

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Avoroa/);


// click on Recipes button//
  await page.getByRole("link", { name: "Recipes" }).click();

  await expect(page.getByRole('heading', { name: 'Recipes from the orchard' })).toBeVisible();

  await expect(page.getByRole('button', { name: 'All' })).toBeVisible();
await expect(page.getByRole('button', { name: 'Breakfast' })).toBeVisible();
await expect(page.getByRole('button', { name: 'Lunch' })).toBeVisible();
await expect(page.getByRole('button', { name: 'Dip' })).toBeVisible();
await expect(page.getByRole('button', { name: 'Dessert' })).toBeVisible();
await expect(page.getByRole('button', { name: 'Vegan' })).toBeVisible();

await page.getByRole('button', { name: 'All' }).click();
await expect(page.getByRole('link', { name: 'The only guacamole recipe you' })).toBeVisible();
await expect(page.getByRole('link', { name: 'Smashed avo on sourdough,' })).toBeVisible();
await expect(page.getByRole('link', { name: ' Chocolate avocado mousse (no'})).toBeVisible();

//await page.getByRole('link', { name: 'The only guacamole recipe you' }).click();

// await page.getByRole('link', { name: 'Smashed avo on sourdough,' }).click();
// await page.getByRole('link', { name: 'Chocolate avocado mousse (no' }).click();
});
import { test, expect, Page } from '@playwright/test';

test('Click all left-side interactive elements', async ({ page }: { page: Page }) => {
  await page.goto('https://playwright.dev/docs/locators');

  // Wait until the page is fully loaded
  await page.waitForLoadState('networkidle');

  // Locate the right sidebar
  const leftSidebar = page.locator('aside');

  // Get all links inside the sidebar
  const links = leftSidebar.locator('a');

  const count = await links.count();
  console.log(`Found ${count} links.`);

  for (let i = 0; i < count; i++) {
    const link = links.nth(i);

    if (await link.isVisible()) {
      const text = await link.innerText();
      console.log(`Clicking: ${text}`);

      await link.click();

      // Optional: wait for scrolling/navigation
      await page.waitForTimeout(500);
    }
  }
});
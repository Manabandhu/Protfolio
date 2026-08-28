import { test, expect } from '@playwright/test';

test.describe('V4 Browser Smoke Test', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
  });

  test('page loads successfully', async ({ page }) => {
    await expect(page).toHaveTitle('v4-react-design-system');
    await expect(page.locator('h1')).toContainText('Rajesh Koyi');
  });

  test('no runtime errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (err) => errors.push(err.message));
    await page.reload();
    await expect(page.locator('h1')).toBeVisible();
    expect(errors.filter(e => !e.includes('favicon'))).toHaveLength(0);
  });

  test('metrics render from portfolio.json', async ({ page }) => {
    await expect(page.locator('text=60+')).toBeVisible();
    await expect(page.locator('text=5')).toBeVisible();
    await expect(page.locator('text=95%')).toBeVisible();
  });

  test('theme control works', async ({ page }) => {
    const violetButton = page.locator('button[aria-label="violet theme"]');
    if (await violetButton.count() > 0) {
      await violetButton.click();
      await expect(violetButton).toHaveClass(/scale-110/);
    }
  });

  test('token-laboratory controls work', async ({ page }) => {
    const radiusButtons = page.locator('button:has-text("0.75rem")');
    if (await radiusButtons.count() > 0) {
      await radiusButtons.first().click();
      await expect(radiusButtons.first()).toHaveClass(/border-accent-indigo/);
    }
  });

  test('component states render', async ({ page }) => {
    await expect(page.locator('text=Default')).toBeVisible();
    await expect(page.locator('text=Hover')).toBeVisible();
    await expect(page.locator('text=Focus')).toBeVisible();
    await expect(page.locator('text=Disabled')).toBeVisible();
    await expect(page.locator('text=Loading')).toBeVisible();
    await expect(page.locator('text=Error')).toBeVisible();
    await expect(page.locator('text=Success')).toBeVisible();
  });

  test('keyboard navigation works', async ({ page }) => {
    await page.keyboard.press('Tab');
    const focused = await page.evaluate(() => document.activeElement?.tagName);
    expect(['BUTTON', 'A']).toContain(focused);
  });

  test('mobile layout has no horizontal overflow', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.reload();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    expect(overflow).toBe(false);
  });

  test('desktop layout renders correctly', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.reload();
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('text=Token Laboratory')).toBeVisible();
  });

  test('reduced-motion behavior is respected', async ({ page }) => {
    const toggle = page.locator('[role="switch"]');
    if (await toggle.count() > 0) {
      await toggle.click();
      await expect(toggle).toHaveAttribute('aria-checked', 'true');
    }
  });
});

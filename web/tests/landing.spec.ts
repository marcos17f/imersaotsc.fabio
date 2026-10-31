import { test, expect } from '@playwright/test';
import { links } from '../src/data/site';

const isMobile = (name: string) => name.startsWith('mobile');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('US1: hero shows offer and checkout above the fold', async ({ page }) => {
  const vh = page.viewportSize()!.height;
  for (const sel of ['h1', 'header [data-cta=checkout]', 'header dl']) {
    const box = await page.locator(sel).first().boundingBox();
    expect(box, sel).not.toBeNull();
    expect(box!.y + box!.height, `${sel} acima da dobra`).toBeLessThanOrEqual(vh);
  }
  await expect(page.locator('nav [data-cta=checkout]')).toBeVisible();
});

test('every checkout and WhatsApp button points to the right place', async ({ page }) => {
  const checkout = page.locator('[data-cta=checkout]');
  expect(await checkout.count()).toBeGreaterThanOrEqual(5);
  for (const href of await checkout.evaluateAll((els) => els.map((e) => e.getAttribute('href'))))
    expect(href).toBe(links.checkout);
  const wa = page.locator('[data-cta=whatsapp]');
  expect(await wa.count()).toBeGreaterThanOrEqual(2);
  for (const href of await wa.evaluateAll((els) => els.map((e) => e.getAttribute('href'))))
    expect(href).toBe(links.whatsapp);
});

test('US2: sections in order, FAQ toggles, video loads on click, countdown runs', async ({ page }) => {
  const ids = await page.locator('main > section[id]').evaluateAll((els) => els.map((e) => e.id));
  expect(ids).toEqual(['problema', 'metodo', 'programa', 'casos', 'investimento', 'duvidas']);

  const q = page.locator('#duvidas details').first();
  await q.locator('summary').click();
  await expect(q).toHaveAttribute('open', '');
  await q.locator('summary').click();
  await expect(q).not.toHaveAttribute('open', '');

  const v = page.locator('button[data-video]').first();
  await v.scrollIntoViewIfNeeded();
  await v.click();
  await expect(v.locator('iframe')).toHaveAttribute('src', /youtube-nocookie\.com\/embed\//);

  await expect(page.locator('#countdown [data-unit=days], #countdown [data-label]').first()).not.toHaveText('--');
});

test('US3: menu jumps to section; back-to-top appears and works', async ({ page }, info) => {
  if (isMobile(info.project.name)) {
    const btn = page.locator('#menu-btn');
    await btn.click();
    await expect(btn).toHaveAttribute('aria-expanded', 'true');
  }
  await page.locator('#menu a[href="#investimento"]').click();
  await expect(page.locator('#investimento h2')).toBeInViewport();
  if (isMobile(info.project.name)) await expect(page.locator('#menu-btn')).toHaveAttribute('aria-expanded', 'false');

  const top = page.locator('#back-to-top');
  await expect(top).not.toHaveClass(/opacity-0/); // já passou da primeira tela após o salto
  await top.click();
  await expect.poll(() => page.evaluate(() => scrollY)).toBe(0);
  await expect(top).toHaveClass(/opacity-0/);

  await page.evaluate(() => scrollTo(0, innerHeight * 2));
  await expect(top).not.toHaveClass(/opacity-0/);
  await top.click();
  await expect.poll(() => page.evaluate(() => scrollY)).toBe(0);
  await expect(top).toHaveClass(/opacity-0/);
});

test('size: no horizontal scroll; 9–12 screens on desktop', async ({ page }, info) => {
  const { sw, iw, sh, ih } = await page.evaluate(() => ({
    sw: document.documentElement.scrollWidth, iw: innerWidth,
    sh: document.documentElement.scrollHeight, ih: innerHeight,
  }));
  expect(sw).toBeLessThanOrEqual(iw);
  if (!isMobile(info.project.name)) {
    const screens = sh / ih;
    expect(screens).toBeGreaterThanOrEqual(9);
    expect(screens).toBeLessThanOrEqual(12);
  }
});

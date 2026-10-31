import { defineConfig } from '@playwright/test';

const ci = !!process.env.CI;

export default defineConfig({
  testDir: 'tests',
  forbidOnly: ci,
  retries: ci ? 1 : 0,
  reporter: ci ? [['github'], ['line']] : 'line',
  use: { baseURL: 'http://localhost:4321', trace: 'retain-on-failure' },
  projects: [
    { name: 'mobile-390', use: { browserName: 'chromium', viewport: { width: 390, height: 844 }, hasTouch: true } },
    { name: 'desktop-1440', use: { browserName: 'chromium', viewport: { width: 1440, height: 900 } } },
  ],
  // Astro 7 só permite um `astro preview` por vez, por isso reaproveita o da 4321 localmente.
  webServer: { command: 'npm run build && npm run preview -- --port 4321', url: 'http://localhost:4321', reuseExistingServer: !ci, timeout: 120_000 },
});

import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

// Impede que alguém remova os cabeçalhos de segurança sem perceber.
const config = JSON.parse(readFileSync(new URL('../../vercel.json', import.meta.url), 'utf8'));
const headers: Record<string, string> = Object.fromEntries(
  config.headers.find((h: { source: string }) => h.source === '/(.*)').headers.map((h: { key: string; value: string }) => [h.key, h.value]),
);

describe('vercel.json security headers', () => {
  it('forces HTTPS', () => expect(headers['Strict-Transport-Security']).toMatch(/max-age=\d{8,}/));
  it('blocks clickjacking', () => {
    expect(headers['Content-Security-Policy']).toContain("frame-ancestors 'none'");
    expect(headers['X-Frame-Options']).toBe('DENY');
  });
  it('blocks forms and plugins', () => {
    expect(headers['Content-Security-Policy']).toContain("form-action 'none'");
    expect(headers['Content-Security-Policy']).toContain("object-src 'none'");
  });
  it('disables MIME sniffing', () => expect(headers['X-Content-Type-Options']).toBe('nosniff'));
});

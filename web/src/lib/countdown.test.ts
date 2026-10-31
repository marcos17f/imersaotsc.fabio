import { describe, expect, it } from 'vitest';
import { remaining, pad } from './countdown';
import { brl } from '../data/site';

const target = new Date('2026-11-01T09:00:00-03:00');

describe('remaining', () => {
  it('splits the time left into units', () => {
    const now = new Date(target.getTime() - (2 * 86400 + 3 * 3600 + 4 * 60 + 5) * 1000);
    expect(remaining(target, now)).toEqual({ days: 2, hours: 3, minutes: 4, seconds: 5, done: false });
  });

  it('is done exactly at the target', () => {
    expect(remaining(target, target).done).toBe(true);
  });

  it('never goes negative after the target', () => {
    expect(remaining(target, new Date(target.getTime() + 60_000))).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0, done: true });
  });
});

describe('formatting', () => {
  it('pads to two digits', () => expect(pad(7)).toBe('07'));
  it('formats reais', () => {
    expect(brl(997)).toBe('R$ 997');
    expect(brl(2057)).toBe('R$ 2.057');
  });
});

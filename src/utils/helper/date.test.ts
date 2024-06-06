import { isDateExpiring, ExpirationStatus, dayDiffWarning } from './date';
import { describe, it, expect } from 'vitest';
import dayjs from 'dayjs';

describe('isDateExpiring', () => {
  it('should return "expired" if the date is in the past', () => {
    const pastDate = dayjs().subtract(10, 'month').format('YYYY-MM-DD');
    expect(isDateExpiring(pastDate)).toBe(ExpirationStatus.expired);
  });

  it('should return "warning" if the date is within the warning range', () => {
    // Assuming dayDiffWarning is defined
    const startWarningDate = dayjs().add(1, 'days').format('YYYY-MM-DD');
    const endWarningDate = dayjs().add(dayDiffWarning, 'days').format('YYYY-MM-DD');
    expect(isDateExpiring(startWarningDate)).toBe(ExpirationStatus.warning);
    expect(isDateExpiring(endWarningDate)).toBe(ExpirationStatus.warning);
  });

  it('should return true if the dayDiffWarning is 60 days', () => {
    expect(dayDiffWarning).toBe(60);
  });

  it('should return "ok" if the date is in the future', () => {
    const futureDate = '2025-01-01';
    expect(isDateExpiring(futureDate)).toBe(ExpirationStatus.ok);
  });
});

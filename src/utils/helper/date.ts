import dayjs from 'dayjs';

// days_that_should_display_a_warning_for_card_expiration
export const dayDiffWarning = 60;

export enum ExpirationStatus {
  // eslint-disable-next-line no-unused-vars
  ok = 'OK',
  // eslint-disable-next-line no-unused-vars
  warning = 'WARNING',
  // eslint-disable-next-line no-unused-vars
  expired = 'EXPIRED',
}
export const isDateExpiring = (date: string) => {
  // Convert date of format YYYY-MM-DD to dayjsDate
  const expirationDate = dayjs(date);

  // Initialize today's date
  const todayDate = dayjs();

  // Calculate the difference in months
  const dayDiff = expirationDate.diff(todayDate, 'day');

  // Check conditions and return status
  if (dayDiff < 0) {
    return ExpirationStatus.expired;
  } else if (dayDiff < dayDiffWarning) {
    return ExpirationStatus.warning;
  } else {
    return ExpirationStatus.ok;
  }
};

export function getDistinctEntries<T extends object>(array: T[], field: keyof T): T[keyof T][] {
  if (array.length === 0) {
    return [];
  }

  if (!(field in array[0])) {
    // @ts-ignore
    throw new Error(`Field ${field} does not exist in the array entries.`);
  }

  return Array.from(new Set(array.map((item) => item[field])));
}

export const accumulateAmountsAndSum = (inputArray: number[] = []) => {
  let acc = 0;
  const accumulatedArray = inputArray.map((amount) => {
    acc += amount;
    return { amount, acc };
  });
  return accumulatedArray.length > 0 ? accumulatedArray[accumulatedArray.length - 1].acc : 0;
};

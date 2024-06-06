export function findKeyByValue<T>(object: Record<string, T>, valueToFind: T): string | null {
  for (const key in object) {
    if (object[key] === valueToFind) {
      return key;
    }
  }
  return null;
}

export function filterEmptyValues<T>(input: T): Partial<T> {
  const result: Partial<T> = {};

  for (const key in input) {
    if (input[key] !== '' && input[key] !== undefined && input[key] !== null) {
      result[key] = input[key];
    }
  }

  return result;
}

export function getKeyWithTrueValue(obj: { [key: string]: boolean }): string | null {
  for (const key in obj) {
    if (key in obj && obj[key] === true) {
      return key;
    }
  }
  return null;
}

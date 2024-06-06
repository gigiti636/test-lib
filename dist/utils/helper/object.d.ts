export declare function findKeyByValue<T>(object: Record<string, T>, valueToFind: T): string | null;
export declare function filterEmptyValues<T>(input: T): Partial<T>;
export declare function getKeyWithTrueValue(obj: {
    [key: string]: boolean;
}): string | null;

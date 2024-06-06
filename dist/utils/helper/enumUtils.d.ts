export declare function getKeyByValue<T extends string | number>(enumObj: Record<string, T>, value: T): keyof typeof enumObj | undefined;
export declare function enumToOptions<T extends Record<string, string>>(enumObject: T): {
    value: string;
    label: string;
}[];

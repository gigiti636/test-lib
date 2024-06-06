type URLParams = {
    [key: string]: string | string[];
};
declare const useURLParams: <T extends URLParams>() => {
    updateURLParams: (paramsObject: Partial<T>) => void;
    queryStringToObject: () => T;
};
export default useURLParams;

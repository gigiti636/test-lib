export declare const dayDiffWarning = 60;
export declare enum ExpirationStatus {
    ok = "OK",
    warning = "WARNING",
    expired = "EXPIRED"
}
export declare const isDateExpiring: (date: string) => ExpirationStatus;

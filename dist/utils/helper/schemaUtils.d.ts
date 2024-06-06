import * as yup from 'yup';
export declare function generateResetValues<T extends yup.Schema<T>>(schema: T): Partial<yup.InferType<T>>;

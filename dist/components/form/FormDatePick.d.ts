import { Control, FieldValues } from 'react-hook-form';
import { BoxProps } from '@mui/material/Box';
import { SxProps } from '@mui/material/styles';

interface FormFieldProps<K extends keyof FieldValues> extends BoxProps {
    for_name: K;
    with_label: string;
    with_helper_text?: string;
    control: Control<FieldValues[K]>;
    has_error: boolean;
    error_message: string;
    readonly?: boolean;
    sx?: SxProps;
    datePickerProps?: Record<string, string | boolean>;
    noFuture?: boolean;
}
declare const FormField: <K extends string>({ for_name, with_label, with_helper_text, control, has_error, error_message, readonly, sx, datePickerProps, noFuture, ...rest }: FormFieldProps<K>) => import("react/jsx-runtime").JSX.Element;
export default FormField;

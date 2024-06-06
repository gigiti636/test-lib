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
    sxInput?: SxProps;
    variant?: 'outlined' | 'filled' | 'standard';
    multiline?: boolean;
    placeholder?: string;
}
declare const FormField: <K extends string>({ for_name, with_label, with_helper_text, control, has_error, error_message, readonly, sx, sxInput, variant, multiline, placeholder, ...rest }: FormFieldProps<K>) => import("react/jsx-runtime").JSX.Element;
export default FormField;

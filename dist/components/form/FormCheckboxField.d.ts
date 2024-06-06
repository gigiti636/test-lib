import { Control, FieldValues } from 'react-hook-form';
import { BoxProps } from '@mui/material/Box';

interface CheckboxFieldProps<K extends keyof FieldValues> extends BoxProps {
    for_name: K;
    with_label: string;
    control: Control<FieldValues[K]>;
    has_error: boolean;
    error_message: string;
}
declare const CheckboxField: <K extends string>({ for_name, with_label, control, has_error, error_message, ...rest }: CheckboxFieldProps<K>) => import("react/jsx-runtime").JSX.Element;
export default CheckboxField;

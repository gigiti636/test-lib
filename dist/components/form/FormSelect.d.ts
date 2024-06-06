import { Control, FieldValues } from 'react-hook-form';
import { BoxProps } from '@mui/material/Box';

interface FormSelectProps<K extends keyof FieldValues> extends BoxProps {
    for_name: K;
    with_label: string;
    with_helper_text?: string;
    control: Control<FieldValues[K]>;
    has_error: boolean;
    error_message: string;
    options: {
        value: string;
        label: string;
    }[];
    withValueTitle?: boolean;
}
declare const FormSelect: <K extends string>({ for_name, with_label, with_helper_text, control, has_error, error_message, options, withValueTitle, ...rest }: FormSelectProps<K>) => import("react/jsx-runtime").JSX.Element;
export default FormSelect;

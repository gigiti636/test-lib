import { Box, TextField } from '@mui/material';
import { useController, Control, FieldValues } from 'react-hook-form';
import type { BoxProps } from '@mui/material/Box';
import type { SxProps } from '@mui/material/styles';

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

const FormField = <K extends keyof FieldValues>({
  for_name,
  with_label,
  with_helper_text = '',
  control,
  has_error,
  error_message,
  readonly = false,
  sx,
  sxInput = {},
  variant = 'outlined',
  multiline = false,
  placeholder = '',
  ...rest
}: FormFieldProps<K>) => {
  const { field } = useController({
    name: for_name,
    control,
  });

  return (
    <Box
      marginBottom={2}
      {...rest}
      sx={{ width: '300px', ...sx }}
      mx={'auto'}
      data-testid={`${for_name}_textbox`}
    >
      <TextField
        placeholder={placeholder}
        multiline={multiline}
        rows={multiline ? 3 : 1}
        fullWidth
        size="small"
        label={with_label}
        variant={variant}
        {...field}
        error={has_error}
        helperText={has_error ? error_message : with_helper_text}
        FormHelperTextProps={{
          style: { padding: 0 },
        }}
        InputProps={{
          readOnly: readonly,
        }}
        sx={{
          ...(readonly && {
            pointerEvents: 'none',
            opacity: 0.7,
          }),
          ...sxInput,
        }}
      />
    </Box>
  );
};

export default FormField;

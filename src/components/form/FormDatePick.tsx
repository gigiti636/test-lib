import { Box } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { Control, FieldValues, useController } from 'react-hook-form';
import type { BoxProps } from '@mui/material/Box';
import type { SxProps } from '@mui/material/styles';
import dayjs from 'dayjs';

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

const FormField = <K extends keyof FieldValues>({
  for_name,
  with_label,
  with_helper_text = '',
  control,
  has_error,
  error_message,
  readonly = false,
  sx,
  datePickerProps,
  noFuture = false,
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
      <DatePicker
        {...datePickerProps}
        label={with_label}
        format="DD-MM-YYYY"
        value={dayjs(field.value)}
        onChange={(date) => {
          if (date) {
            // @ts-ignore
            field.onChange(date.format('YYYY-MM-DD'));
          }
        }}
        maxDate={!noFuture ? undefined : dayjs()}
        slotProps={{
          textField: {
            variant: 'outlined',
            size: 'small',
            sx: {
              width: 300,
              ...(readonly && {
                pointerEvents: 'none',
                opacity: 0.7,
              }),
              '& input': {
                fontSize: {
                  xs: 13,
                  md: 16,
                },
              },
              '& .MuiFormHelperText-root': {
                padding: 0,
              },
            },
            helperText: has_error ? error_message : with_helper_text,
            error: has_error,
          },
        }}
        closeOnSelect={true}
      />
    </Box>
  );
};

export default FormField;

import type { StackProps, SxProps } from '@mui/material';
import { Button, Stack } from '@mui/material';
import { MouseEventHandler } from 'react';
import { useTranslation } from 'react-i18next';

interface ModalActionFooterProps extends StackProps {
  cancelAction?: MouseEventHandler | undefined;
  cancelActionLabel?: string;
  action: string;
  callToAction: () => void;
  callToActionHidden?: boolean;
  callToActionIsDelete: boolean;
  disabled?: boolean;
  sx?: SxProps;
}

const ModalActionFooter = ({
  cancelAction,
  cancelActionLabel,
  action,
  callToAction,
  disabled = false,
  callToActionHidden = false,
  callToActionIsDelete = false,
  sx,
  ...rest
}: ModalActionFooterProps) => {
  const { t } = useTranslation('common');
  return (
    <Stack flexDirection={'row'} justifyContent={{ xs: 'space-between', md: 'end' }} mt={6} sx={sx} {...rest}>
      {cancelAction && (
        <Button
          role={'button'}
          aria-label={'cancel'}
          color={'primary'}
          sx={{ fontSize: (theme) => theme.typography.fontSize * 1.15 }}
          onClick={cancelAction}
        >
          {cancelActionLabel ? cancelActionLabel : t('buttons.cancel')}
        </Button>
      )}

      {!callToActionHidden && (
        <Button
          role={'button'}
          aria-label={'proceed'}
          onClick={callToAction}
          disabled={disabled}
          color={!callToActionIsDelete ? 'primary' : 'error'}
          variant={'contained'}
          sx={{ fontSize: (theme) => theme.typography.fontSize * 1 * 1.15 }}
        >
          {action}
        </Button>
      )}
    </Stack>
  );
};

export default ModalActionFooter;

import IconButton from '@mui/material/IconButton';
import type { IconButtonProps } from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTheme } from '@mui/material/styles';
import type { FC } from 'react';

interface DeleteButtonProps extends IconButtonProps {
  cursor?: string;
}

const DeleteButton: FC<DeleteButtonProps> = ({ cursor, ...rest }) => {
  const theme = useTheme();

  return (
    <IconButton {...rest}>
      <DeleteIcon
        cursor={cursor ?? 'pointer'}
        sx={{
          color: theme.palette.text.secondary,
          '&:hover': {
            color: theme.palette.error.main,
          },
        }}
      />
    </IconButton>
  );
};

export default DeleteButton;

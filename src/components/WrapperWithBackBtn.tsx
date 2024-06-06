import type { ReactNode } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import type { BoxProps } from '@mui/material/Box';

interface WrapperWithBackBtnProps extends BoxProps {
  children: ReactNode;
  backBtnClicked: () => void;
}

const WrapperWithBackBtn = ({ children, backBtnClicked, ...rest }: WrapperWithBackBtnProps) => {
  return (
    <Box {...rest}>
      <Box textAlign={'left'} pl={{ xs: 2, md: 5 }} mb={1}>
        <IconButton
          sx={{
            fontSize: (theme) => ({
              md: theme.typography.fontSize * 2.5,
              lg: theme.typography.fontSize * 3,
            }),
          }}
          onClick={backBtnClicked}
        >
          <ArrowBackIcon fontSize={'inherit'} color={'inherit'} />
        </IconButton>
      </Box>
      {children}
    </Box>
  );
};

export default WrapperWithBackBtn;

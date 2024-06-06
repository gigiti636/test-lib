import type { ReactNode } from 'react';
import { Box } from '@mui/material';
import type { BoxProps } from '@mui/material/Box';
import type { SxProps } from '@mui/material/styles';

interface CustomBoxProps extends BoxProps {
  children: ReactNode;
  bgcolor?: string;
  sx?: SxProps;
}

function PageSection({ bgcolor, sx, children, ...otherProps }: CustomBoxProps) {
  return (
    <Box
      bgcolor={bgcolor ? bgcolor : (theme) => (theme.palette.mode === 'dark' ? '#353535' : '#F8F7F7')}
      boxShadow={
        '0.3px 0.8px 1.1px 0px rgba(187, 187, 187, 0.11), 0.5px 1.3px 1.8px -0.6px rgba(187, 187, 187, 0.18), 1.1px 2.7px 3.8px -1.2px rgba(187, 187, 187, 0.26)'
      }
      border={'0.5px solid rgba(0, 0, 0, 0.30)'}
      sx={sx}
      py={{ xs: 1, md: 2.5 }}
      px={{ xs: 2, md: 7 }}
      textAlign={'left'}
      {...otherProps}
    >
      {children}
    </Box>
  );
}

export default PageSection;

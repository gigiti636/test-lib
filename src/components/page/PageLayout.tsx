import Box from '@mui/material/Box';
import type { BoxProps } from '@mui/material/Box';
import type { SxProps } from '@mui/material';
import type { ReactNode } from 'react';

// ----------------------------------------------------------------------

const SPACING_FROM_TOP = 3;
const SPACING_FROM_SIDES = 2;

interface MainProps extends BoxProps {
  children: ReactNode;
  sx?: SxProps;
}

export default function PageLayout({ children, sx, ...other }: MainProps) {
  return (
    <Box
      component="section"
      sx={{
        background: (theme) => theme.palette.background.paper,
        mx: { sm: 0, md: SPACING_FROM_SIDES },
        mt: { sm: 0, md: SPACING_FROM_TOP },
        mb: { sm: 0, md: SPACING_FROM_TOP },
        borderRadius: { sm: 0, md: '13px' },
        paddingX: { xs: 2, lg: 5 },
        paddingTop: 3,
        paddingBottom: SPACING_FROM_TOP * 2,
        flexGrow: { xs: 1, md: 0 },
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
}

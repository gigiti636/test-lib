import { FC, ReactNode } from 'react';
import { Box, useTheme } from '@mui/material';
import type { SxProps } from '@mui/material/styles';
import type { BoxProps } from '@mui/material/Box';

interface PageTitleProps extends Omit<BoxProps, 'title'> {
  title: ReactNode;
  sx?: SxProps;
}

const PageTitle: FC<PageTitleProps> = ({ title, sx, ...rest }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        fontSize: {
          xs: theme.typography.fontSize * 1.9,
          md: theme.typography.fontSize * 2.3,
          lg: theme.typography.fontSize * 2.5,
        },
        fontWeight: '900',
        textAlign: 'left',
        component: 'h2',
        my: 0,
        mt: 1,
        color: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.common.black,
        ...sx,
      }}
      {...rest}
    >
      {title}
    </Box>
  );
};

export default PageTitle;

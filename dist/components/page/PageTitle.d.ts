import { FC, ReactNode } from 'react';
import { SxProps } from '@mui/material/styles';
import { BoxProps } from '@mui/material/Box';

interface PageTitleProps extends Omit<BoxProps, 'title'> {
    title: ReactNode;
    sx?: SxProps;
}
declare const PageTitle: FC<PageTitleProps>;
export default PageTitle;

import { BoxProps } from '@mui/material/Box';
import { SxProps } from '@mui/material';
import { ReactNode } from 'react';

interface MainProps extends BoxProps {
    children: ReactNode;
    sx?: SxProps;
}
export default function PageLayout({ children, sx, ...other }: MainProps): import("react/jsx-runtime").JSX.Element;
export {};

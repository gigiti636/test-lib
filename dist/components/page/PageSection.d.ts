import { ReactNode } from 'react';
import { BoxProps } from '@mui/material/Box';
import { SxProps } from '@mui/material/styles';

interface CustomBoxProps extends BoxProps {
    children: ReactNode;
    bgcolor?: string;
    sx?: SxProps;
}
declare function PageSection({ bgcolor, sx, children, ...otherProps }: CustomBoxProps): import("react/jsx-runtime").JSX.Element;
export default PageSection;

import { StackProps, SxProps } from '@mui/material';
import { MouseEventHandler } from 'react';

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
declare const ModalActionFooter: ({ cancelAction, cancelActionLabel, action, callToAction, disabled, callToActionHidden, callToActionIsDelete, sx, ...rest }: ModalActionFooterProps) => import("react/jsx-runtime").JSX.Element;
export default ModalActionFooter;

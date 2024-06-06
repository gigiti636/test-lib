import { ModalProps } from '@mui/material/Modal';
import { TransitionProps } from '@mui/material/transitions';
import { SxProps } from '@mui/material/styles';
import { MouseEventHandler, ReactNode } from 'react';

interface ModalFooterControl {
    cancelActionLabel?: string;
    cancelAction?: () => void;
    action?: string;
    callToAction?: () => void;
    callToActionHidden?: boolean;
    callToActionIsDelete?: boolean;
    disabled?: boolean;
    sxFooter?: SxProps;
}
export interface TransitionsModalProps extends Omit<ModalProps, 'children'>, ModalFooterControl {
    TransitionProps?: TransitionProps;
    children: ReactNode;
    header?: ReactNode;
    maxWidth?: string;
    closeModal?: MouseEventHandler;
}
export default function TransitionsModal({ open, header, children, maxWidth, closeModal, cancelActionLabel, cancelAction, action, callToAction, callToActionHidden, callToActionIsDelete, disabled, sxFooter, ...props }: TransitionsModalProps): import("react/jsx-runtime").JSX.Element;
export {};

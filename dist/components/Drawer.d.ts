import { MouseEventHandler, ReactNode } from 'react';

interface Props {
    open: boolean;
    anchor?: 'left' | 'right';
    closeDrawer?: MouseEventHandler;
    onClose: MouseEventHandler;
    children: ReactNode;
}
declare function MyDrawer({ open, anchor, closeDrawer, onClose, children }: Props): import("react/jsx-runtime").JSX.Element;
export default MyDrawer;

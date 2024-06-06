import { SyntheticEvent } from 'react';

interface SubmitButtonFooter {
    onClick: (_event: SyntheticEvent) => void;
    isValid?: boolean;
}
declare function SubmitButton({ onClick, isValid }: SubmitButtonFooter): import("react/jsx-runtime").JSX.Element;
export default SubmitButton;

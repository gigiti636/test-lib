import { FC, ReactNode } from 'react';
import { BoxProps } from '@mui/material/Box';

export interface WizardStepType {
    element: ReactNode;
    label: string;
    title: string;
    Validator?: StepValidation | null;
    extra_action?: ExtraAction | null;
    hideLayoutWrapper?: boolean;
}
interface StepValidation {
    action?: ReactNode;
    is_valid?: boolean | (() => boolean);
    stepCallback?: () => void;
    stepHandler?: () => void;
    action_footer_hidden?: boolean;
}
type ExtraAction = {
    icon: JSX.Element;
    label: string;
    callback: () => void;
};
interface WizardProps extends BoxProps {
    steps: WizardStepType[];
    currentStep: number;
    handleNext: () => void;
    handlePrev: () => void;
    handleCancel?: () => void;
    handleStepperPrev: (_page: number) => void;
    LayoutWrapper?: FC<{
        children: ReactNode;
    }> | null;
}
export declare const Wizard: ({ steps, currentStep, handleNext, handlePrev, handleCancel, handleStepperPrev, LayoutWrapper, ...rest }: WizardProps) => import("react/jsx-runtime").JSX.Element;
export {};

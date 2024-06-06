import { DateRange } from './DateRangePicker';

interface ModalDateRangePickerProps {
    open: boolean;
    handleClose: () => void;
    handleDateSelection: (_date_range: DateRange) => void;
}
export declare const ModalDateRangePicker: ({ open, handleClose, handleDateSelection, }: ModalDateRangePickerProps) => import("react/jsx-runtime").JSX.Element;
export {};

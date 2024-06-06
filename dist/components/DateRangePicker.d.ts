export interface DateRange {
    startDate: string | 'Invalid Date';
    endDate: string | 'Invalid Date';
}
interface CustomDatePickerProps {
    dateRange: DateRange;
    onDateRangeChange: (_dateRange: DateRange) => void;
}
declare function DateRangePicker({ dateRange, onDateRangeChange }: CustomDatePickerProps): import("react/jsx-runtime").JSX.Element;
export default DateRangePicker;

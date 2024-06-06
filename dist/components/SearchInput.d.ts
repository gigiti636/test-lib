import { SxProps } from '@mui/material/styles';
import { DependencyList } from 'react';

interface SearchProps {
    flavor?: string;
}
export declare const Search: import('@emotion/styled').StyledComponent<import('@mui/system').MUIStyledCommonProps<import('@mui/material').Theme> & SearchProps, import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const StyledInputBase: import('@emotion/styled').StyledComponent<import('@mui/material').InputBaseProps & import('@mui/system').MUIStyledCommonProps<import('@mui/material').Theme>, {}, {}>;
interface Props {
    title?: string;
    onChange: (_value: string) => void;
    onClear?: () => void;
    presetValue?: string;
    sx?: SxProps;
    manualSearch?: boolean;
    clearQuery?: DependencyList;
    flavor?: 'contained' | 'outlined';
}
export default function SearchInput({ title, onChange, onClear, presetValue, sx, manualSearch, clearQuery, flavor, }: Props): import("react/jsx-runtime").JSX.Element;
export {};

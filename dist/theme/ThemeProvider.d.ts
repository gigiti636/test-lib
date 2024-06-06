import { ReactNode } from 'react';

interface CustomThemeProviderProps {
    locale?: 'en' | 'el';
    children: ReactNode;
}
declare function CustomThemeProvider({ locale, children }: CustomThemeProviderProps): import("react/jsx-runtime").JSX.Element;
export default CustomThemeProvider;

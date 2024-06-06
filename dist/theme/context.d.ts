import { ThemeType } from './base';

declare const CustomThemeContext: import('react').Context<{
    currentTheme: ThemeType;
    toggleTheme: () => void;
}>;
export default CustomThemeContext;

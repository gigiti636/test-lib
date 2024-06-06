import ThemeProvider from './ThemeProvider';
import LocaleContext from '@/locale/context';

import { ReactNode, useContext } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeWithLocale = ({ children }: ThemeProviderProps) => {
  const { currentLanguage } = useContext(LocaleContext);

  return <ThemeProvider locale={currentLanguage}>{children}</ThemeProvider>;
};

export default ThemeWithLocale;

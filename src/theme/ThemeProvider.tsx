import { useState, useMemo, useCallback, ReactNode } from 'react';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider, useMediaQuery } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { enUS, elGR } from '@mui/material/locale';
import dayjs from 'dayjs';
import 'dayjs/locale/en';
import 'dayjs/locale/el';
import 'react-multi-carousel/lib/styles.css';
import getTheme, { ThemeType } from './base';
import CustomThemeContext from './context';


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import i18n from '../locale/i18next';

interface CustomThemeProviderProps {
  locale?: 'en' | 'el';
  children: ReactNode;
}
function CustomThemeProvider({ locale = 'en', children }: CustomThemeProviderProps) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [themeType, setThemeType] = useState<ThemeType>(() => {
    const storedThemePref = localStorage.getItem('appTheme');

    if (storedThemePref && (storedThemePref === 'light' || storedThemePref === 'dark')) {
      return storedThemePref as ThemeType;
    }
    return prefersDarkMode ? 'dark' : 'light';
  });

  const theme = createTheme(getTheme(themeType), i18n.language === 'en' ? enUS : elGR);

  const toggleTheme = useCallback(() => {
    localStorage.setItem('appTheme', themeType === 'light' ? 'dark' : 'light');
    setThemeType(themeType === 'light' ? 'dark' : 'light');
  }, [themeType]);

  const contextValue = useMemo(
    () => ({
      currentTheme: themeType,
      toggleTheme: toggleTheme,
    }),
    [themeType, toggleTheme],
  );

  return (
    <CustomThemeContext.Provider value={contextValue}>
      <StyledEngineProvider injectFirst>
        <MUIThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={dayjs.locale(locale)}>
            <CssBaseline />
            {children}
          </LocalizationProvider>
        </MUIThemeProvider>
      </StyledEngineProvider>
    </CustomThemeContext.Provider>
  );
}

export default CustomThemeProvider;

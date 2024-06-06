import { CssBaseline, ThemeProvider } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import {themeDark as BackofficeDark, themeLight as BackofficeLight} from "../src/lib/themes/back_office_theme";
import {themeDark as ExpenseDark, themeLight as ExpenseLight} from "../src/lib/themes/expense_app_theme";
import { createTheme } from "@mui/material/styles";

import {PageLayout} from "../src/lib/components/Wrappers";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";

import { enUS } from "@mui/material/locale";

const withPageLayout = (storyFn, context) => {
  const { kind } = context;

  if (
      kind &&
      (kind.toLowerCase().includes("common-pages") ||
          kind.toLowerCase().includes("navigation"))
  ) {
    return storyFn();
  }

  return <PageLayout>{storyFn()}</PageLayout>;
};

const withLocalization = (storyFn) => {
  return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {storyFn()}
      </LocalizationProvider>
  );
};


const themes = {
    lightBackoffice: createTheme(BackofficeLight, enUS),
    darkBackoffice: createTheme(BackofficeDark, enUS),
    lightExpense: createTheme(ExpenseLight, enUS),
    darkExpense: createTheme(ExpenseDark, enUS),
};


export const storyDecorators = [
    withLocalization,
    withThemeFromJSXProvider({
        themes: themes,
        defaultTheme: 'lightExpense',
        Provider: ThemeProvider,
        GlobalStyles: CssBaseline,
    })];
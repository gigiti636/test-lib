import { I18nextProvider } from 'react-i18next';
import { ReactNode, useCallback, useMemo, useState } from 'react';
import i18n from './i18next';
import LanguageContext from './context';

interface LocaleProviderProps {
  children: ReactNode;
}

const LocaleProvider = ({ children }: LocaleProviderProps) => {
  const [language, setLanguage] = useState<'el' | 'en'>(i18n.language.includes('el') ? 'el' : 'en');

  const changeLanguage = useCallback(async (lang: 'el' | 'en') => {
    setLanguage(lang);
    await i18n.changeLanguage(lang);
    return lang;
  }, []);

  const contextValue = useMemo(
    () => ({
      currentLanguage: language,
      changeLanguage: changeLanguage,
    }),
    [language, changeLanguage],
  );

  return (
    <I18nextProvider i18n={i18n}>
      <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>
    </I18nextProvider>
  );
};

export default LocaleProvider;

import { createContext } from 'react';
import i18n from './i18next';

const LanguageContext = createContext<{
  currentLanguage: 'el' | 'en';
  changeLanguage: (_lang: 'el' | 'en') => void;
}>({
  currentLanguage: i18n.language.includes('el') ? 'el' : 'en',
  changeLanguage: () => null,
});

export default LanguageContext;

/// <reference types="react" />
declare const LanguageContext: import('react').Context<{
    currentLanguage: 'el' | 'en';
    changeLanguage: (_lang: 'el' | 'en') => void;
}>;
export default LanguageContext;

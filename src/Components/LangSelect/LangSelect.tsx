import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import './LangSelect.css'


const LangSelect:React.FC = () => {

  const { i18n } = useTranslation();
  const [curLanguage, setCurLanguage] = useState<string>(i18n.language)
  // i18n sucks regarding offering a list of all languages
  const getLanguageList = () => {
    return Object.keys(i18n.options.resources as any);
  }


  useEffect( () => {
    i18n.changeLanguage(curLanguage)
  }, [i18n, curLanguage])


  return (
    <nav className='lang-select'>
        { getLanguageList().map( (lang, i) => {
        return <a 
                  key={i}
                  className={ curLanguage == lang ? 'active' : ''}
                  href="#" 
                  onClick={(e) => setCurLanguage(lang)}>
                    { lang }
                </a>
        })}
    </nav>
  )
}


export default LangSelect

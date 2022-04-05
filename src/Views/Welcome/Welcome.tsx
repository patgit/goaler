import React, { } from 'react';
import { useTranslation } from 'react-i18next';


const  Welcome:React.FC = () => {

  const { t } = useTranslation();

  return (
    <div className='container'>
        <h1>{ process.env.REACT_APP_NAME }</h1>
        <p>{ t('welcome.intro', { AppName: process.env.REACT_APP_NAME }) }</p>
    </div>
  )
}

export default Welcome

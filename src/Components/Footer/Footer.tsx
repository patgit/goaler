import { useTranslation } from 'react-i18next';

import './Footer.css'

const Footer = () => {

  const { t } = useTranslation();

  return (
    <footer>
        <div className='container'>
          <span>@ pat-io | { process.env.REACT_APP_VERSION } </span>
          <nav>
              <ul>
                  <li><a href="#">{ t('impressum') }</a></li>
                  <li><a href="#">{ t('data') }</a></li>
              </ul>
          </nav>
        </div>
    </footer>
  )
}

export default Footer

import { useTranslation } from 'react-i18next'
import {Link} from 'react-router-dom'

import './Footer.css'

const Footer = () => {

  const { t } = useTranslation();

  return (
    <footer>
        <div className='container'>
          <span>@ pat-io | { process.env.REACT_APP_VERSION } </span>
          <nav>
              <ul>
                  <li><Link to="/impressum">{ t('impressum') }</Link></li>
                  <li><Link to="/data">{ t('data') }</Link></li>
              </ul>
          </nav>
        </div>
    </footer>
  )
}

export default Footer

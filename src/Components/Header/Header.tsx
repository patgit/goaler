import LangSelect from '../LangSelect/LangSelect';
import Logo from '../Logo/Logo';
import './Header.css'


const Header:React.FC = () => {
  return (
    <header>
      <div className='container'>
        <Logo />
        <LangSelect />
      </div>
    </header>
  )
}

export default Header

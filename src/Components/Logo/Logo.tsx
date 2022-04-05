import LogoImg from  '../../Assets/Images/pat-io.svg'
import './Logo.css'

const Logo:React.FC = () => {
  return (
    <img className='logo' src={ LogoImg } alt="" />
  )
}

export default Logo

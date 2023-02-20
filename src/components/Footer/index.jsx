// import { Link } from 'react-router-dom'
import Logo from '../../assets/logo_footer.svg'
import '../../style/components/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <img src={Logo} alt="Logo" className="footer-logo" />
      <p className="footer-txt">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer

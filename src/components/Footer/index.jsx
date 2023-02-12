// import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import '../../style/components/Footer.css'

/**
 * Cette fonction affiche le router
 * @param {string} logo
 * @param {string} text txt qui s'affiche dans la balise P
 * @returns
 */
function Footer(logo, text) {
  return (
    <footer className="footer">
      <img src={Logo} alt="Logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer

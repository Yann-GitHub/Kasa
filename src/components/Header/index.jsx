import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import '../../style/components/Header.css'

function Header() {
  return (
    <header className="header">
      <NavLink to="/">
        <img src={Logo} alt="Logo" className="logo" />
      </NavLink>

      <nav className="nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'link active' : 'link')}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'link active' : 'link')}
        >
          A propos
        </NavLink>
        {/* <NavLink to="/accommodations" className="link">
          Accommodations
        </NavLink> */}
      </nav>
    </header>
  )
}

export default Header

import { Link } from 'react-router-dom'
import '../../style/pages/Error.css'

function Error() {
  return (
    <div className="main-wrapper-error">
      <div className="error-title-wrapper">
        <h1 className="error-title">404</h1>
        <h2 className="error-subtitle">
          Oups! La page que vous demandez n'existe pas.
        </h2>
      </div>

      <Link to="/" className="error-link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}

export default Error

import '../../style/components/Card.css'
import { Link } from 'react-router-dom'

function Card({ id, title, cover }) {
  return (
    <div className="card" key={id}>
      <Link className="card-link" to={`/accommodations/${id}`} />
      <img className="card-img" src={cover} alt={id} />
      <span className="card-txt">{title}</span>
    </div>
  )
}

export default Card

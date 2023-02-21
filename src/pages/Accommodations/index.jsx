import { useParams, Navigate } from 'react-router-dom'
import AccommodationsData from '../../data/logements.json'
import Carrousel from '../../components/Carrousel'
import Tag from '../../components/Tag'
import Rating from '../../components/Rating'
import Dropdown from '../../components/Dropdown'
import '../../style/pages/Accommodations.css'

function Accommodations() {
  // console.log(useParams())
  const { accommodationId } = useParams()
  const accommodation = AccommodationsData.find(
    (data) => data.id === accommodationId
  )

  //If there is no accommodation with the ID in the parameters, the user will be redirected to an error page
  if (!accommodation) {
    return <Navigate to="/error" />
  }

  const {
    // id,
    title,
    pictures,
    description,
    host,
    rating,
    location,
    equipments,
    tags,
  } = accommodation

  // console.log(equipments)

  return (
    <div className="main-wrapper-accommodations">
      <Carrousel data={pictures} alt={title} />
      <section>
        <div className="content-wrapper">
          <div className="left-content">
            <h1 className="title-content">{title}</h1>
            <h2 className="location-content">{location}</h2>
            <div className="tags-wrapper">
              <Tag value={tags} />
            </div>
          </div>
          <div className="right-content">
            <div className="host-wrapper">
              <h3 className="host-name">{host.name}</h3>
              <img src={host.picture} alt="host" className="host-picture" />
            </div>
            <div className="rating-wrapper">
              <Rating value={rating} />
            </div>
          </div>
        </div>
        <div className="dropdown-wrapper">
          <Dropdown
            title="Description"
            content={description}
            styleSpec="accommodation-"
          />
          <Dropdown
            title="Equipement"
            content={equipments}
            styleSpec="accommodation-"
          />
        </div>
      </section>
    </div>
  )
}

export default Accommodations

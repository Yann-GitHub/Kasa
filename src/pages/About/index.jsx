import { useState, useEffect } from 'react'
// import Card from '../../components/Card'
import Banner from '../../components/Banner'
import Dropdown from '../../components/Dropdown'
// import Loader from '../../components/Loader'
// import { fetchData } from '../../services/FetchData'
// import AccommodationsData from '../../data/logements.json'
import '../../style/pages/About.css'

function About() {
  // const [isDataLoading, setDataLoading] = useState(false)
  // const [error, setError] = useState(false)
  // const [accommodationsData, setAccommodationsData] = useState([])

  // useEffect(() => {
  //   async function getAccommodationsData() {
  //     setDataLoading(true)
  //     try {
  //       const response = await fetch('../../data/logements.json')
  //       const { accommodationsData } = await response.json()
  //       setAccommodationsData(accommodationsData)
  //     } catch (error) {
  //       console.error(error)
  //       setError(true)
  //     } finally {
  //       setDataLoading(false)
  //     }
  //   }
  //   getAccommodationsData()
  // }, [])

  // if (error) {
  //   return <span>Oups il y a eu un problème</span>
  // }

  return (
    <div className="main-wrapper-about">
      <Banner page="about" />
      <section className="section-infos">
        <Dropdown
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        />
        <Dropdown
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Dropdown
          title="Service"
          content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        />
        <Dropdown
          title="Sécurité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </section>
    </div>
  )
}

export default About

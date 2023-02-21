// import { useState, useEffect } from 'react'
import Card from '../../components/Card'
import Banner from '../../components/Banner'
// import Loader from '../../components/Loader'
// import { fetchData } from '../../services/FetchData'
import AccommodationsData from '../../data/logements.json'
import '../../style/pages/Home.css'

function Home() {
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
    <div className="main-wrapper-home">
      <Banner page="home" />
      <section className="gallery">
        {AccommodationsData.map((accommodation, index) => (
          <Card
            key={accommodation.id}
            cover={accommodation.cover}
            title={accommodation.title}
            id={accommodation.id}
          />
        ))}
      </section>
    </div>
  )
}

export default Home

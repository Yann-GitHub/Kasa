import Card from '../../components/Card'
import Banner from '../../components/Banner'
import AccommodationsData from '../../data/logements.json'
import '../../style/pages/Home.css'

function Home() {
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

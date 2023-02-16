import ImgAbout from '../../assets/img_about.png'
import ImgHome from '../../assets/img_home.jpg'
import '../../style/components/Banner.css'

function Banner({ page }) {
  // const page = props.page
  return page === 'home' ? (
    <div className="banner-container">
      <img className="banner-img" src={ImgHome} alt="home" />
      <h1 className="banner-txt">Chez vous, partout et ailleurs</h1>
    </div>
  ) : (
    <div className="banner-container">
      <img className="banner-img" src={ImgAbout} alt="about" />
    </div>
  )
}
export default Banner

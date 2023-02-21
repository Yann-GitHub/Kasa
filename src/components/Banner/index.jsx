import ImgAbout from '../../assets/img_about.png'
import ImgHome from '../../assets/img_home.jpg'
import '../../style/components/Banner.css'

function Banner({ page }) {
  // Displays a banner image and text that varies based on the 'page' prop.
  return page === 'home' ? (
    <div className="banner-container">
      <img className="banner-img" src={ImgHome} alt="home" />
      <h1 className="banner-txt">
        Chez vous,<br className="text-line-break"></br> partout et ailleurs
      </h1>
    </div>
  ) : (
    <div className="banner-container-about">
      <img className="banner-img" src={ImgAbout} alt="about" />
    </div>
  )
}
export default Banner

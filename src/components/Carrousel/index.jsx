import { useState } from 'react'
import '../../style/components/Carrousel.css'
import ArrowLeft from '../../assets/arrow_left.svg'
import ArrowRight from '../../assets/arrow_right.svg'

function Carrousel({ data, title }) {
  const [pictureIndex, setImgIndex] = useState(0)
  // console.log(data.length)

  function handleClickPrevious() {
    setImgIndex(pictureIndex === 0 ? data.length - 1 : pictureIndex - 1)
    //console.log(pictureIndex)
  }

  function handleClickNext() {
    setImgIndex(pictureIndex === data.length - 1 ? 0 : pictureIndex + 1)
    //console.log(pictureIndex)
  }
  return (
    <div className="carrousel">
      <img src={data[pictureIndex]} alt={title} className="carrousel-img" />
      {/*Conditional display of arrows and pagination depending of data length */}
      {data.length > 1 ? (
        <>
          <div className="carrousel-arrows-wrapper">
            <img
              src={ArrowLeft}
              alt="arrow left"
              className="carrousel-arrow-left"
              onClick={handleClickPrevious}
            />
            <img
              src={ArrowRight}
              alt="arrow right"
              className="carrousel-arrow-right"
              onClick={handleClickNext}
            />
          </div>

          <span className="carrousel-counter">
            {pictureIndex + 1}/{data.length}
          </span>
        </>
      ) : null}
    </div>
  )
}

export default Carrousel

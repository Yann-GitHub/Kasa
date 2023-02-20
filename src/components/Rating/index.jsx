import Star from '../../assets/star.svg'
import StarEmpty from '../../assets/star_empty.svg'
import '../../style/components/Rating.css'

function Rating({ value }) {
  const range = [1, 2, 3, 4, 5]

  return (
    <>
      {range.map((rangeElem) =>
        value >= rangeElem ? (
          <img
            key={rangeElem.toString()}
            src={Star}
            alt="star"
            className="star"
          />
        ) : (
          <img
            key={rangeElem.toString()}
            src={StarEmpty}
            alt="star-empty"
            className="star"
          />
        )
      )}
    </>
  )
}
export default Rating

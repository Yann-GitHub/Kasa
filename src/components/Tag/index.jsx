import '../../style/components/Tag.css'

function Tag({ value }) {
  return (
    <>
      {value.map((tag) => (
        <span key="tag" className="tag">
          {tag}
        </span>
      ))}
    </>
  )
}

export default Tag

import { useState } from 'react'
import ArrowUp from '../../assets/arrow_up.svg'
import ArrowDown from '../../assets/arrow_down.svg'
import '../../style/components/Dropdown.css'

function Dropdown({ title, content, styleSpec }) {
  const [isOpen, setIsOpen] = useState(false)
  const chooseArrow = isOpen === true ? ArrowUp : ArrowDown
  // console.log(content)
  return (
    <div className={`${styleSpec}dropdown`}>
      <div className={`${styleSpec}dropdown-header`}>
        <h2 className={`${styleSpec}dropdown-title`}>{title}</h2>
        <img
          src={chooseArrow}
          alt="arrow"
          className={`${styleSpec}dropdown-arrow`}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {/* Conditional display of the content depending of the state and the type of the content */}
      {isOpen ? (
        <div className={`${styleSpec}dropdown-content`}>
          {typeof content === 'string' ? (
            content
          ) : Array.isArray(content) ? (
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}

export default Dropdown

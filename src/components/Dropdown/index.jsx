import { useState } from 'react'
import ArrowUp from '../../assets/arrow_up.svg'
import ArrowDown from '../../assets/arrow_down.svg'
import '../../style/components/Dropdown.css'

function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="dropdown">
      <div className="dropdown-header">
        <h2 className="dropdown-title">{title}</h2>
        <img
          src={isOpen === true ? ArrowUp : ArrowDown}
          alt="arrow-up"
          className="dropdown-arrow"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen ? <div className="dropdown-content">{content}</div> : null}
    </div>
  )
}

export default Dropdown

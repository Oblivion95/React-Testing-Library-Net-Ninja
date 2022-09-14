import './styles/header.css'

import React, { useContext } from 'react'
import { ExpandableContext } from '../../context/Expandable'

const Header = ({ children, className, ...rest }) => {
  const { toggle } = useContext(ExpandableContext);

  const customClassName = `Expandable-trigger ${className}`.trim();
  return <button onClick={toggle} className="Expandable-trigger" {...rest}>{children}</button>
}
export default Header
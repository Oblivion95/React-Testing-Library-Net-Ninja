// Body.js
import { useContext } from 'react'
import { ExpandableContext } from '../../context/Expandable'

const Body = ({ children }) => {
  const { expanded } = useContext(ExpandableContext)
  return expanded ? children : null
}
export default Body
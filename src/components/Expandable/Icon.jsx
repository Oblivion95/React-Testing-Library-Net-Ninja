// Icon.js
import { useContext } from 'react'
import { ExpandableContext } from '../../context/Expandable'

const Icon = () => {
  const { expanded } = useContext(ExpandableContext)
  return expanded ? '-' : '+'
}
export default Icon
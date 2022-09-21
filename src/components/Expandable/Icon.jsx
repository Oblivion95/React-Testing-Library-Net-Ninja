// Icon.js
import { useContext } from 'react'
import { ExpandableContext } from '../../context/Expandable';
import './icon.css';

const Icon = ({ className = '', ...rest }) => {
  const { expanded } = useContext(ExpandableContext)
  const extendedClassName = ['Expandable-icon', className].join(' ');

  return (
    <span className={extendedClassName} {...rest}>
      {expanded ? '-' : '+'}
    </span>
  );
}
export default Icon
// Body.js
import { useContext } from 'react'
import { ExpandableContext } from '../../context/Expandable'
import './styles/body.css';

const Body = ({ children, ...rest }) => {
  const { expanded } = useContext(ExpandableContext);
  const { className, ...restProps } = rest;
  const extendedClassName = ['Expandable-panel', className].filter(Boolean).join('');

  return expanded && (
    <>
      <div className={extendedClassName} {...restProps}>

        {children}
      </div>
    </>
  );
}
export default Body
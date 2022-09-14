import React, { createContext, useState, useCallback, useRef, useEffect, useMemo } from 'react'
import './styles.css'

export const ExpandableContext = createContext()
const { Provider } = ExpandableContext

const Expandable = ({ children, onExpand, className = '', ...rest }) => {
  const [expanded, setExpanded] = useState(false);

  const extendedClassName = ['Expandable', className].join(' ');
  const toggle = useCallback(
    () => setExpanded(prevExpanded => !prevExpanded),
    []
  )
  const componentJustMounted = useRef(true)
  useEffect(
    () => {
    if (!componentJustMounted.current) {
        onExpand?.(expanded)
    }
     componentJustMounted.current = false
    },
    [expanded]
  )
  const value = useMemo(
   () => ({ expanded, toggle }), 
   [expanded, toggle]
  )
  return (
    <Provider value={value}>
      <div className={extendedClassName} {...rest}>
        {children}
      </div>
    </Provider>
  )
}

export default Expandable
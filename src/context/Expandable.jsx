import React, { createContext, useRef, useEffect, useMemo } from 'react'
import useExpanded from '../shared/hooks/useExpanded'
import './styles.css'

export const ExpandableContext = createContext()
const { Provider } = ExpandableContext

const Expandable = ({ children, className = '', shouldExpand, onExpand, ...rest }) => {
  const { expanded, toggle } = useExpanded();

  const isExpandControlled = shouldExpand !== undefined;

  const getState = isExpandControlled ? shouldExpand : expanded
  const getToggle = isExpandControlled ? onExpand : toggle;

  const extendedClassName = ['Expandable', className].join(' ');
  const componentJustMounted = useRef(true)
  useEffect(
    () => {
      if (!componentJustMounted.current && !isExpandControlled) {
        onExpand?.(expanded)
        componentJustMounted.current = false
      }
    },
    [expanded, isExpandControlled, onExpand]
  )
  const value = useMemo(
    () => ({ expanded: getState, toggle: getToggle }), 
    [getToggle, getState]
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
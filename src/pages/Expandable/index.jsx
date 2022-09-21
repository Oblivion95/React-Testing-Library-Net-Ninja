import { useState } from 'react';
import '../../components/Expandable';

import Expandable from '../../context/Expandable'

const information = [
  {
    header: 'Why everyone should live forrever',
    note: 'This is highly sensitive information ... !!!!'
  },
  {
    header: 'The internet disappears',
    note:
      'I just uncovered the biggest threat...'
  },
  {
    header: 'The truth about Elon musk and Mars!',
    note: 'Nobody tells you this...'
  }
]

const ExpandableApp = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const onExpand = evt => {setActiveIndex(evt.target.dataset.index)}

  return (
  <div className='App'>
    {information.map(({ header, note }, index) => (
        <Expandable
          shouldExpand={index == activeIndex}
          onExpand={onExpand}
          key={index}
        >
          <Expandable.Header
            data-index={index}
            style={{ color: 'red', border: '1px solid teal' }}
          >
            {header}
          </Expandable.Header >
          <Expandable.Icon />
          <Expandable.Body>{note}</Expandable.Body>
        </Expandable>
    ))}
  </div>
)}

export default ExpandableApp;

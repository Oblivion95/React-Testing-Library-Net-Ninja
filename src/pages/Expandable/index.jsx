import '../../components/Expandable';

import Expandable from '../../context/Expandable'

const ExpandableApp = () => {
  return (
    <div className='App'>
      <Expandable>
        <Expandable.Header>React hooks</Expandable.Header>
        <Expandable.Icon />
        <Expandable.Body>Hooks are awesome</Expandable.Body>
      </Expandable> 
    </div>
  )
}

export default ExpandableApp;

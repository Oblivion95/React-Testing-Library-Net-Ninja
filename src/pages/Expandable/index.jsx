import '../../components/Expandable';

import Expandable from '../../context/Expandable'

const ExpandableApp = () => {
  return (
    <div className='App'>
      <Expandable>
        <Expandable.Header style={{ color: 'red', border: '1px solid teal' }}>
          React hooks
        </Expandable.Header>
        <Expandable.Icon />
        <Expandable.Body>
        <img
                  src='/api/collection/10370001/4597752283529216/page/5195905143668736/image/4691607934730240'
                  style={{ width: '250px' }}
                  alt='reintroducing react book cover'
              />
              <p style={{ opacity: 0.7 }}>
                This book is so amazing! <br />
              <a
                href='https://leanpub.com/reintroducing-react'
                target='_blank'
                rel='noopener noreferrer'
                >
                  Go get it now.
              </a>
            </p>
        </Expandable.Body>
      </Expandable>
    </div>
  )
}

export default ExpandableApp;

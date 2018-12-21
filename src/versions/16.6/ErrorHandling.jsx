import React from 'react'
import PropTypes from 'prop-types'

import Section from '../../diagramElements/Section'
import Method from '../../diagramElements/Method'
import Arrow from '../../diagramElements/Arrow'
import mergeClassNames from 'merge-class-names'

const ErrorHandling = ({ advanced }) => {
  const gridColumn = '2 /span 5'
  const row = advanced ? 24 : 15
  const gridRow = `${row} / span 7`
  return (
    <>
      <section
        className={mergeClassNames('Section', advanced && 'Section__error')}
        style={{
          gridColumn,
          gridRow
        }}
      >
        <h3 className='Section__title'>ErrorHandling</h3>
        <div className='Initiator Initiator--hasLink'>
          <a
            href='https://5bcf5863c6aed64970d6de5b--reactjs.netlify.com/docs/react-component.html#componentdidcatch'
            target='_blank'
          >
            componentDidCatch
          </a>
        </div>
      </section>
    </>
    // <Section
    //   advanced={advanced}
    //   name='ErrorHandling'
    //   row={advanced ? 24 : 15}
    //   col={1}
    //   colspan={5}
    // >
    //   <Arrow col={1} />
    //   <Method
    //     main
    //     name='componentDidCatch'
    //     docname='componentDidCatch'
    //     type='commit'
    //     row={advanced ? 9 : 6}
    //   />
    // </Section>
  )
}

ErrorHandling.propTypes = {
  advanced: PropTypes.bool
}

export default ErrorHandling

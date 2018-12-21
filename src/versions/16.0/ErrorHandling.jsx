import React from 'react'
import PropTypes from 'prop-types'

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
        <div className='Method Method--hasLink pre-commit'>
          <a
            href='https://5b05c94e0733d530fd1fafe0--reactjs.netlify.com/docs/react-component.html#componentdidcatch'
            target='_blank'
          >
            componentDidCatch
          </a>
        </div>
      </section>
    </>
  )
}

ErrorHandling.propTypes = {
  advanced: PropTypes.bool
}

export default ErrorHandling

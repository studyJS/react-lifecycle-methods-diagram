import React from 'react';
import PropTypes from 'prop-types';

import mergeClassNames from 'merge-class-names';

const ErrorHandling = ({ advanced }) => {
  const gridColumn = '2 /span 5';
  const row = advanced ? 25 : 15;
  const gridRow = `${row} / span 7`;
  return (
    <>
      <section
        className={mergeClassNames('Section Section__error')}
        style={{
          gridColumn,
          gridRow,
        }}
      >
        <h3 className="Section__title">ErrorHandling</h3>
        <div className="Method Method--hasLink pre-commit">
          <a
            href="https://5b90c17ac9659241e7f4c938--reactjs.netlify.com/docs/react-component.html#componentdidcatch"
            // eslint-disable-next-line react/jsx-no-target-blank
            target="_blank"
          >
            componentDidCatch
          </a>
        </div>
      </section>
    </>
  );
};

ErrorHandling.propTypes = {
  advanced: PropTypes.bool,
};

export default ErrorHandling;

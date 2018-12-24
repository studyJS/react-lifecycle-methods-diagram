/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import PropTypes from 'prop-types';

import mergeClassNames from 'merge-class-names';

const ErrorHandling = ({ advanced }) => {
  const gridColumn = '2 /span 5';
  const row = advanced ? 25 : 15;
  const gridRow = `${row} / span 9`;
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
            href="https://reactjs.org/docs/react-component.html#static-getderivedstatefromerror"
            target="_blank"
          >
            static getDerivedStateFromError
          </a>
          <br />
          <br />
          <a
            href="https://5bcf5863c6aed64970d6de5b--reactjs.netlify.com/docs/react-component.html#componentdidcatch"
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

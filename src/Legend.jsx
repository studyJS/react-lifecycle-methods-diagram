import React from 'react';
import PropTypes from 'prop-types';

import Phase from './legendElements/Phase';

const Legend = ({ advanced, reactVersion }) => {
  let rowRenderRowspan = 4;
  let commitRowspan = 2;
  if (reactVersion === '16.3_unsafe') {
    rowRenderRowspan = 6;
    commitRowspan = 2;
  } else if (reactVersion === '16') {
    rowRenderRowspan = 5;
    commitRowspan = 2;
  }
  const ret = advanced ? (
    <>
      <h2 className="hidden">Phases</h2>
      <Phase name="Render" row={1} rowspan={rowRenderRowspan}>
        Pure and has no side effects. May be paused, aborted or restarted by
        React.
      </Phase>
      <Phase name="Pre-commit" row={rowRenderRowspan + 1} rowspan={1}>
        Can read the DOM.
      </Phase>
      <Phase
        last
        name="Commit"
        row={rowRenderRowspan + 2}
        rowspan={commitRowspan}
      >
        Can work with DOM, run side effects, schedule updates.
      </Phase>
    </>
  ) : (
    <>
      <h2 className="hidden">Phases</h2>
      <Phase name="Render" row={1} rowspan={2}>
        Pure and has no side effects. May be paused, aborted or restarted by
        React.
      </Phase>
      <Phase last name="Commit" row={3} rowspan={2}>
        Can work with DOM, run side effects, schedule updates.
      </Phase>
    </>
  );
  return ret;
};

Legend.propTypes = {
  advanced: PropTypes.bool,
};

export default Legend;

import React from 'react';
import PropTypes from 'prop-types';

import Section from '../../diagramElements/Section';
import Subsection from '../../diagramElements/Subsection';
import Initiator from '../../diagramElements/Initiator';
import Method from '../../diagramElements/Method';
import Arrow from '../../diagramElements/Arrow';

const Updating = ({ advanced }) => (advanced ? (
    <Section advanced name='Updating' col={2} colspan={3} area={8}>
      <Subsection col={2}>
        <Initiator secondary name='New props' row={1} />
        <Arrow />
        <Method
          name='componentWillReceiveProps'
          docname='componentWillReceiveProps'
          type='render'
          row={2}
        />
        <Arrow />
        <Method
          name='shouldComponentUpdate'
          docname='shouldcomponentupdate'
          type='render'
          row={3}
          colspan={2}
        />
        <Arrow withAlt colspan={2} />
        <Method
          name='componentWillUpdate'
          docname='componentWillUpdate'
          type='render'
          row={4}
          colspan={2}
        />
        <Arrow colspan={2} />
        <Method
          main
          name='render'
          docname='render'
          type='render'
          col={1}
          row={5}
          colspan={4}
        />

        <Arrow solid col={3} />
        <Method
          secondary
          name='React updates DOM and refs'
          type='pre-commit'
          col={1}
          row={7}
          colspan={4}
        />
        <Arrow solid col={3} />
        <Method
          main
          name='componentDidUpdate'
          docname='componentdidupdate'
          type='commit'
          colspan={3}
          row={8}
        />
      </Subsection>

      <Subsection col={3}>
        <Initiator name='setState()' docname='setstate' row={1} />
        <Arrow />
        <Method
          name='shouldComponentUpdate'
          docname='shouldcomponentupdate'
          type='render'
          col={2}
          row={3}
          colspan={2}
        />

        <Method
          main
          name='render'
          docname='render'
          type='render'
          col={1}
          row={5}
          colspan={4}
        />
        <Arrow />

        <Method
          secondary
          name='React updates DOM and refs'
          type='pre-commit'
          col={1}
          row={7}
          colspan={4}
        />
        <Method
          main
          name='componentDidUpdate'
          docname='componentdidupdate'
          type='commit'
          col={2}
          colspan={3}
          row={8}
        />
      </Subsection>

      <Subsection col={4}>
        <Initiator name='forceUpdate()' docname='forceupdate' row={1} />

        <Arrow />
        <Method
          main
          name='render'
          docname='render'
          type='render'
          col={1}
          row={5}
          colspan={4}
        />

        <Method
          secondary
          name='React updates DOM and refs'
          type='pre-commit'
          col={1}
          row={7}
          colspan={4}
        />
        <Method
          main
          name='componentDidUpdate'
          docname='componentdidupdate'
          type='commit'
          col={2}
          colspan={3}
          row={8}
        />
      </Subsection>
    </Section>
  ) : (
    <Section name='Updating' col={2} colspan={3}>
      <Subsection col={2}>
        <Initiator secondary name='New props' row={1} />
        <Arrow />
        <Method
          main
          name='render'
          docname='render'
          type='render'
          col={1}
          row={2}
          colspan={4}
        />
        <Method
          secondary
          name='React updates DOM and refs'
          type='pre-commit'
          col={1}
          row={3}
          colspan={4}
        />
        <Arrow solid col={3} />
        <Method
          main
          name='componentDidUpdate'
          docname='componentdidupdate'
          type='commit'
          colspan={3}
          row={4}
        />
      </Subsection>

      <Subsection col={3}>
        <Initiator name='setState()' docname='setstate' row={1} />
        <Arrow />
        <Method
          main
          name='render'
          docname='render'
          type='render'
          col={1}
          row={2}
          colspan={4}
        />
        <Arrow />
        <Method
          secondary
          name='React updates DOM and refs'
          type='pre-commit'
          col={1}
          row={3}
          colspan={4}
        />
        <Method
          main
          name='componentDidUpdate'
          docname='componentdidupdate'
          type='commit'
          col={2}
          colspan={3}
          row={4}
        />
      </Subsection>

      <Subsection col={4}>
        <Initiator name='forceUpdate()' docname='forceupdate' row={1} />
        <Arrow />
        <Method
          main
          name='render'
          docname='render'
          type='render'
          col={1}
          row={2}
          colspan={4}
        />
        <Method
          secondary
          name='React updates DOM and refs'
          type='pre-commit'
          col={1}
          row={3}
          colspan={4}
        />
        <Method
          main
          name='componentDidUpdate'
          docname='componentdidupdate'
          type='commit'
          col={2}
          colspan={3}
          row={4}
        />
      </Subsection>
    </Section>
  ));

Updating.propTypes = {
  advanced: PropTypes.bool,
};

export default Updating;

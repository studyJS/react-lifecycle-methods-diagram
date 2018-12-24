import React from 'react';
import PropTypes from 'prop-types';

import Section from '../../diagramElements/Section';
import Method from '../../diagramElements/Method';
import Arrow from '../../diagramElements/Arrow';

const Mounting = ({ advanced }) => (advanced ? (
    <Section advanced name='Mounting' col={1} area={8}>
      <Arrow />
      <Method
        main
        name='constructor'
        docname='constructor'
        type='render'
        row={1}
      />
      <Arrow />
      <Method
        name='componentWillMount'
        docname='componentWillMount'
        type='render'
        row={2}
      />
      <Arrow />
      <Method
        main
        name='render'
        docname='render'
        type='render'
        row={5}
        colspan={4}
      />
      <Arrow />
      <Method
        secondary
        name='React updates DOM and refs'
        type='pre-commit'
        row={7}
        colspan={4}
      />
      <Arrow solid />
      <Method
        main
        name='componentDidMount'
        docname='componentdidmount'
        type='commit'
        row={8}
      />
    </Section>
  ) : (
    <Section name='Mounting' col={1}>
      <Arrow />
      <Method
        main
        name='constructor'
        docname='constructor'
        type='render'
        row={1}
      />
      <Arrow />
      <Method
        main
        name='render'
        docname='render'
        type='render'
        row={2}
        colspan={4}
      />
      <Arrow />
      <Method
        secondary
        name='React updates DOM and refs'
        type='pre-commit'
        row={3}
        colspan={4}
      />
      <Arrow solid />
      <Method
        main
        name='componentDidMount'
        docname='componentdidmount'
        type='commit'
        row={4}
      />
    </Section>
  ));

Mounting.propTypes = {
  advanced: PropTypes.bool,
};

export default Mounting;

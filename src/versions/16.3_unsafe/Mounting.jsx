import React from 'react'
import PropTypes from 'prop-types'

import Section from '../../diagramElements/Section'
import Method from '../../diagramElements/Method'
import Arrow from '../../diagramElements/Arrow'

const Mounting = ({ advanced }) =>
  advanced ? (
    <Section advanced name='Mounting' col={1} area={9}>
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
        name='UNSAFE_componentWillMount'
        docname='unsafe_componentwillmount'
        type='render'
        row={4}
        isDeprecated
      />
      <Arrow />
      <Method
        main
        name='render'
        docname='render'
        type='render'
        row={6}
        colspan={4}
      />
      <Arrow />
      <Method
        secondary
        name='React updates DOM and refs'
        type='pre-commit'
        row={8}
        colspan={4}
      />
      <Arrow solid />
      <Method
        main
        name='componentDidMount'
        docname='componentdidmount'
        type='commit'
        row={9}
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
  )

Mounting.propTypes = {
  advanced: PropTypes.bool
}

export default Mounting

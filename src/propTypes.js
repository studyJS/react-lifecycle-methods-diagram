import PropTypes from 'prop-types'

export const supportedReactVersions = ['16.0', '16.3', '16.4', '16.6']

export const isReactVersion = PropTypes.oneOf(supportedReactVersions)

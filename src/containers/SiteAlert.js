// @flow

import { connect } from 'react-redux'

import Alert from '../components/Alert'

const mapStateToProps = (state: Object) => ({
  type: state.alert.type,
  message: state.alert.message,
})

const SiteAlert = connect(
  mapStateToProps,
)(Alert)

export default SiteAlert

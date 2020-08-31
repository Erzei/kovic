import { connect } from 'react-redux'
import { appNameActions } from '../../lib/redux/application/application-actions'
import Home from '../../components/home/Home'

const {
  RESET_NAME,
  UPDATE_NAME
} = appNameActions

const mapStateToProps = state => ({
  appName: state.application.name
})

const mapDispatchToProps = dispatch => ({
  updateAppName(name) {
    dispatch({
      type: UPDATE_NAME,
      payload: {
        name
      }
    })
  },
  resetAppName() {
    dispatch({
      type: RESET_NAME
    })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

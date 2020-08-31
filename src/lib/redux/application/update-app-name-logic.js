import { createLogic } from "redux-logic";
import { appNameActions } from './application-actions'

const {
  UPDATE_NAME,
  UPDATE_NAME_SUCCESS
} = appNameActions

export default createLogic({
  type: UPDATE_NAME,
  latest: true,
  process({ action }, dispatch, done) {
    dispatch({
      type: UPDATE_NAME_SUCCESS,
      payload: {
        name: action.payload.name
      }
    })

    done()
  }
})

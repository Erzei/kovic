import { appNameActions } from './application-actions'

const {
  RESET_NAME,
  UPDATE_NAME_SUCCESS
} = appNameActions

export default (state = {}, action) => {
  switch (action.type) {
    case RESET_NAME: {
      return {
        ...state,
        name: 'Kovic'
      }
    }
    case UPDATE_NAME_SUCCESS: {
      return {
        ...state,
        name: action.payload.name
      }
    }
    default: {
      return state
    }
  }
}

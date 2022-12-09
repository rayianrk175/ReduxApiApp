import { SUCCESS, ERROR, LOADING, NONE } from '../constants/reduxConstant'

export default function RootActions(state = {}, action) {
  switch (action.type) {
    case LOADING:
      return Object.assign({}, state, { status: LOADING });
    case SUCCESS:
      return Object.assign({}, state, { status: SUCCESS, value: action.payload });
    case ERROR:
      return Object.assign({}, state, { status: ERROR, error: action.payload });
    default:
      return Object.assign({}, state, { status: NONE });
  }
}
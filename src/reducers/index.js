import { FETCH_FLIGHTS } from "../actions/fetch";
import { AppIm } from './config'

export default (state = new AppIm(), action) => {
  switch (action.type) {
    case FETCH_FLIGHTS:
    return state.set('flights', action.payload)

    default:
      return state;
  }
};

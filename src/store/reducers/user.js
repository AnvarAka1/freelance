import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
const initialState = {
  name: null,
  userId: null,
  error: null,
  loading: false,
  isUserShown: false
};

const changeUser = (state, action) => {
  return updateObject(state, { isUserShown: !state.isUserShown });
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_USER:
      return changeUser(state, action);
    default:
      return state;
  }
};
export default reducer;

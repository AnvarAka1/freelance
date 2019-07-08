import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
const initialState = {
  name: null,
  userId: null,
  error: null,
  loading: false,
  isUser: false
};

const changeUser = (state, action) => {
  return updateObject(state, { isUser: !state.isUser });
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

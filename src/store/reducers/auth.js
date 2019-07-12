import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  token: true,
  userId: null,
  error: null,
  loading: false
};

const authSuccess = (state, action) => {
  return updateObject(state, { token: true });
};
const authFail = (state, action) => {};
const authStart = (state, action) => {};
const authLogout = (state, action) => {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    default:
      return state;
  }
};
export default reducer;

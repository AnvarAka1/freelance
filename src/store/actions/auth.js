import * as actionTypes from "./actionTypes";
import axios from "../../axios-db";
export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};
export const authSuccess = () => {
  return {
    type: actionTypes.AUTH_SUCCESS
  };
};
export const authFail = () => {
  return {
    type: actionTypes.AUTH_FAIL
  };
};
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("userId");
  return { type: actionTypes.AUTH_LOGOUT };
};
export const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 3600);
  };
};
export const auth = (email, password, isSignup) => {
  return dispatch => {
    dispatch(authStart());

    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    let url = "signup";
    if (!isSignup) {
      url = "signin";
    }
    axios
      .post(url, authData)
      .then(res => {
        const expirationDate = new Date(
          new Date().getTime() + res.data.expiresIn * 1000
        );
        localStorage.setItem("token", res.data.idToken);
        localStorage.setItem("expirationData", expirationDate);
        localStorage.setItem("userId", res.data.localId);
        dispatch(authSuccess(res.data.idToken, res.data.localId));
        dispatch(checkAuthTimeout(res.data.expiresIn));
      })
      .catch(error => {
        dispatch(authFail(error.res.data.error));
      });
  };
};

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (new Date() > expirationDate) {
        dispatch(logout());
      } else {
        const userId = localStorage.getItem("userId");
        dispatch(authSuccess(token, userId));
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};

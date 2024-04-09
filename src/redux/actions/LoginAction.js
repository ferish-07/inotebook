import { postApiRequest } from "../ServiceManager";
import { LOGIN_SUCCESS, REGISTER_SUCCESS, RESET } from "../Types";

export const loginAction = (url, params) => {
  return (dispatch) =>
    postApiRequest({ url, params, dispatch, actionType: LOGIN_SUCCESS });
};
export const RegisterAction = (url, params) => {
  return (dispatch) =>
    postApiRequest({ url, params, dispatch, actionType: REGISTER_SUCCESS });
};

export const resetAction = (type = "default") => {
  return (dispatch) => dispatch({ type: RESET, payload: type });
};

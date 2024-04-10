import { postApiRequest } from "../ServiceManager";
import { ADD_NOTES_SUCCESS, RESET } from "../Types";

export const addNotesAction = (url, params) => {
  return (dispatch) =>
    postApiRequest({ url, params, dispatch, actionType: ADD_NOTES_SUCCESS });
};

export const resetAction = (type = "default") => {
  return (dispatch) => dispatch({ type: RESET, payload: type });
};

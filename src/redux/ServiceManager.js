import axios from "axios";

export const postApiRequest = ({ url, params, dispatch, actionType }) => {
  //   axios.post(url);
  return axios.post(url, params, { headers: {} }).then((response) => {
    dispatch({ type: actionType, payload: response });
  });
};

import axios from "axios";

export const postApiRequest = ({ url, params, dispatch, actionType }) => {
  //   axios.post(url);
  console.log("------TOKEN SERVICE-------", localStorage.getItem("token"));
  return axios
    .post(url, params, {
      headers: { token: JSON.parse(localStorage.getItem("token")) },
    })
    .then((response) => {
      dispatch({ type: actionType, payload: response });
    })
    .catch((err) => {
      dispatch({ type: actionType, payload: err.response });
    });
};

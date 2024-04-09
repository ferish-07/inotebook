import { LOGIN_SUCCESS, REGISTER_SUCCESS, RESET } from "../Types";

const INITIAL_STATE = {
  loginResponse: null,
  registerResponse: null,
};

export default (state = INITIAL_STATE, action) => {
  console.log("ACTIONSSSS", action);

  switch (action.type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loginResponse: action.payload.data,
      };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        registerResponse: action.payload.data,
      };
    }

    case RESET: {
      switch (action.payload) {
        case LOGIN_SUCCESS: {
          return { ...state, loginResponse: null };
        }
      }
    }
    default:
      return state;
  }
};

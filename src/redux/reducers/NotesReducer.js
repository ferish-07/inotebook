import { ADD_NOTES_SUCCESS, RESET } from "../Types";
const INITIAL_STATE = {
  addNotesResponse: null,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_NOTES_SUCCESS:
      return {
        ...state,
        addNotesResponse: action.payload.data,
      };

    case RESET: {
      switch (action.payload) {
        case ADD_NOTES_SUCCESS:
          return {
            ...state,
            addNotesResponse: null,
          };
      }
    }

    default:
      return state;
  }
};

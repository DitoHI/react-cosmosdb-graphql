import { FETCH_ME } from '../constants/actionTypes';

const initialState = {
  me: {},
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_ME:
      return {
        ...state,
        me: action.payload,
      };
    default:
      return state;
  }
};

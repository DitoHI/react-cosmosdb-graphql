import { ACTIVE_BLOG, FETCH_BLOGS } from '../actions/types';

const initialState = {
  items: [],
};

export default (state = initialState, action: any) => {
  if (action.type === FETCH_BLOGS) {
    return {
      ...state,
      items: action.payload,
    };
  }

  return state;
};

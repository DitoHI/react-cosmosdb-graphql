import { ACTIVE_BLOG, FETCH_BLOGS } from '../actions/types';

const initialState = {
  items: [],
  item: {},
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_BLOGS:
      return {
        ...state,
        items: action.payload,
      };
    case ACTIVE_BLOG:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
};

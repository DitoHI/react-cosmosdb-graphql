import { ACTIVE_BLOG, FETCH_BLOGS } from '../actions/types';
import typesMod from '../actions/typesMod';

const initialState = {
  items: [],
  pagination: {
    start: 0,
    end: 5,
  },
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_BLOGS:
      return {
        ...state,
        items: action.payload,
      };
    case typesMod.UP_PAGINATION:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          end: state.pagination.end + 5,
        },
      };
    case typesMod.RESTORE_PAGINATION:
      return {
        ...state,
        pagination: initialState.pagination,
      };
    default:
      return state;
  }
};

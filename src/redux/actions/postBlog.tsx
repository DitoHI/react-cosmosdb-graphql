import { ACTIVE_BLOG, FETCH_BLOGS } from './types';
import IBlog from '../../custom/interface/IBlog';

export const fetchBlogs = (blogs: IBlog[]) => (dispatch: any) => {
  dispatch({
    type: FETCH_BLOGS,
    payload: blogs,
  });
};

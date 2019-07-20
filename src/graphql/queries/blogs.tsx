import { default as gql } from 'graphql-tag';
import { blogFragment } from '../fragments/blogFragment';

export const blogsQuery = gql`
  query Blogs($id: String, $startAt: Int, $endAt: Int, $tags: [String]) {
    blogs(id: $id, startAt: $startAt, endAt: $endAt, tags: $tags) {
      ...BlogPage
    }
  }
  ${blogFragment}
`;

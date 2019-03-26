import { default as gql } from 'graphql-tag';
import { blogFragment } from '../fragments/blogFragment';

export const blogsQuery = gql`
      query Blogs($id: String, $startAt: Int, $endAt: Int, $hastag: String) {
        blogs(id: $id, startAt: $startAt, endAt: $endAt, hastag: $hastag) {
          ...BlogPage
        }
      }
      ${ blogFragment }
  `;

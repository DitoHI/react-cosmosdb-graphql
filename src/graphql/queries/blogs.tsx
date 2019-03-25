import { default as gql } from 'graphql-tag';
import { blogFragment } from '../fragments/blogFragment';

export const blogs = gql`
      query Blogs($startAt: Int, $endAt: Int, $hastag: String) {
        blogs(startAt: $startAt, endAt: $endAt, hastag: $hastag) {
          ...BlogPage
        }
      }
      ${ blogFragment }
  `;

import { gql } from 'apollo-boost';
import { userFragment } from '../fragments/userFragment';

export const meQuery = gql`
  query Me($sort: Sort) {
    me(sort: $sort) {
      ...UserPage
    }
  }
  ${userFragment}
`;

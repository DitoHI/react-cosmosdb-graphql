import { gql } from 'apollo-boost';

export const blogFragment = gql`
  fragment BlogPage on Blog {
    id
    user
    title
    content
    lastEdited
    isDeleted
    blobUri
    blobName
    positionIndex
    tags
  }
`;

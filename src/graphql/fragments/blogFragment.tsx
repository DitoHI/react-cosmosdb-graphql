import { gql } from 'apollo-boost';

export const blogFragment = gql`
  fragment BlogPage on Blog {
    id
    user
    title
    titlePreview
    content
    contentPreview
    lastEdited
    isDeleted
    blobUri
    blobName
    positionIndex
    tags
  }
`;

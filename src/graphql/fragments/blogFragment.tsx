import { gql } from 'apollo-boost';

export const blogFragment = gql`
  fragment BlogPage on Blog {
    id
    user
    title
    titleDash
    titlePreview
    content
    contentPreview
    lastEdited
    isDeleted
    blobUri
    blobName
    positionIndex
    tags
    quote
  }
`;

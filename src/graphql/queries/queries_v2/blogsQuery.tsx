import { default as gql } from 'graphql-tag';

export default {
  getBlogById: gql`
    query getBlogById($id: String!) {
      getBlogById(id: $id) {
        id
        title
        content
        lastEdited
        blobUri
        blobName
        tags
        positionIndex
        user
        quote
      }
    }
  `,
  getBlobByPositionIndex: gql`
    query getBlogByPosition($index: Int!, $operator: String!) {
      getBlogByPositionIndex(index: $index, operator: $operator) {
        id
        positionIndex
        title
      }
    }
  `,
  getBlogByTitleDash: gql`
    query getBlogByTitleDash($titleDash: String!) {
      getBlogByTitleDash(titleDash: $titleDash) {
        id
        title
        content
        lastEdited
        blobUri
        blobName
        tags
        positionIndex
        user
        quote
      }
    }
  `,
};

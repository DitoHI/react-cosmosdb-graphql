import { gql } from 'apollo-boost';

export const userFragment = gql`
  fragment UserPage on User {
    id
    username
    password
    name
    email
    occupation
    phone
    address
    website
    dateBirth
    skill
    blobUri
    education {
      dateStart
      dateEnd
      location
      name
      degree
      major
      description
    }
    experience {
      name
      role
      description
      dateStart
      dateEnd
      blobUri
    }
    project {
      name
      role
      techStacks
      description
      link
      blobUri
    }
  }
`;

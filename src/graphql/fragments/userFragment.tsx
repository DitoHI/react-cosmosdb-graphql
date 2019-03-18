import { gql } from 'apollo-boost';

export const userFragment = gql`
    fragment UserPage on User {
        id
        name
        email
        occupation
        phone
        address
        website
        dateBirth
        skill
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
        }
        project {
          name
          role
          techStacks
          description
          link
        }
    }
`;

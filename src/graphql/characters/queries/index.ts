import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query getCharacters($page: Int!, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        image
      }
    }
  }
`;

export const GET_SINGLE_CHARACTER = gql`
  query getCharacter($id: ID!) {
    character(id: $id) {
      image
      location {
        name
      }
      name
      gender
      species
      status
      episode {
        episode
        name
        created
      }
    }
  }
`;

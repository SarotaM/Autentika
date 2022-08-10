import { GetStaticPropsResult } from 'next';

import client from '../../apolloConfig';
import { GET_CHARACTERS } from '../../graphql';
import {
  ICharactersResponse,
  ICharactersData,
} from '../../graphql/characters/types';

export const getStaticProps = async (): Promise<
  GetStaticPropsResult<ICharactersData>
> => {
  const { data } = await client.query<ICharactersResponse>({
    query: GET_CHARACTERS,
    variables: {
      page: 1,
    },
  });

  return {
    props: data.characters,
  };
};

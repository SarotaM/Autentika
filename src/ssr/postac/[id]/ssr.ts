import { GetStaticPropsResult, GetServerSideProps } from 'next';

import client from '../../../apolloConfig';
import { GET_SINGLE_CHARACTER } from '../../../graphql';
import {
  ICharacterResponse,
  ISingleCharacter,
  ICharacterVariables,
} from '../../../graphql/characters/types';

export const getServerSideProps: GetServerSideProps = async (
  context
): Promise<GetStaticPropsResult<ISingleCharacter>> => {
  const pageId = context.query.id;
  const { data } = await client.query<ICharacterResponse, ICharacterVariables>({
    query: GET_SINGLE_CHARACTER,
    variables: {
      id: Number(pageId),
    },
  });

  return {
    props: data.character,
  };
};

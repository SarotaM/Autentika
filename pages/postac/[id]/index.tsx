import type { NextPage, InferGetServerSidePropsType } from 'next';
import { useEffect, useContext } from 'react';

import PageHead from '../../../src/components/layout/PageHead';
import { getServerSideProps } from '../../../src/ssr/postac/[id]/ssr';
import { GlobalContext } from '../../../src/store';
import { RESET_CHARACTERS, SET_CHARACTER } from '../../../src/store/constants';
import PageContent from '../../../src/components/layout/PageContent';
import CharacterDetails from '../../../src/components/Characters/CharacterDetails';

export { getServerSideProps } from '../../../src/ssr/postac/[id]/ssr';

const DESCRIPTION_TEXT = 'Postaci z uniwersum Rick and Morty';

const CharacterPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => {
  const { dispatch } = useContext(GlobalContext);

  useEffect(() => {
    dispatch({ type: RESET_CHARACTERS });
    dispatch({ type: SET_CHARACTER, payload: props });
  }, [props, dispatch]);

  return (
    <PageContent>
      <PageHead title={props.name} description={DESCRIPTION_TEXT} />
      <CharacterDetails />
    </PageContent>
  );
};

export default CharacterPage;

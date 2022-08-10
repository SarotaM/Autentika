import { useContext, useEffect, useRef } from 'react';
import type { NextPage, InferGetStaticPropsType } from 'next';
import { useLazyQuery } from '@apollo/client';

import { getStaticProps } from '../src/ssg/index/ssg';
import PageHead from '../src/components/layout/PageHead';
import PageContent from '../src/components/layout/PageContent';
import CharactersList from '../src/components/Characters/CharactersList';
import { GlobalContext } from '../src/store';
import { SET_CHARACTERS } from '../src/store/constants';
import { GET_CHARACTERS } from '../src/graphql';
import {
  ICharactersResponse,
  ICharactersVariables,
} from '../src/graphql/characters/types';
import Loader from '../src/components/reusable/Loader/Loader.component';

export { getStaticProps } from '../src/ssg/index/ssg';

const TITLE_TEXT = 'Lista postaci';
const DESCRIPTION_TEXT = 'Postaci z uniwersum Rick and Morty';

const CharactersListPage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ info, results }) => {
  const { dispatch, state } = useContext(GlobalContext);
  const firstRender = useRef(true);

  const [fetchData, { loading }] = useLazyQuery<
    ICharactersResponse,
    ICharactersVariables
  >(GET_CHARACTERS, {
    onCompleted: (data) => {
      if (data) {
        dispatch({
          type: SET_CHARACTERS,
          payload: {
            results: data.characters.results,
            info: data.characters.info,
          },
        });
      }
    },
  });

  useEffect(() => {
    dispatch({ type: SET_CHARACTERS, payload: { results, info } });
  }, [results, info, dispatch]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;

      return;
    }

    fetchData({
      variables: {
        page: state.characters.page,
        filter: { name: state.characters.search },
      },
    });
  }, [state.characters.page, state.characters.search, fetchData]);

  if (loading) {
    return <Loader />;
  }

  return (
    <PageContent>
      <PageHead title={TITLE_TEXT} description={DESCRIPTION_TEXT} />
      <CharactersList />
    </PageContent>
  );
};

export default CharactersListPage;

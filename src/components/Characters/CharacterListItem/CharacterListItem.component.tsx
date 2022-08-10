import React from 'react';
import Link from 'next/link';

import { ICharacterListItemProps } from './CharacterListItem.types';
import {
  StyledCard,
  StyledCardImage,
  StyledCardTitle,
} from './../../reusable/Card/Card.styles';

const CharacterListItem = ({ character }: ICharacterListItemProps) => {
  return (
    <Link key={character.id} href={`postac/${character.id}`} passHref={true}>
      <StyledCard>
        <StyledCardImage src={character.image} />
        <StyledCardTitle>{character.name}</StyledCardTitle>
      </StyledCard>
    </Link>
  );
};

export default CharacterListItem;

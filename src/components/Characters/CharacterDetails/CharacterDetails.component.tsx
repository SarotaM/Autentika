import React, { useContext } from 'react';
import moment from 'moment';

import { GlobalContext } from '../../../store';
import {
  StyledCard,
  StyledCardImage,
  StyledCardTitle,
  StyledCardDescription,
} from '../../reusable/Card/Card.styles';
import {
  ContainerCharacterDetails,
  EpisodeContainer,
  CardContainer,
} from './CharacterDetails.styles';

const GENDER_TEXT = 'Płeć: ';
const SPECIES_TEXT = 'Gatunek: ';
const STATUS_TEXT = 'Status: ';
const LOCATION_TEXT = 'Lokacja: ';

const CharacterDetails = () => {
  const {
    state: { character },
  } = useContext(GlobalContext);

  return (
    <ContainerCharacterDetails>
      <CardContainer>
        <StyledCard>
          <StyledCardImage src={character.image} />
          <StyledCardTitle>{character.name}</StyledCardTitle>
          <StyledCardDescription>
            {GENDER_TEXT}
            {character.gender}
          </StyledCardDescription>
          <StyledCardDescription>
            {SPECIES_TEXT}
            {character.species}
          </StyledCardDescription>
          <StyledCardDescription>
            {STATUS_TEXT}
            {character.status}
          </StyledCardDescription>
          <StyledCardDescription>
            {LOCATION_TEXT}
            {character.location.name}
          </StyledCardDescription>
        </StyledCard>
      </CardContainer>
      <EpisodeContainer>
        {character.episode.map((episode) => (
          <div key={episode.name}>
            <h3>
              {episode.name} - {episode.episode}
            </h3>
            <p>{moment(episode.created).format('DD.MM.YYYY')}</p>
          </div>
        ))}
      </EpisodeContainer>
    </ContainerCharacterDetails>
  );
};

export default CharacterDetails;

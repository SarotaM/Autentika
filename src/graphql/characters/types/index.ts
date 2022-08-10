export interface ICharacter {
  id: string;
  image: string;
  name: string;
}

export interface IEpisode {
  name: string;
}

export interface ILocation {
  name: string;
}

export interface IInfo {
  count: number;
  next: number | null;
  prev: number | null;
  pages: number;
}

export interface ICharactersData {
  results: ICharacter[];
  info: IInfo;
}

export interface ICharactersResponse {
  characters: ICharactersData;
}

export interface ICharactersVariables {
  page?: number;
  filter?: {
    name?: string;
    status?: string;
    species?: string;
    type?: string;
    gender?: string;
  };
}

export interface ICharactersIdsResponse {
  characters: ICharactersIdsData;
}

export interface ICharactersIdsData {
  results: ICharacterIds[];
  info: {
    next: number | null;
  };
}

export interface ICharacterIds {
  id: string;
}

export interface ICharacterVariables {
  id: number;
}

export interface ICharacterResponse {
  character: ISingleCharacter;
}

export interface ISingleCharacter {
  image: string;
  location: {
    name: string;
  };
  name: string;
  gender: string;
  episode: {
    episode: string;
    name: string;
    created: string;
  }[];
  species: string;
  status: string;
}

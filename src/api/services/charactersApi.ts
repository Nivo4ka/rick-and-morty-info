import type { CharactersResponseType, CharacterType } from '../../types/main.types';
import instance from '../httpCommon';

const getAllCharacters = (currentPage: number) => {
  return instance.get<CharactersResponseType>('/character', {
    params: {
      page: currentPage,
    },
  });
};

const getCharacterById = (id: number) => {
  return instance.get<CharacterType>(`/character/${id}`);
};

const getCharacterByIds = (ids: string) => {
  return instance.get<CharacterType[]>(`/character/${ids}`);
};

export default { getAllCharacters, getCharacterById, getCharacterByIds };

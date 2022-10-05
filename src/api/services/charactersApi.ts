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

export default { getAllCharacters, getCharacterById };

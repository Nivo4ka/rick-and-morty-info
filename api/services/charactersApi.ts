import instance from '../httpCommon';

const getAllCharacters = (currentPage) => {
  return instance.get('/character', {
    params: {
      page: currentPage,
    },
  });
};

const getCharacterById = (id) => {
  return instance.get(`/character/${id}`);
};

export default { getAllCharacters, getCharacterById };

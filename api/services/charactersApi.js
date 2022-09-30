import instance from "../httpCommon";

const getAllCharacters = (currentPage) => {
  return instance.get(`/character`, {
    params: {
      page: currentPage,
    }
  });
};

const getCharacterById = (id) => {
  return instance.get(`/character/${id}`);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAllCharacters, getCharacterById };
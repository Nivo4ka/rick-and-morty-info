import instance from '../httpCommon';

const getAllEpisodes = (currentPage) => {
  return instance.get('/episode', {
    params: {
      page: currentPage,
    },
  });
};

const getEpisodeById = (id) => {
  return instance.get(`/episode/${id}`);
};

export default { getAllEpisodes, getEpisodeById };

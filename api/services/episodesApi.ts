import type { EpisodesResponseType, EpisodeType } from '../../types/main.types';
import instance from '../httpCommon';

const getAllEpisodes = (currentPage: number) => {
  return instance.get<EpisodesResponseType>('/episode', {
    params: {
      page: currentPage,
    },
  });
};

const getEpisodeById = (id:number) => {
  return instance.get<EpisodeType>(`/episode/${id}`);
};

export default { getAllEpisodes, getEpisodeById };

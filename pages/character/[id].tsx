import Head from 'next/head';
import { Menu } from 'antd';
import React from 'react';
import characterApi from '../../api/services/charactersApi';
import episodeApi from '../../api/services/episodesApi';
import styledCharacterPage from '../../styles/CharacterPage.styles';
import type { ValueType } from '../../types/main.types';

export async function getStaticProps({ params }) {
  const data = await characterApi.getCharacterById(+params.id);
  const episodes = data.data.episode.map(async (item) => {
    const data = await episodeApi.getEpisodeById(`${item.split('episode/')[1]}`);
    const value: ValueType = {
      label: data.data.name,
      key: data.data.id,
    };
    return value;
  });
  const episodeRes = await Promise.all(episodes);
  return {
    props: {
      character: data.data,
      episodes: episodeRes,
    },
  };
}

export async function getStaticPaths() {
  let data = await characterApi.getAllCharacters(1);
  let paths = [];
  paths = data.data.results.map((item) => {
    return {
      params: {
        id: `${item.id}`,
      },
    };
  });
  while (data.data.info.next !== null) {
    // eslint-enable no-await-in-loop next-line
    data = await characterApi.getAllCharacters(`${data.data.info.next.split('page=')[1]}`);
    paths = paths.concat(data.data.results.map((item: { id: number }) => {
      return {
        params: {
          id: `${item.id}`,
        },
      };
    }));
  }

  const pathsRes = await Promise.all(paths);
  return {
    paths: pathsRes,
    fallback: true,
  };
}

const CharacterPage = ({ character, episodes }) => {
  const menu = [{
    label: <p className="styled-card__name-point">Episodes:</p>,
    key: 'nameMenu 1',
    children: episodes,
  }];

  return (
    <div className={styledCharacterPage}>
      <Head>
        <title>{character.name}</title>
      </Head>
      <div className="styled-characterpage__container">
        <h2>{character.name}</h2>
        <img
          className="styled-characterpage__image"
          src={character.image}
          alt={character.name}
        />
        <div className="styled-characterpage__info-section">
          <p>{character.status} - {character.species}</p>
          <p className="styled-card__name-point">Gender:</p>
          <p>{character.gender}</p>
          <p className="styled-card__name-point">Origin:</p>
          <p>{character.origin.name}</p>
          <p className="styled-card__name-point">Last known location:</p>
          <p>{character.location.name}</p>
          <Menu
            theme="dark"
            mode="inline"
            items={menu}
          />
        </div>
      </div>
    </div>);
};

export default CharacterPage;

/* eslint-disable no-await-in-loop */
import Head from 'next/head';
import type { GetStaticProps, GetStaticPaths } from 'next';
import { Menu } from 'antd';
import React from 'react';
import Link from 'next/link';
import { LeftCircleOutlined } from '@ant-design/icons';
import characterApi from '../../api/services/charactersApi';
import episodeApi from '../../api/services/episodesApi';
import styledCharacterPage from '../../styles/CharacterPage.styles';
import type { CharacterType, EpisodeType } from '../../types/main.types';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await characterApi.getCharacterById(+params!.id!);

  const episodes = data.data.episode.map((item) => item.split('episode/')[1]);
  const arrEp = episodes.join();
  const episodesRes = await episodeApi.getEpisodeByIds(arrEp);

  return {
    props: {
      character: data.data,
      episodes: episodesRes.data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await characterApi.getAllCharacters(1);
  let paths = [];
  paths = data.results.map((item) => {
    return {
      params: {
        id: `${item.id}`,
      },
    };
  });

  let dt = data;
  while (dt.info.next !== null) {
    const { data } = await characterApi.getAllCharacters(+dt.info.next!.split('page=')[1]);
    dt = data;
    paths = paths.concat(dt.results.map((item) => {
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
};

type PropsType = {
  character: CharacterType;
  episodes: EpisodeType[];
};

const CharacterPage: React.FC<PropsType> = ({ character, episodes }) => {
  return (
    <div className={styledCharacterPage}>
      <Head>
        <title>{character.name}</title>
      </Head>
      <div className="styled-contact-me__link-area">
        <Link href="/">
          <a className="">
            <LeftCircleOutlined />
          </a>
        </Link>
      </div>
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
          >
            <Menu.SubMenu key="subMenu1" title="Episodes:">
              {episodes.map((item) => (

                <Menu.Item key={item.id} className="styled-characterpage__menu-item">
                  <Link href={`/episode/${item.id}`} key={item.id}>
                    <a className="styled-characterpage__menu-item__a">
                      <p>{item.name}</p>
                    </a>
                  </Link>
                </Menu.Item>

              ))}
            </Menu.SubMenu>
          </Menu>
        </div>
      </div>
    </div >);
};

export default CharacterPage;

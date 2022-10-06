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
  const data = await episodeApi.getEpisodeById(+params!.id!);

  const characters = data.data.characters.map((item) => item.split('character/')[1]);
  const arrCh = characters.join();
  const charactersRes = await characterApi.getCharacterByIds(arrCh);

  return {
    props: {
      episode: data.data,
      characters: charactersRes.data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await episodeApi.getAllEpisodes(1);
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
    const { data } = await episodeApi.getAllEpisodes(+dt.info.next!.split('page=')[1]);
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
  characters: CharacterType[];
  episode: EpisodeType;
};

const CharacterPage: React.FC<PropsType> = ({ characters, episode }) => {
  return (
    <div className={styledCharacterPage}>
      <Head>
        <title>{episode.name}</title>
      </Head>
      <div className="styled-contact-me__link-area">
        <Link href="/">
          <a className="">
            <LeftCircleOutlined />
          </a>
        </Link>
      </div>
      <div className="styled-characterpage__container">
        <h2>{episode.name} - {episode.episode}</h2>
        <div className="styled-characterpage__info-section">
          <p className="styled-card__name-point">Episode release date:</p>
          <p>{episode.air_date}</p>
          <Menu
            theme="dark"
            mode="inline"
          >
            <Menu.SubMenu key="subMenu1" title="Characters:">
              {characters.map((item) => (

                <Menu.Item key={item.id} className="styled-characterpage__menu-item">
                  <Link href={`/character/${item.id}`} key={item.id}>
                    <a className="styled-characterpage__menu-item__a">
                      <div className="styled-characterpage__image-div">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <p>{item.name}</p>
                    </a>
                  </Link>
                </Menu.Item>

              ))}
            </Menu.SubMenu>
          </Menu>
        </div>
      </div>
    </div>);
};

export default CharacterPage;

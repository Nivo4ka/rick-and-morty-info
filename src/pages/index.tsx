import { Space, Pagination } from 'antd';
import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { styledHomeDiv, styledContainer } from '../styles/Home.styles';
import CardPerson from '../components/CardPerson/CardPerson';
import characterApi from '../api/services/charactersApi';
import episodeApi from '../api/services/episodesApi';
import type { CharacterType, InfoType } from '../types/main.types';

type PropsType = {
  info: InfoType;
  characters: CharacterType[];
  query: {
    currentPage: number;
  };
};

const Home: React.FC<PropsType> = ({ info, characters }) => {
  const router = useRouter();
  const onChangePage = (page: number) => {
    router.push({
      pathname: router.pathname,
      query: { currentPage: page },
    });
  };

  return (
    <div className={styledHomeDiv}>
      <Head>
        <title>Rick & Morty DB</title>
      </Head>
      <div className="styled-home-div__main-area">
        <Space
          align="center"
          size="large"
          className={styledContainer}
          wrap
        >
          {characters.map((item, inx) => (
            <Link key={inx} href={`/character/${item.id}`}>
              <a className="styled-container__div">
                <CardPerson person={item} />
              </a>
            </Link>
          ))}
        </Space>
        <Space
          align="center"
          size="large"
          className={styledContainer}
          wrap
        >
          <Pagination
            simple
            defaultCurrent={+router.query.currentPage! || 1}
            total={info.count}
            pageSize={Math.ceil(info.count / info.pages)}
            onChange={onChangePage}
            className="styled-container__pagination"
          />
        </Space>

        <Link href="/contact-me">
          <a className="styled-nome-div__link">
            Contact me
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const data = await characterApi.getAllCharacters(+query.currentPage! || 1);
  const info = data.data.info;
  const characters = data.data.results;
  let char = [];
  char = characters.map(async (item) => {
    const data = await episodeApi.getEpisodeById(+item.episode[0].split('episode/')[1]);
    item.firstEpisode = data.data.name;
    return item;
  });
  const charactersRes = await Promise.all(char);
  return {
    props: {
      info,
      characters: charactersRes,
      query,
    },
  };
};

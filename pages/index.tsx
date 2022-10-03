import { Space, Pagination } from 'antd';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { styledHomeDiv, styledContainer } from '../styles/Home.styles';
import CardPerson from '../components/CardPerson/CardPerson';
import characterApi from '../api/services/charactersApi';
import episodeApi from '../api/services/episodesApi';
import type { CharacterType, InfoType } from '../types/main.types';

export async function getServerSideProps({ params, query, ...props }) {
  const data = await characterApi.getAllCharacters(query.currentPage || 1);
  const info = data.data.info;
  let characters = data.data.results;
  characters = characters.map(async (item: { episode: string[]; firstEpisode: string }) => {
    const data = await episodeApi.getEpisodeById(`${item.episode[0].split('episode/')[1]}`);
    item.firstEpisode = data.data.name;
    return item;
  });
  const charactersRes = await Promise.all(characters);
  return {
    props: {
      info,
      characters: charactersRes,
      query,
    },
  };
}

type PropsType = {
  info: InfoType;
  characters: CharacterType[];
  query: {
    currentPage: number;
  };
};

const Home: React.FC<PropsType> = ({ info, characters, query }) => {
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
      <Space
        direction="vertical"
        align="center"
        size="large"
        className={styledContainer}
      >
        {characters.map(({ id, ...item }, inx) => (
          <Link key={inx} href={`/character/${id}`}>
            <a className="styled-container__div">
              <CardPerson person={item} />
            </a>
          </Link>
        ))}

        <Pagination
          simple
          defaultCurrent={query.currentPage || 1}
          total={info.count}
          pageSize={Math.ceil(info.count / info.pages)}
          onChange={onChangePage}
          className="styled-container__pagination"
        />

      </Space>
    </div>
  );
};

export default Home;

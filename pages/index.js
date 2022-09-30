import { Space } from 'antd';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';
import { styledTitle, styledHomeDiv, styledContainer } from '../styles/Home.styles';
import CardPerson from '../components/CardPerson/CardPerson';
import characterApi from '../api/services/charactersApi';
import episodeApi from '../api/services/episodesApi';
import { Pagination } from 'antd';

export async function getServerSideProps({ params, query, ...props }) {
  const data = await characterApi.getAllCharacters(query.currentPage || 1);
  const info = data.data.info;
  let characters = data.data.results;
  // console.log(characters);
  // characters = data.data.results.map(async (item) => {
  //   let data = await episodeApi.getEpisodeById(`${item.episode[0].split('episode/')[1]}`);
  //   data = JSON.parse(JSON.stringify(data));
  //   const firstEpisode = data.data.name;
  //   item.firstEpisode = firstEpisode
  //   return item;
  // })
  return {
    props: {
      info,
      characters,
      query,
    },
  };
};

export default function Home({ info, characters, query }) {
  const router = useRouter();
  const onChangePage = (page) => {
    router.push({
      pathname: router.pathname,
      query: { currentPage: page },
    });
  }

  return (
    <div className={styledHomeDiv}>
      <Head>
        <title>Rick & Morty DB</title>
      </Head>
      <div>
        <h2 className={styledTitle}>Rick and Morty Info</h2>
      </div>
      <Space
        direction='vertical'
        align='center'
        size='large'
        className={styledContainer}
      >
        {characters.map(({ id, ...item }, inx) => (

          // <Link key={inx} href={{ pathname: '/character/', query: { id: `${id}`, currentPage: page } }}>
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
}
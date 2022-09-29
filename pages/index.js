import { Space } from 'antd';
import Head from 'next/head';
import { useRouter } from 'next/router'
import { styledTitle, styledHomeDiv, styledContainer, styledCard } from '../styles/Home.styles';
import CardPerson from '../components/CardPerson/CardPerson';
import characterApi from '../api/services/charactersApi';
import { Pagination } from 'antd';

export async function getServerSideProps({ params, query, ...props }) {
  const data = await characterApi.getAllCharacters(query.currentPage || 1);
  const info = data.data.info;
  const characters = data.data.results;
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
        {characters.map((item, inx) => (
          <CardPerson key={inx} person={item} />
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
import characterApi from '../../api/services/charactersApi';
import episodeApi from '../../api/services/episodesApi';
import styledCharacterPage from '../../styles/CharacterPage.styles';
import Head from 'next/head';

export async function getStaticProps({ params }) {
  const data = await characterApi.getCharacterById(+params.id);
  const episodes = data.data.episode.map(async (item) => {
    const data = await episodeApi.getEpisodeById(`${item.split('episode/')[1]}`);
    return data.data;
  })
  const episodeRes = await Promise.all(episodes);
  return {
    props: {
      character: data.data,
      episodes: episodeRes,
    },
  };
};

export async function getStaticPaths() {
  let data = await characterApi.getAllCharacters();
  let paths = [];
  paths = data.data.results.map((item) => {
    return {
      params: {
        id: `${item.id}`,
      },
    }
  });
  while (data.data.info.next !== null) {
    data = await characterApi.getAllCharacters(`${data.data.info.next.split('page=')[1]}`);
    paths = paths.concat(data.data.results.map((item) => {
      return {
        params: {
          id: `${item.id}`,
        },
      }
    }))
  }

  const pathsRes = await Promise.all(paths);
  return {
    paths: pathsRes,
    fallback: true,
  };
}

const CharacterPage = ({ character, episodes }) => {
  return (
    <div className={styledCharacterPage}>
      <Head>
        <title>{character.name}</title>
      </Head>
      <div className="styled-characterpage__container">
        <img
          className="styled-characterpage__image"
          src={character.image}
          alt={character.name}
        />
        <div className="styled-characterpage__info-section">
          <h2>{character.name}</h2>
          <p>{character.status} - {character.species}</p>
          <p className="styled-card__name-point">Last known location:</p>
          <p>{character.location.name}</p>
          <p className="styled-card__name-point">Episodes:</p>
          {episodes.map((item, index) => (
            <p key={index}>{item.name}</p>
          ))}
        </div>
      </div>
    </div>)
};

export default CharacterPage;
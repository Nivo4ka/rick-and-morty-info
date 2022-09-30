import characterApi from '../../api/services/charactersApi';
import episodeApi from '../../api/services/episodesApi';

export async function getStaticProps({ params }) {
  const data = await characterApi.getCharacterById(+params.id);
  const episodes = data.data.episode.map(async (item) => {
    const data = await episodeApi.getEpisodeById(`${item.split('episode/')[1]}`);
    return data.data;
    // console.log(data.data);
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
  // console.log(episodes);
  return (
    <div>
      <div className="styled-card__image">
        <img
          // className="styled-card__image"
          src={character.image}
          alt={character.name}
        />
      </div>

      <div className="styled-card__info-section">
        <h2>{character.name}</h2>
        <p>{character.status} - {character.species}</p>
        <p className="styled-card__name-point">Last known location:</p>
        <p>{character.location.name}</p>
        <p className="styled-card__name-point">Episodes:</p>
        {episodes.map((item, index) => (
          <p key={index}>{item.name}</p>
        ))}
      </div>
    </div>)
};

export default CharacterPage;
import characterApi from '../../api/services/charactersApi';

export async function getStaticProps({ params }) {
  console.log(params);
  const data = await characterApi.getCharacterById(+params.id);
  return {
    props: {
      character: data.data,
    },
  };
}

export async function getStaticPaths() {
  const paths = [];
  for (let i = 1; i <= 826; i++) {
    paths.push({
      params: {
        id: `${i}`,
      },
    })
  };
  return {
    paths,
    fallback: false,
  };
}

const CharacterPage = ({ character }) => {
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
        <p>Narnia Dimension</p>
        <p className="styled-card__name-point">First seen in:</p>
        <p>bla bla bla</p>
      </div>
    </div>)
};

export default CharacterPage;
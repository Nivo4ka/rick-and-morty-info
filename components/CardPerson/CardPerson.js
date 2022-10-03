import { Card } from 'antd';
import styledCard from './CardPerson.styles';

const CardPerson = ({ person }) => {
  return (
    <Card
      hoverable
      className={styledCard}
      style={{ width: '100%' }}
      bodyStyle={{ padding: 0 }}
    >
      <div className="styled-card__image">
        <img
          className="styled-card__image"
          src={person.image}
          alt={person.name}
        />
      </div>

      <div className="styled-card__info-section">
        <h2>{person.name}</h2>
        <p>{person.status} - {person.species}</p>
        <p className="styled-card__name-point">Last known location:</p>
        <p>{person.location.name}</p>
        <p className="styled-card__name-point">First seen in:</p>
        <p>{person.firstEpisode}</p>
      </div>
    </Card>)
};

export default CardPerson;
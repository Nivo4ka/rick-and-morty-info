import { Card } from 'antd';
import React from 'react';
import type { CharacterType } from '../../types/main.types';
import styledCard from './CardPerson.styles';

type PropsType={
  person: CharacterType;
};

const CardPerson:React.FC<PropsType> = ({ person }) => {
  return (
    <Card
      hoverable
      className={styledCard}
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
    </Card>);
};

export default CardPerson;

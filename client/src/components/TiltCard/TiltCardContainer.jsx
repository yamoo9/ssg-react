import './TiltCardContainer.css';
import React, { useState, useEffect } from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { TiltCard } from 'components';

export function TiltCardContainer({ cards: userDefinedCards }) {
  const [cards, setCards] = useState(userDefinedCards);

  useEffect(() => {
    fetch('/api/cards')
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error.message));
  }, []);

  const handleRemoveCard = (id) => {
    setCards((oldCards) => oldCards.filter((card) => card.id !== id));
  };

  return (
    <div className="tiltCardContainer" lang="en">
      <div className="tiltCardContainer__buttonGroup">
        {cards.map(({ id, text }) => (
          <button
            key={id}
            type="button"
            className="tiltCardContainer__button"
            onClick={() => handleRemoveCard(id)}
          >
            {text} 제거
          </button>
        ))}
      </div>
      <ul className="tiltCardContainer__list">
        {cards.map((card) => (
          <li key={card.id}>
            <TiltCard
              card={card}
              options={{ 'max-glare': 0.2, 'perspective': 600 }}
            >
              {card.text}
            </TiltCard>
          </li>
        ))}
      </ul>
    </div>
  );
}

TiltCardContainer.defaultProps = {
  cards: [],
};

TiltCardContainer.propTypes = {
  cards: arrayOf(
    shape({
      id: string.isRequired,
      text: string.isRequired,
    })
  ),
};

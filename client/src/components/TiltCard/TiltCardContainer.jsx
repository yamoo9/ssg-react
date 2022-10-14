import './TiltCardContainer.css';
import React, { useState, useEffect } from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { TiltCard } from 'components';

const initialCards = [
  { id: 'card-vanilla', text: 'Vanilla Tilt Card' },
  { id: 'card-jquery', text: 'jQuery Tilt Card' },
  { id: 'card-react', text: 'React Tilt Card' },
];

export function TiltCardContainer({ cards: userDefinedCards }) {
  const [state, setState] = useState(() => ({
    dummy: false,
    cards: initialCards,
  }));

  useEffect(() => {
    // DOM 요소 접근/조작
    // 네트워크 통신 요청/응답
    fetch('/api/cards')
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error.message));

    // componentDidMount
  }, []);

  const handleRemoveCard = (id) => {
    // setCards((oldCards) => oldCards.filter((card) => card.id !== id));
    setState((oldState) => {
      return {
        ...oldState,
        cards: oldState.cards.filter((card) => card.id !== id),
      };
    });
  };

  return (
    <div className="tiltCardContainer" lang="en">
      <div className="tiltCardContainer__buttonGroup">
        {state.cards.map(({ id, text }) => (
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
        {state.cards.map((card) => (
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

TiltCardContainer.propTypes = {
  cards: arrayOf(
    shape({
      id: string.isRequired,
      text: string.isRequired,
    })
  ).isRequired,
};

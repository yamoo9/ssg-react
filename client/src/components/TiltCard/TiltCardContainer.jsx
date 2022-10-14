import './TiltCardContainer.css';
import { useCallback, useMemo } from 'react';
import { useFetch } from 'hooks';
import { arrayOf, shape, string } from 'prop-types';
import { Button, TiltCard } from 'components';

export function TiltCardContainer({ cards: userDefinedCards }) {
  const {
    loading,
    error,
    data: cards,
    setData: setCards,
  } = useFetch('/api/cards');

  // const handleRemoveCard1 = useMemo(
  //   () => (id) => {
  //     setCards((oldCards) => oldCards.filter((card) => card.id !== id));
  //   },
  //   [setCards]
  // );

  const handleRemoveCard = useCallback(
    (id) => {
      setCards((oldCards) => oldCards.filter((card) => card.id !== id));
    },
    [setCards]
  );

  if (loading) {
    return <div role="alert">데이터 로딩 중...</div>;
  }

  if (error) {
    return <div role="alert">오류 발생: {error.message}</div>;
  }

  return (
    <div className="tiltCardContainer" lang="en">
      <div className="tiltCardContainer__buttonGroup">
        {cards.map(({ id, text }) => (
          <Button
            key={id}
            type="button"
            className="tiltCardContainer__button"
            onClick={handleRemoveCard.bind(null, id)}
          >
            {text} 제거
          </Button>
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

let { cards } = require('../databases/tiltcard.json');
const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res
    .writeHead(200, 'ok', { 'Content-Type': 'application/json; charset=UTF-8' })
    .end(JSON.stringify(cards));
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  const item = cards.find((item) => item.id === id);

  if (item) {
    res
      .writeHead(200, 'ok', {
        'Content-Type': 'application/json; charset=UTF-8',
      })
      .end(JSON.stringify(item));
  } else {
    res
      .writeHead(404, 'not found', {
        'Content-Type': 'application/json; charset=UTF-8',
      })
      .end({ message: '일치하는 ID를 가진 데이터가 존재하지 않습니다.' });
  }
});

router.post('/', (req, res) => {
  const newCard = req.body;

  cards.push(newCard);

  res
    .writeHead(200, 'ok', { 'Content-Type': 'application/json; charset=UTF-8' })
    .end(JSON.stringify(newCard));
});

router.patch('/:id', (req, res) => {
  const {
    params: { id },
    body,
  } = req;

  cards = cards.map((card) => {
    if (card.id === id) {
      return { ...cards, ...body };
    }
    return card;
  });

  res
    .writeHead(200, 'ok', { 'Content-Type': 'application/json; charset=UTF-8' })
    .end(JSON.stringify({ id }));
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  cards = cards.filter((card) => card.id !== id);

  res
    .writeHead(200, 'ok', { 'Content-Type': 'application/json; charset=UTF-8' })
    .end(JSON.stringify({ id }));
});

module.exports = router;

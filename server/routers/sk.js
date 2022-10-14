const { gateway } = require('../databases/sk.json');
const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res
    .writeHead(200, 'ok', { 'Content-Type': 'application/json; charset=UTF-8' })
    .end(JSON.stringify(gateway));
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  const item = gateway.find((item) => item.id === id);

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

module.exports = router;

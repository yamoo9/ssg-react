const PORT = process.env.PORT ?? 5000;
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/sk', require('./routers/sk'));
app.use('/api/cards', require('./routers/tiltcard'));
app.use('/api/ediya', require('./routers/ediya'));

app.listen(PORT, () => console.log(`API 서버 구동: http://localhost:${PORT}`));

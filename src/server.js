'use strict';
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const PORT = 8080;
const HOST = '0.0.0.0';
const app = require('./app');

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
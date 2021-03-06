const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const helmet = require('helmet');
const compression = require('compression');
const reviewRoutes = require('./routes/review');
const initDataBase = require('./db/index');

dotenv.config();
const app = express();
const port = process.env.PORT || 9000;

app.use(express.static(`${__dirname}/www`));

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      ...helmet.contentSecurityPolicy.getDefaultDirectives(),
      "script-src": ["'self'", "localhost", "'unsafe-inline'", "'unsafe-eval'"],
    },
  })
);
app.use(compression());

app.use('/api/review', reviewRoutes);
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/www/index.html`));
});


const start = async () => {
  try {
    await initDataBase(process.env.MONGO_DB_URL);

    app.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`Example app listening at http://localhost:${port}`);
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

start();

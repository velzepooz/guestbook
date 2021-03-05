const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv")
const reviewRoutes = require('./routes/review');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 9000;
dotenv.config()

app.use(cors());

// TODO: Delete
app.get('/', (req, res) => {
  res.json({ status: 'ok' });
})

app.use('/review', reviewRoutes);

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

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

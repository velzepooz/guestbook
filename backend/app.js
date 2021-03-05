const express = require('express');
const mongoose = require('mongoose');
const reviewRoutes = require('./routes/review');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 9000;

app.use(cors());

// TODO: Delete
app.get('/', (req, res) => {
  res.json({ status: 'ok' });
})

app.use('/review', reviewRoutes);

const start = async () => {
  try {
    await mongoose.connect('mongodb+srv://gleb:Q2V5yJL4wksL7VT@cluster0.sn2ma.mongodb.net/reviews', {
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

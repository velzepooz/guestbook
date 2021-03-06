const mongoose = require('mongoose');

const initDataBase = async(url) => {
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
};

module.exports = initDataBase;

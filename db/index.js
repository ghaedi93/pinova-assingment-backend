const mongoose = require("mongoose");

/**
 * @desc connects to mongodb
 * resolves if a connection is established and rejects if there is an error
 * @returns {void} -
 */
function connect() {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(process.env.mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      })
      .then((res, err) => {
        if (err) return reject(err);
        console.log("connected to database");
        resolve();
      })
      .catch((e) => console.log(e));
  });
}
function close() {
  return mongoose.disconnect();
}
module.exports = { connect, close };

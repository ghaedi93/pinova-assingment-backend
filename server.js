const db = require("./db");
const app = require("./app");
/**
 * @desc init function use db.connect which is a promise
 *  and only resolves if connection to our mongo take place
 * if successfull then it start our app listening on PORT
 *  else it logs the error
 */
const init = async () => {
  try {
    await db.connect();
    app.listen(process.env.PORT, () => {
      console.log(`Server running on Port ${process.env.PORT}`);
    });
  } catch (err) {
    console.log("Init failed", err);
  }
};
init();

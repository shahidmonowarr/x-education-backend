const mongoose = require("mongoose");
const config = require("../config");
mongoose.set("strictQuery", false);
const app = require("../app");
let server;

const DBConnect = async () => {
  try {
    await mongoose.connect(config.db_uri);
    server = app.listen(config.port, () => {
      console.log(`Server is running on http://localhost:${config.port}`);
    });
    console.log(`DB Connected Successfully`);
  } catch (error) {
    console.log("Database Connection Error", error);
  }

  process.on("unhandledRejection", (error) => {
    console.log(error);
    if (server) {
      server.close(() => {
        console.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
};

module.exports = DBConnect;

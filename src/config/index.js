const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: path.join(process.cwd(), ".env") });

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  db_uri: process.env.DB_URI,
};

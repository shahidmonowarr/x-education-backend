const DBConnect = require("./utilities/dbConnect");
let server;

process.on("uncaughtException", (error) => {
  console.error(error);
  process.exit(1);
});

// DB Connection
DBConnect();

process.on("SIGTERM", () => {
  console.log(`Sigterm is received`);
  if (server) {
    server.close();
  }
});

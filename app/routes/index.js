const express = require("express");
const router = express.Router();

const appRoutes = [
  // {
  //   path: "/user",
  //   route: userRoute,
  // },
];

appRoutes.forEach((route) => router.use(route.path, route.route));

module.exports = router;

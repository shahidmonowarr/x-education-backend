const express = require("express");
const courseRoute = require("./course.route");
const router = express.Router();

const appRoutes = [
  {
    path: "/course",
    route: courseRoute,
  },
];

appRoutes.forEach((route) => router.use(route.path, route.route));

module.exports = router;

const Router = require("koa-router");
const users = require("./users");
const quiz = require("./quiz");
const pick = require("./pick");

const api = new Router();

api.use("/users", users.routes());
api.use("/quiz", quiz.routes());
api.use("/pick", pick.routes());

module.exports = api;

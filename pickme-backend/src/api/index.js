const Router = require("koa-router");
const users = require("./users");
const quiz = require("./quiz");

const api = new Router();

api.use("/users", users.routes());
api.use("/quiz", quiz.routes());

module.exports = api;

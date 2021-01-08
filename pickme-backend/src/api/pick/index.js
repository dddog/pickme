const Router = require("koa-router");
const pickCtrl = require("./pick.ctrl");

const pick = new Router();

pick.get("/:quizId/:pickNo", pickCtrl.get);

module.exports = pick;

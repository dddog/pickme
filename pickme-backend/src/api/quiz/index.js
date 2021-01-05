const Router = require("koa-router");
const quizCtrl = require("./quiz.ctrl");

const quiz = new Router();

quiz.get("/", quizCtrl.list);
quiz.get("/:id", quizCtrl.get);
quiz.post("/", quizCtrl.push);

module.exports = quiz;

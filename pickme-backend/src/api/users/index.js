const Router = require("koa-router");
const usersCtrl = require("./users.ctrl");

const users = new Router();

users.get("/", usersCtrl.list);
users.get("/:id", usersCtrl.get);
users.post("/", usersCtrl.push);
users.post("/:userId", usersCtrl.scorePush);

module.exports = users;

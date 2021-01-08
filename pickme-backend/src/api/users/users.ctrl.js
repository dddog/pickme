const firebaseDatabase = require("../../service/firebase");

exports.get = async (ctx, next) => {
  try {
    const { id } = ctx.params;
    const user = await firebaseDatabase.ref(`users/${id}`).once("value");
    ctx.body = user;
  } catch (e) {
    ctx.throw(e, 500);
  }
};
exports.list = async (ctx) => {
  try {
    const usersRef = await firebaseDatabase.ref("users").once("value");
    ctx.body = usersRef;
  } catch (e) {
    ctx.throw(e, 500);
  }
};

exports.push = (ctx) => {
  try {
    const usersRef = firebaseDatabase.ref().child("users");
    const newUserRef = usersRef.push();
    const user = ctx.request.body;
    newUserRef.set(user);
    ctx.body = { newUserKey: newUserRef.key };
  } catch (e) {
    ctx.throw(e, 500);
  }
};

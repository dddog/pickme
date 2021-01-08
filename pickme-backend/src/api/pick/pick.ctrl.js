const firebaseDatabase = require("../../service/firebase");

exports.get = async (ctx, next) => {
  try {
    const { quizId, pickNo } = ctx.params;
    const qick = await firebaseDatabase
      .ref(`quiz/${quizId}/pick/${pickNo}`)
      .once("value");
    ctx.body = qick;
  } catch (e) {
    ctx.throw(e, 500);
  }
};

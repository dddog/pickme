const firebaseDatabase = require("../../service/firebase");

exports.list = (ctx) => {
  try {
    ctx.body = 200;
  } catch (e) {
    ctx.throw(e, 500);
  }
};

exports.get = async (ctx, next) => {
  try {
    const { id } = ctx.params;
    const quiz = await firebaseDatabase.ref(`quiz/${id}`).once("value");
    ctx.body = quiz;
  } catch (e) {
    ctx.throw(e, 500);
  }
};

exports.push = (ctx) => {
  try {
    const quizRef = firebaseDatabase.ref().child("quiz");
    const newQuizRef = quizRef.push();
    const quiz = ctx.request.body;
    newQuizRef.set(quiz);
    ctx.body = { newQuizKey: newQuizRef.key };
  } catch (e) {
    ctx.throw(e, 500);
  }
};

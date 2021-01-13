class ApiService {
  constructor() {
    this.apiUrl = process.env.REACT_APP_BACKEND_API_URL;
    this.pick = null;
  }

  async getQuiz() {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
      mode: "cors",
    };

    return await fetch(`/quiz/-MQGf_O83Ns5CSGhft7-`, requestOptions)
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
  }

  async getPick(quizId, pickNo) {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    return await fetch(`/pick/${quizId}/${pickNo}`, requestOptions)
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
  }

  async getUser(userId) {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    return await fetch(`/users/${userId}`, requestOptions)
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
  }
  async pushUserResult(user) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      name: user.name,
      quizList: [
        {
          quizId: user.quizId,
          result: user.results,
          scoreList: [],
        },
      ],
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    return await fetch("/users", requestOptions)
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
  }
}

export default ApiService;

class ApiService {
  constructor() {
    this.apiUrl = process.env.REACT_APP_BACKEND_API_URL;
    this.pick = null;
  }

  getQuiz() {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
      mode: "cors",
    };

    return fetch(`/quiz/-MQGf_O83Ns5CSGhft7-`, requestOptions)
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
  }

  async getPick(quizId, pickNo) {
    console.log(`getPick(${quizId}, ${pickNo})`);
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    return await fetch(`/pick/${quizId}/${pickNo}`, requestOptions)
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
  }
}

export default ApiService;

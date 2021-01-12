import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Pick from "../pick/pick";
import styles from "./quiz.module.css";

const Quiz = ({ match, apiService }) => {
  const historyState = useHistory().location.state;
  const history = useHistory();
  const [userName] = useState(historyState && historyState.userName);
  const [quizName] = useState(historyState && historyState.quizName);
  const [totalCnt] = useState(historyState && historyState.totalCnt);
  const [selectedPickNo, setSelectedPickNo] = useState(0);
  const [results, setResults] = useState([]);
  const [images, setImages] = useState([]);

  const { quizId } = match.params;
  useEffect(() => {
    // setResults([]);
    // setSelectedPickNo(0);
    // console.log(`${quizId}/${quizName} total cnt : ${totalCnt}`);
    apiService.getPick(quizId, selectedPickNo).then((pick) => {
      // console.log(`getpick1>>>${pick}`);
      setImages(pick == null ? [] : [pick.images[0], pick.images[1]]);
    });
  }, [apiService, quizId, quizName, selectedPickNo, totalCnt]);

  const onCickPick = (selectedKey) => {
    const r = results;
    r.push(selectedKey);
    setResults(r);
    // console.log(`selected : ${selectedPickNo},  results : ${results}, length : ${results.length}`);
    if (results.length === totalCnt) {
      // console.log(`quizId : ${quizId}, results : ${results}`);
      const newUserKey = apiService.pushUserResult({
        name: userName,
        quizId: quizId,
        results: results,
      });
      newUserKey.then((key) => {
        // console.log(`newUserKey>>>${key}`);
        history.push({
          pathname: `/user/${key.newUserKey}/${quizId}`,
        });
      });
    } else {
      const pickNo = selectedPickNo;
      setSelectedPickNo(pickNo + 1);
      // apiService.getPick(quizId, selectedPickNo).then((pick) => {
      //   console.log(`getpick2>>>${pick.images[0]}`);
      //   setImages(pick == null ? [] : [pick.images[0], pick.images[1]]);
      // });
    }
  };
  return (
    <section className={styles.quiz}>
      <h1 className={styles.title}>
        {userName}님의 {quizName}
      </h1>
      <ul className={styles.pick}>
        {images.map((img) => (
          <Pick img={img} key={img.key} onCickPick={onCickPick} />
        ))}
      </ul>
    </section>
  );
};

export default Quiz;

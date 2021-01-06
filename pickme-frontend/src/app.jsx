import React, { useEffect } from "react";
import styles from "./app.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/home/home";
import User from "./components/user/user";
import Quiz from "./components/quiz/quiz";

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/quiz" component={Quiz}></Route>
          <Route path="/user">
            <User />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

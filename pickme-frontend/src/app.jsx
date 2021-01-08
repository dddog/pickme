import React from "react";
import styles from "./app.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import User from "./components/user/user";
import Quiz from "./components/quiz/quiz";

function App({ apiService }) {
  return (
    <div className={styles.app}>
      <section className={styles.section}>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home apiService={apiService} />
            </Route>
            <Route
              path="/quiz/:quizId/:pickNo"
              component={({ match }) => (
                <Quiz apiService={apiService} match={match} />
              )}
            ></Route>
            <Route path="/user">
              <User />
            </Route>
          </Switch>
        </BrowserRouter>
        <Footer />
      </section>
    </div>
  );
}

export default App;

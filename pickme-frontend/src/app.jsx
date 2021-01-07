import React, { useEffect } from "react";
import styles from "./app.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import User from "./components/user/user";
import Quiz from "./components/quiz/quiz";

function App() {
  return (
    <div className={styles.app}>
      <section className={styles.section}>
        <Header />
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
        <Footer />
      </section>
    </div>
  );
}

export default App;

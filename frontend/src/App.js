import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hangman from "./components/Hangman";
import Ranking from "./components/Ranking";
import NaoEncontrada from "./components/NaoEncontrada";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <Hangman />
        </Route>
        <Route path="/ranking" exact={true}>
          <Ranking />
        </Route>
        <Route path="*">
          <NaoEncontrada />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

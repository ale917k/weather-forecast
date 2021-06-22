import React from "react";
import { Switch, Route } from "react-router-dom";

import CurrentWeather from "components/CurrentWeather";
import ExtendedWeather from "components/ExtendedWeather";

import Wrapper from "./styles";

/**
 * Main sections and routes.
 * @returns App routes.
 */
const App: React.FC = () => (
  <Wrapper>
    <header>Header</header>

    <main>
      <Switch>
        <Route path="/" exact component={CurrentWeather} />
        <Route path="/16-day" exact component={ExtendedWeather} />
      </Switch>
    </main>
  </Wrapper>
);

export default App;

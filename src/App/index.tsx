import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "components/Header";
import Container from "components/Container";
import CurrentWeather from "components/CurrentWeather";
import ExtendedWeather from "components/ExtendedWeather";

import { Wrapper, Main } from "./styles";

/**
 * Main sections and routes.
 * @returns App routes.
 */
const App: React.FC = () => (
  <Wrapper>
    <Header />

    <Main>
      <Container>
        <Switch>
          <Route path="/" exact component={CurrentWeather} />
          <Route path="/16-day" exact component={ExtendedWeather} />
        </Switch>
      </Container>
    </Main>
  </Wrapper>
);

export default App;

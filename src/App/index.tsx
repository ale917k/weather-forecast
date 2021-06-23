import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "components/Header";
import Container from "components/Container";
import Spinner from "components/Spinner";
import { Wrapper, Background, Main } from "./styles";

// Lazy loaded routes
const CurrentWeather = lazy(() => import("components/CurrentWeather"));
const ExtendedWeather = lazy(() => import("components/ExtendedWeather"));
const PageNotFound = lazy(() => import("components/PageNotFound"));

/**
 * Global Header, Background and routed sections.
 * @returns App routes.
 */
const App: React.FC = () => (
  <Wrapper>
    <Header />
    <Background />

    <Main>
      <Container>
        <Switch>
          <Route path={process.env.PUBLIC_URL} exact>
            <Suspense fallback={<Spinner />}>
              <CurrentWeather />
            </Suspense>
          </Route>

          <Route path={`${process.env.PUBLIC_URL}16-day`} exact>
            <Suspense fallback={<Spinner />}>
              <ExtendedWeather />
            </Suspense>
          </Route>

          <Route path={`${process.env.PUBLIC_URL}*`}>
            <Suspense fallback={<Spinner />}>
              <PageNotFound />
            </Suspense>
          </Route>
        </Switch>
      </Container>
    </Main>
  </Wrapper>
);

export default App;

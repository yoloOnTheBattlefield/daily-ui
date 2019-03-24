import React from "react";
import { Transition } from "react-spring/renderprops";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import Navigation from "components/Navigation";
import Home from "./Home";
import UI001 from "./UI001";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
`;

const RoutesContainer = styled.div`
  position: relative;
  width: calc(100% - 300px);
  background: #272727;
`;

export default () => (
  <Route
    render={({ location, ...rest }) => (
      <Container>
        <Navigation />
        <RoutesContainer>
          <Transition
            native
            items={location}
            keys={location.pathname.split("/")[1]}
            from={{ transform: "translateY(100px)", opacity: 0 }}
            enter={{ transform: "translateY(0px)", opacity: 1 }}
            leave={{ transform: "translateY(100px)", opacity: 0 }}>
            {(loc, state) => style => (
              <Switch location={state === "update" ? location : loc}>
                <Route
                  exact
                  path="/"
                  render={props => <Home {...props} style={style} />}
                />
                <Route
                  path="/ui/001"
                  render={props => <UI001 {...props} style={style} />}
                />

                <Route render={() => <div>Not Found</div>} />
              </Switch>
            )}
          </Transition>
        </RoutesContainer>
      </Container>
    )}
  />
);

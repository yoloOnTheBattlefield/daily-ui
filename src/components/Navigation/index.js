import React, { PureComponent } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Container = styled.nav`
  width: 300px;
  height: 100vh;
  overflow-y: scroll;
`;

export default withRouter(
  class extends PureComponent {
    render() {
      const location = this.props.location.pathname.split("/");

      return (
        <Container>
          {location.length > 2 && (
            <div>Current {location[location.length - 1]}</div>
          )}

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/ui/001">UI 001</Link>
            </li>
          </ul>
        </Container>
      );
    }
  }
);

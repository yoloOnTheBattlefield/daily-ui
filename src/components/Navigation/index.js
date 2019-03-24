import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.nav`
  width: 100%;
  position: fixed;
  z-index: 999;
  cursor: none;
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    li {
      margin: 0 16px;
    }
    a {
      color: white;
      text-decoration: none;
    }
  }
`;

export default class Navigation extends PureComponent {
  render() {
    return (
      <Container>
        <ul>
          <li>
            <Link to="/">CRISTIAN FLOREA</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
          <li>
            <Link to="/ui/001">UI 001</Link>
          </li>
        </ul>
      </Container>
    );
  }
}

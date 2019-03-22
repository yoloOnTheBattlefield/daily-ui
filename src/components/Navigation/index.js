import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

export default class extends PureComponent {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ui/001">UI 001</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

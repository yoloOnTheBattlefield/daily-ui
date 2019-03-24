import React from "react";
import styled from "styled-components";

const cursorWidth = 28;
const cursorInnerWidth = 10;

const Cursor = styled.div`
  opacity: ${({ show }) => (show ? 1 : 0)};
  position: absolute;
  width: ${cursorWidth}px;
  height: ${cursorWidth}px;
  background: rgba(251, 33, 0, 0.45);
  top: 0;
  left: 0;
  z-index: 0;
  transition: 0.1s;
  border-radius: 50%;
  transition: 0.05s ease-in-out;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid rgba(251, 33, 0, 0.5);
    left: -2px;
    top: -2px;
    border-radius: 50%;
  }
`;

const CursorInner = styled.div`
  position: absolute;
  opacity: ${({ show }) => (show ? 1 : 0)};
  width: ${cursorInnerWidth}px;
  height: ${cursorInnerWidth}px;
  position: absolute;
  background: rgba(251, 33, 0, 0.9);
  z-index: 3;
  top: 0;
  left: 0;
  transition: 0.1s;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(251, 33, 0, 0.6);
`;

export default class extends React.PureComponent {
  state = { showCursor: false };

  calculatePosition = ({ clientX, clientY }) => {
    if (!this.state.showCursor) {
      this.setState({ showCursor: true });
    }
    this.setState({ x: clientX, y: clientY });
  };
  componentDidMount() {
    document.addEventListener("mousemove", this.calculatePosition);
  }

  componentWillUnmount() {
    document.removeEventListener("mousemove", this.calculatePosition);
  }
  render() {
    const { showCursor, x, y } = this.state;
    const { show } = this.props;
    return (
      <React.Fragment>
        <Cursor
          show={show && showCursor}
          style={{
            transform: `translate(
    ${x - cursorWidth / 2}px,
    ${y - cursorWidth / 2}px)`
          }}
        />
        <CursorInner
          show={show && showCursor}
          style={{
            transform: `translate(
    ${x - cursorInnerWidth / 2}px,
    ${y - cursorInnerWidth / 2}px)`
          }}
        />
      </React.Fragment>
    );
  }
}

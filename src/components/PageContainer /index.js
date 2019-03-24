import React from "react";
import styled from "styled-components";
import { animated } from "react-spring/renderprops";

const Container = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default class PageContainer extends React.PureComponent {
  render() {
    const { style, children } = this.props;
    return (
      <Container style={{ ...style, background: `#ef5350` }}>
        {children}
      </Container>
    );
  }
}

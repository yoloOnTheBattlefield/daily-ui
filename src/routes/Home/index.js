import React, { PureComponent } from "react";
import { Transition, animated } from "react-spring/renderprops";
import styled from "styled-components";
import PageContainer from "components/PageContainer ";
import Cursor from "components/Cursor";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #111;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: none;
  position: relative;
  perspective: 40px;
`;

const HeaderContainer = styled(animated.div)`
  display: flex;
  justify-content: center;
  z-index: 2;
`;

const Header = styled.h1`
  font-weight: 800;
  font-size: 55px;
  color: #ffffff;
`;

const HeaderDimmed = styled(Header)``;

export default class extends PureComponent {
  state = { show: false };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, 1000);
  }

  render() {
    const { show } = this.state;
    return (
      <PageContainer>
        <Container>
          <Transition
            native
            items={this.state.show}
            from={{ position: "absolute", overflow: "hidden", height: 0 }}
            enter={[{ height: "auto" }]}
            leave={{ height: 0 }}>
            {show =>
              show &&
              (style => (
                <HeaderContainer
                  onMouseEnter={this.handleMouseEnter}
                  onMouseLeave={this.handleMouseLeave}
                  onMouseMove={this.handleMouseMove}
                  style={style}>
                  <Header>Cristian</Header>
                  <HeaderDimmed>Florea</HeaderDimmed>
                </HeaderContainer>
              ))
            }
          </Transition>
          <Cursor show={show} />
        </Container>
      </PageContainer>
    );
  }
}

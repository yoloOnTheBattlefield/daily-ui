import React, { PureComponent } from "react";
import styled from "styled-components";
import PageContainer from "components/PageContainer ";

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  background: #fafafa;
`;

const Inner = styled.div`
  width: 350px;
  height: 525px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: white;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 32px 32px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
`;

const Header = styled.h1`
  font-weight: 800;
  color: #202020;
  text-align: center;
  margin-top: 42px;
  font-size: 25px;
  margin-bottom: 10px;
`;

const Subheading = styled.p`
  text-align: center;
  font-weight: 300;
  font-size: 11px;
`;

const Paragraph = styled.p`
  margin-top: 64px;
  margin-bottom: 92px;
`;

const Button = styled.button`
  outline: none;
  padding: 16px 32px;
  background: #202020;
  color: white;
  width: 100%;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 400;
  border: none;
  cursor: pointer;
`;

export default class extends PureComponent {
  render() {
    return (
      <PageContainer {...this.props}>
        <Container>
          <Inner>
            <Header>REGISTER TODAY</Header>
            <Subheading>DAILYUI 001</Subheading>
            <Paragraph>
              G'day mate, wee need some details from you before we get started
            </Paragraph>
            <Button>CONTINUE</Button>
          </Inner>
        </Container>
      </PageContainer>
    );
  }
}

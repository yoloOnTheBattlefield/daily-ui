import React, { PureComponent } from "react";
import styled from "styled-components";
import PageContainer from "components/PageContainer ";

export default class extends PureComponent {
  render() {
    return <PageContainer {...this.props}>DAILYUI 001</PageContainer>;
  }
}

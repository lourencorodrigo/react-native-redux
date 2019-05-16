import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Content,
  Title,
  Text,
  Root
} from "native-base";

import * as CountAction from "./src/actions/count";

class App extends Component {
  render() {
    const {
      countState: { count },
      add,
      sub
    } = this.props;
    return (
      <Root>
        <Container>
          <Header>
            <Left>
              <Button transparent>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>Header: {count}</Title>
            </Body>
            <Right />
          </Header>
          <Content padder>
            <Button block rounded light onPress={() => add()}>
              <Text>+</Text>
            </Button>
            <Button block rounded info onPress={() => sub()}>
              <Text>-</Text>
            </Button>
          </Content>
        </Container>
      </Root>
    );
  }
}

const mapStateToProps = state => ({
  countState: state.count
});

const mapDispatchToProps = {
  ...CountAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

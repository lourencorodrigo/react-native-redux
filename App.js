import React, { Component } from "react";
import { connect } from "react-redux";
import { ListView } from "react-native";
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
  Root,
  Accordion,
  ActionSheet,
  Card,
  CheckBox,
  ListItem,
  CardItem,
  FooterTab,
  Form,
  Label,
  Item,
  Switch,
  Input,
  List,
  Footer
} from "native-base";

import * as CountAction from "./src/actions/count";

const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];

var BUTTONS = [
  { text: "Option 0", icon: "american-football", iconColor: "#2c8ef4" },
  { text: "Option 1", icon: "analytics", iconColor: "#f42ced" },
  { text: "Option 2", icon: "aperture", iconColor: "#ea943b" },
  { text: "Delete", icon: "trash", iconColor: "#fa213b" },
  { text: "Cancel", icon: "close", iconColor: "#25de5b" }
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

const datas = [
  "Simon Mignolet",
  "Nathaniel Clyne",
  "Dejan Lovren",
  "Mama Sakho",
  "Alberto Moreno",
  "Emre Can",
  "Joe Allen",
  "Phil Coutinho"
];

class App extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      check: false,
      basic: true,
      listViewData: datas
    };
  }
  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }

  render() {
    const {
      countState: { count },
      add,
      sub
    } = this.props;
    const { check } = this.state;
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
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
              <Title>Header | {count}</Title>
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
            <Accordion dataArray={dataArray} expanded={0} />
            <Button
              onPress={() =>
                ActionSheet.show(
                  {
                    options: BUTTONS,
                    cancelButtonIndex: CANCEL_INDEX,
                    destructiveButtonIndex: DESTRUCTIVE_INDEX,
                    title: "Testing ActionSheet"
                  },
                  buttonIndex => {
                    this.setState({ clicked: BUTTONS[buttonIndex] });
                  }
                )
              }
            >
              <Text>Actionsheet</Text>
            </Button>
            <Card>
              <CardItem>
                <Body>
                  <Text>Your text here</Text>
                </Body>
              </CardItem>
            </Card>
            <ListItem>
              <CheckBox
                onPress={() => this.setState({ check: !check })}
                checked={check}
              />
              <Body>
                <Text>Daily Stand Up</Text>
              </Body>
            </ListItem>
            <ListItem>
              <CheckBox
                onPress={() => this.setState({ check: !check })}
                checked={!check}
              />
              <Body>
                <Text>Discussion with Client</Text>
              </Body>
            </ListItem>
            <ListItem>
              <CheckBox checked={false} color="green" />
              <Body>
                <Text>Finish list Screen</Text>
              </Body>
            </ListItem>
            <Form>
              <Item rounded>
                <Input placeholder="Rounded Textbox" />
              </Item>
              <Item floatingLabel last>
                <Label>Password</Label>
                <Input />
              </Item>
              <Item>
                <Icon active name="home" />
                <Input placeholder="Icon Textbox" />
              </Item>
              <Item error>
                <Input placeholder="Textbox with Error Input" />
                <Icon name="close-circle" />
              </Item>
            </Form>
            <List>
              <ListItem>
                <Text>Simon Mignolet</Text>
              </ListItem>
              <ListItem>
                <Text>Nathaniel Clyne</Text>
              </ListItem>
              <ListItem>
                <Text>Dejan Lovren</Text>
              </ListItem>
            </List>
            <ListItem icon>
              <Left>
                <Button style={{ backgroundColor: "#FF9501" }}>
                  <Icon active name="airplane" />
                </Button>
              </Left>
              <Body>
                <Text>Airplane Mode</Text>
              </Body>
              <Right>
                <Switch
                  onValueChange={() => this.setState({ check: !check })}
                  value={check}
                />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Button style={{ backgroundColor: "#007AFF" }}>
                  <Icon active name="wifi" />
                </Button>
              </Left>
              <Body>
                <Text>Wi-Fi</Text>
              </Body>
              <Right>
                <Text>GeekyAnts</Text>
                <Icon active name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Button style={{ backgroundColor: "#007AFF" }}>
                  <Icon active name="bluetooth" />
                </Button>
              </Left>
              <Body>
                <Text>Bluetooth</Text>
              </Body>
              <Right>
                <Text>On</Text>
                <Icon active name="arrow-forward" />
              </Right>
            </ListItem>
            <List
              leftOpenValue={75}
              rightOpenValue={-75}
              dataSource={this.ds.cloneWithRows(this.state.listViewData)}
              renderRow={data => (
                <ListItem>
                  <Text> {data} </Text>
                </ListItem>
              )}
              renderLeftHiddenRow={data => (
                <Button full onPress={() => alert(data)}>
                  <Icon active name="information-circle" />
                </Button>
              )}
              renderRightHiddenRow={(data, secId, rowId, rowMap) => (
                <Button
                  full
                  danger
                  onPress={_ => this.deleteRow(secId, rowId, rowMap)}
                >
                  <Icon active name="trash" />
                </Button>
              )}
            />
          </Content>
          <Footer>
            <FooterTab>
              <Button vertical>
                <Icon name="apps" />
                <Text>Apps</Text>
              </Button>
              <Button vertical>
                <Icon name="camera" />
                <Text>Camera</Text>
              </Button>
              <Button vertical active>
                <Icon active name="navigate" />
                <Text>Navigate</Text>
              </Button>
              <Button vertical>
                <Icon name="person" />
                <Text>Contact</Text>
              </Button>
            </FooterTab>
          </Footer>
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

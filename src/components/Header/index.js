import React, { Component } from "react";

import {
  HeaderContainer,
  Menu,
  Title,
  List,
  Item,
  Link,
  Container,
  Informations,
  Contacts,
  Trigger
} from "./styles";

export default class Header extends Component {
  state = {
    active: false
  };

  handleClickMenu = () => {
    const { active } = this.state;

    this.setState({
      active: !active
    });
  };

  render() {
    const { active } = this.state;

    return (
      <HeaderContainer>
        <Trigger status={active} onClick={this.handleClickMenu} />
        <Menu>
          <Title>
            Lucas<span>Kahl</span>
          </Title>
          <List status={active}>
            <Item>
              <Link href="#about">About me</Link>
            </Item>
            <Item>
              <Link href="#projects">Projects</Link>
            </Item>
            <Item>
              <Link href="https://medium.com/@lucaschangkahl">Blog</Link>
            </Item>
          </List>
        </Menu>
        <Container status={active}>
          <Informations status={active}>
            <h1>Front-end Software Engineer</h1>
            <h5>São Paulo</h5>
          </Informations>
          <Contacts>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/lucaskahl/"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/lucaskahl">
                  Github
                </a>
              </li>
              <li>
                <a href="https://medium.com/@lucaschangkahl">Blog</a>
              </li>
              <li>
                <a href="mailto:lucaschangkahl@gmail.com">Email</a>
              </li>
              <li>
                <a>Resume</a>
              </li>
            </ul>
          </Contacts>
        </Container>
      </HeaderContainer>
    );
  }
}

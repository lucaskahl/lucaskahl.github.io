import React, { Component } from "react";

import { Container, Informations, Details, Modal } from "./styles";

class About extends Component {
  render() {
    return (
      <Container id="about">
        <Informations>
          <img src="https://avatars0.githubusercontent.com/u/36921642?s=400&u=c711a1c771e518c6cb035355ae01d2b5b612b39e&v=4" />
        </Informations>
        <Details>
          <Modal>
            <h2>Hey friends, how are you ?</h2>
            <p>My name is Lucas Kahl</p>
            <p>
              Front-end developer with great emphasis on code quality, front-end
              architectures, accessibility, cross-browser and performance.
              Always learning new things and looking for challenges.
            </p>
            <p>
              Main interests: Web development, design patterns, programming
              paradigms, TDD, front-end architectures / frameworks / libraries,
              algorithms, interface accessibility / usability, and application
              performance..
            </p>
          </Modal>
        </Details>
      </Container>
    );
  }
}

export default About;

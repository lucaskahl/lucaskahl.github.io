import styled from "styled-components";

import Location from "../../assets/images/location.svg";
import Linkedin from "../../assets/images/linkedin.svg";
import Github from "../../assets/images/github.svg";
import Medium from "../../assets/images/medium.svg";
import Email from "../../assets/images/email.svg";
import Resume from "../../assets/images/resume.svg";

export const Container = styled.div`
  background-color: #b44a3a;
  padding: 75px 0px;

  h3 {
    font-size: 32px;
    margin-bottom: 10px;
  }

  h3,
  p {
    color: #fff;
    text-align: center;
  }
`;

export const Contacts = styled.div`
  margin-top: 70px;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  li {
    margin-right: 30px;
    list-style: none;
    transition: transform 0.2s;

    @media (max-width: 768px) {
      margin-right: 15px;

      &:last-child {
        margin-right: 0px;
      }
    }

    &:hover {
      transform: ${props =>
        props.disabled ? "translateY(0%)" : "translateY(-20%)"};
    }

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      color: rgba(255, 255, 255, 0.69);

      &::before {
        margin-bottom: 5px;
      }
    }
  }

  li:nth-child(1) {
    a {
      &::before {
        content: "";
        display: inline-block;
        background-image: url(${Linkedin});
        background-size: 20px 20px;
        height: 20px;
        width: 20px;
        margin-right: 5px;
      }
    }
  }

  li:nth-child(2) {
    a {
      &::before {
        content: "";
        display: inline-block;
        background-image: url(${Github});
        background-color: #fff;
        border-radius: 50%;
        background-size: 20px 20px;
        height: 20px;
        width: 20px;
        margin-right: 5px;
      }
    }
  }

  li:nth-child(3) {
    a {
      &::before {
        content: "";
        display: inline-block;
        background-image: url(${Medium});
        background-size: 20px 20px;
        height: 20px;
        width: 20px;
        margin-right: 5px;
      }
    }
  }

  li:nth-child(4) {
    a {
      &::before {
        content: "";
        display: inline-block;
        background-image: url(${Email});
        background-size: 20px 20px;
        height: 20px;
        width: 20px;
        margin-right: 5px;
      }
    }
  }

  li:nth-child(5) {
    a {
      &::before {
        content: "";
        display: inline-block;
        background-image: url(${Resume});
        background-size: 20px 20px;
        height: 20px;
        width: 20px;
        margin-right: 5px;
      }
    }
  }
`;

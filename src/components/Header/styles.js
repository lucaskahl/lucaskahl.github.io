import styled from "styled-components";
import Header from "../../assets/images/header.jpg";
import Location from "../../assets/images/location.svg";
import Linkedin from "../../assets/images/linkedin.svg";
import Github from "../../assets/images/github.svg";
import Medium from "../../assets/images/medium.svg";
import Email from "../../assets/images/email.svg";
import Resume from "../../assets/images/resume.svg";
import MenuIcon from "../../assets/images/menu.svg";

export const HeaderContainer = styled.header`
  border-top: 8px solid #b44a3a;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 60vh;
  background: url(${Header});
  background-size: cover;
  background-position: center;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);

  ::after {
    content: "";
    background: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
    position: absolute;
  }
`;

export const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 100px 0;
  height: 20%;
  z-index: ${props => (props.status ? "0" : "2")};
`;

export const Title = styled.h3`
  color: #fff;
  font-weight: bold;
  font-size: 25px;

  @media (max-width: 768px) {
    margin: 0 auto;
    font-size: 28px;
  }

  span {
    font-weight: 200;
  }
`;

export const List = styled.ul`
  display: flex;
  list-style: none;

  @media (max-width: 768px) {
    background-color: rgba(180, 74, 58, 0.5);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    transform: ${props =>
      props.status ? "translateX(0px)" : "translateX(-100%)"};
    transition: transform linear 0.3s;
    z-index: 9 !important;
  }
`;

export const Item = styled.li`
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: #fff;

  @media (max-width: 768px) {
    color: #fff;
    font-size: 30px;
    font-weight: bold;
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: ${props => (props.status ? "0" : "2")};
  min-width: 415px;

  @media (max-width: 768px) {
    min-width: initial;
    position: absolute;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Informations = styled.div`
  h1 {
    color: #fff;

    @media (max-width: 768px) {
      text-align: center;
      font-size: 26px;
    }
  }

  h5 {
    font-size: 18px;
    color: #fff;
    font-weight: 200;
    margin-top: 10px;

    @media (max-width: 768px) {
      text-align: center;
    }

    &::before {
      content: "";
      display: inline-block;
      background-image: url(${Location});
      background-size: 20px 20px;
      height: 20px;
      width: 20px;
      margin-right: 5px;
    }
  }
`;

export const Contacts = styled.div`
  margin-top: 40px;

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
      transform: translateY(-20%);
    }

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      color: #fff;

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

export const Trigger = styled.div`
  @media (min-width: 768px) {
    display: none;
  }

  content: "";
  z-index: 10;
  position: fixed;
  left: 5px;
  top: 10px;
  background-image: url(${MenuIcon});
  background-size: 40px 40px;
  height: 40px;
  width: 40px;
  cursor: pointer;
  transform: ${props =>
    props.status ? "translateX(85vw)" : "translateX(0px)"};
  transition: transform linear 0.3s;
`;

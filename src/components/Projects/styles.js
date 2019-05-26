import styled from "styled-components";

import Monitor from "../../assets/images/monitor.svg";
import Chip from "../../assets/images/chip.svg";
import Dot from "../../assets/images/dot.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 100px 0;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    padding: 0;
  }

  h1 {
    margin-top: 50px;

    @media (max-width: 768px) {
      text-align: center;
      margin-top: 20px;
    }
  }
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  max-width: 800px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

export const Information = styled.div`
  min-width: 300px;

  h3 {
    margin-top: 30px;
    margin-bottom: 20px;
  }

  .project {
    &__background {
      background-size: 100% 100%;
      background-position: center;
      width: 300px;
      height: 200px;
      box-shadow: 0 8px 10px rgba(0, 0, 0, 0.3);
    }

    &__actions {
      margin-top: 10px;
      margin-bottom: 10px;
      cursor: pointer;

      a {
        color: ${props => (props.disabled ? "gray" : "#b44a3a")};
        cursor: ${props => (props.disabled ? "default" : "pointer")};
      }

      a:nth-child(1) {
        margin-left: 5px;

        &::before {
          content: "";
          display: inline-block;
          background-image: url(${Monitor});
          background-color: #fff;
          border-radius: 50%;
          background-size: 20px 20px;
          height: 20px;
          width: 20px;
          margin-right: 5px;
        }
      }

      a:nth-child(2) {
        margin-left: 30px;

        &::before {
          content: "";
          display: inline-block;
          background-image: url(${Chip});
          background-color: #fff;
          border-radius: 50%;
          background-size: 20px 20px;
          height: 20px;
          width: 20px;
          margin-right: 5px;
        }
      }
    }
  }
`;

export const Tecnologies = styled.div`
  margin-top: 20px;

  h3 {
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    max-height: 200px;

    @media (max-width: 768px) {
      max-height: none;
    }

    li {
      margin: 5px;

      &::before {
        content: "";
        display: inline-block;
        background-image: url(${Dot});
        background-color: #fff;
        border-radius: 50%;
        background-size: 10px 10px;
        height: 10px;
        width: 10px;
        margin-right: 5px;
      }
    }
  }
`;

export const Overview = styled.div`
  margin-left: 100px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-top: 20px;
    margin-left: 0px;
    max-width: 300px;
  }
`;

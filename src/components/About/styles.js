import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 100px 0;
  padding-bottom: 100px;
  margin-top: 100px;
  border-bottom: 1px solid rgba(193, 79, 62, 0.5);

  @media (max-width: 768px) {
    padding: 0px;
    display: block;
    max-width: 300px;
    margin: 0 auto;
    border-bottom: none;
  }
`;

export const Wrapper = styled.div``;

export const Informations = styled.div`
  position: relative;
  padding: 80px 0;
  padding-left: 0px;
  min-width: 250px;

  img {
    max-width: 200px;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    padding-bottom: 5px;
    img {
      display: block;
      margin: 0 auto;
      margin-bottom: 20px;
    }

    &::after {
      display: none;
    }
  }

  &::after {
    content: "";
    position: absolute;
    width: 5px;
    background: #e9e9e9;
    right: 0;
    top: 0;
    height: 100%;
    box-shadow: 0.6rem 0 1rem rgba(0, 0, 0, 0.15);
  }

  h2 {
    font-size: 30px;
    margin-bottom: 20px;
    color: #353a47;
    max-width: 300px;
  }

  ol {
    padding-left: 20px;

    li {
      margin-bottom: 20px;
      font-size: 18px;
      color: #b44a3a;

      &::after {
        content: "";
        z-index: 2;
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        width: 5px;
        background: none;
      }
    }

    .no-active {
      &:hover {
        color: #d17e72;
        position: relative;

        &::after {
          background: #d17e72;
          width: 5px;
          height: 100%;
        }
      }
    }

    .active {
      color: #b44a3a;
      position: relative;

      &::after {
        background: #b44a3a;
      }
    }
  }
`;

export const Details = styled.div`
  padding: 80px 0;
  margin-left: 40px;
  max-width: 900px;

  @media (max-width: 768px) {
    padding: 40px 0;
    margin-left: 0px;
    padding-top: 5px;
  }

  h2 {
    font-size: 24px;
    color: #0d0504;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  p {
    line-height: 24px;
    font-size: 16px;
    color: #646f79;
  }
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    text-align: center;
  }
`;

import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  font-family: "Gilroy";
  justify-content: space-between;

  button {
    margin-top: 25px;
    margin-right: 20px;
    color: #000000;
    font-size: 14px;
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 500;
    height: 27px;
    width: 86px;
    border-radius: 4px;
    letter-spacing: 0.01em;
    border: 1px solid rgba(255, 255, 255, 0);
  }
`;

export const Date = styled.h1`
  font-family: Gilroy;
  font-weight: 800;
  height: 47px;
  font-style: normal;
  font-size: 28px;
  line-height: 41px;
  margin-left: 18px;
  letter-spacing: 0.01em;
`;

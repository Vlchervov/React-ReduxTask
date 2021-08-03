import React from "react";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  font-family: Gilroy;

  button {
    font-family: Gilroy;
    height: 27px;
    width: 86px;
    margin-top: 105.5px;
    background: #f2f2f2;
    border-radius: 4px;
    margin-left: 40px;
  }
`;

const Date = styled.h1`
  font-family: Gilroy;
  margin-top: 98.8px;
  font-weight: 800;
  height: 47px;
  font-style: normal;
  font-size: 28px;
  line-height: 41px;
  margin-left: 63px;
  letter-spacing: 0.01em;
`;

const AppHeader = (props) => {
  return (
    <Header>
      <Date>Сегодня</Date>
      <button>
        Править
      </button>
    </Header>
  );
};

export default AppHeader;

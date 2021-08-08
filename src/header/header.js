import React from "react";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  font-family: 'Gilroy';
  justify-content: space-between;
  

  button {
    color: #000000;
    font-size: 14px;
    font-family:'Gilroy';
    font-style: normal;
    font-weight: 500;
    height: 27px;
    width: 86px;
    margin-top: 105.5px;
    border-radius: 4px;
    letter-spacing: 0.01em;
    border: 1px solid rgba(255, 255, 255, 0);
    margin-right: 40px;
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
  margin-left: 18px;
  letter-spacing: 0.01em;
`;

const AppHeader = (props) => {
  return (
    <Header>
      <Date>Сегодня</Date>
      <button
        onClick={() => {
          props.setChange(!props.change);
        }}
      >
        {props.change ? "Отмена" : "Править"}
      </button>
    </Header>
  );
};

export default AppHeader;

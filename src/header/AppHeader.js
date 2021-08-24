import React from "react";
import { Header, Date } from "../styledComponents/appHeader.styled.js";

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

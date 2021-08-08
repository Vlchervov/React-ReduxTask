import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import Modal from "./AddModal";
import ModalEdit from "./ModalEdit";
import AppHeader from "../header/header";
import styled from "styled-components";

const AfterRemove = styled.p`
  font-family: "Gilroy";
  font-size: 18px;
  margin-left: 15px;
`;

function TodoList(props) {
  const [state, setState] = useState(false);
  const [edit, setEdit] = useState(false);
  const [change, setChange] = useState(false);
  const taskAdd = props.state.map((task) => {
    return (
      <Fragment key={Math.random()}>
        <ModalEdit
          edit={edit}
          setEdit={setEdit}
          tasks={props.state}
          value={task.value}
          id={task.id}
          class={task.class}
          change={change}
          setChange={setChange}
          state={state}
        />
      </Fragment>
    );
  });

  return (
    <>
      <AppHeader
        change={change}
        tasks={props.state}
        setChange={setChange}
        value={props.value}
      />
      <Modal state={state} setState={setState} />
      {props.state.length ? (
        <ul>{taskAdd}</ul>
      ) : (
        <AfterRemove>Список пуст!</AfterRemove>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  state,
});
export default connect(mapStateToProps)(TodoList);

import React, { Fragment, useState } from "react";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
import Modal from "./Modal";
import TodoEdit from "./TodoEdit";
import ModalEdit from "./ModalEdit";
import AppHeader from "../header/header";

function TodoList(props) {
  const [state, setState] = useState(false);
  const [edit, setEdit] = useState(false);
  const taskAdd = props.state.map((task) => {
    return (
      <Fragment key={Math.random()}>
        <TodoItem
          value={task.value}
          key={task.id}
          id={task.id}
          tasks={props.state}
          class={task.class}
        />

        <ModalEdit
          edit={edit}
          setEdit={setEdit}
          tasks={props.state}
          value={task.value}
          id={task.id}
          class={task.class}
        />
      </Fragment>
    );
  });



  return (
    <>
      <Modal state={state} setState={setState} />
      <ul>{taskAdd}</ul>
    </>
  );
}

const mapStateToProps = (state) => ({
  state,
});
export default connect(mapStateToProps)(TodoList);

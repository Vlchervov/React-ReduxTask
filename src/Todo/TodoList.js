import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import AddModal from "./AddModal";
import TodoItem from "./TodoItem";
import AppHeader from "../header/AppHeader";
import { AfterRemove } from "../styledComponents/todoList.styled";

function TodoList(props) {
  const [state, setState] = useState(false);
  const [change, setChange] = useState(false);

  const taskAdd = props.state.map((task) => {
    return (
      <Fragment key={task.id}>
        <TodoItem
          class={task.class}
          value={task.value}
          id={task.id}
          change={change}
        />
      </Fragment>
    );
  });

  return (
    <>
      <AppHeader
        change={change}
        setChange={setChange}
        value={props.value}
      />
      {props.state.length ? (
        <ul>{taskAdd}</ul>
      ) : (
        <AfterRemove>Список пуст!</AfterRemove>
      )}
      <AddModal state={state} setState={setState} change={change} />
    </>
  );
}

const mapStateToProps = (state) => ({
  state,
});
export default connect(mapStateToProps)(TodoList);

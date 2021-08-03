import React from "react";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
import store from "../store/store";

function TodoList(props) {
  const taskAdd = props.state.map((task) => {
    return (
      <TodoItem
        value={task.value}
        key={task.id}
        id={task.id}
        tasks={props.state}
        class={task.class}
        isEdit={props.isEdit}
      />
    );
  });
  return <ul>{taskAdd}</ul>;
}

const mapStateToProps = (state) => ({
   state,
});
export default connect(mapStateToProps)(TodoList);

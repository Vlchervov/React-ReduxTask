import React, { useState } from "react";
import addTask from "../store/actionCreators/addTask";
import { connect } from "react-redux";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  margin-top: 250px;
  margin-left: 50px;

  button {
    border-radius: 15px;
  }
`;

function AddTodo(props) {
  const [value, setValue] = useState("");

  function submitHandler(event) {
    event.preventDefault();

    if (value.trim()) {
      setValue("");
    }
  }
  return (
    <Form onSubmit={submitHandler}>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button type="submit" onClick={() => props.addTask(value, props.id)}>
        Добавить
      </button>
    </Form>
  );
}

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  addTask: (id) => {
    dispatch(addTask(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);

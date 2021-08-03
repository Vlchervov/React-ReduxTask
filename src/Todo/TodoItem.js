import React, { useState } from "react";
import { connect } from "react-redux";
import editTask from "../store/actionCreators/editTask";
import removeTask from "../store/actionCreators/removeTask";
// import { id } from 'postcss-selector-parser'
import styled from "styled-components";

const ListItem = styled.div`


`;

const Label = styled.label `
width: 295px;
height: 22px;
font-family: 'Gilroy';
font-size: 18px;
font-weight: 500;
line-height: 40px;
letter-spacing: 0.01em;

color: #000000;
`



function TodoItem(props) {
  const [input, setInput] = useState("");
  const [state, setState] = useState(true);
  const [edit, setEdit] = useState('');

  function submitHandler(event) {
    event.preventDefault();
    if (input.trim()) {
      setInput("");
    }
  }
  return (
    <>
      <ListItem 
    
      state={state}>
        {/* <input
          type="checkbox"
          id={props.id}
          /> */}
        {/* <span>
            <input
              type="checkbox"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <strong>{props.id}</strong>
            &nbsp;
            {props.title}
          </span> */}
      </ListItem>

      <Label edit={edit} onClick={() => props.setEdit(!props.edit)}
        
          htmlFor={props.id}>
          {props.value}
        </Label>

      <form onSubmit={submitHandler}>
        {/* <input
          value={input}
          className="input"
          type="text"
          placeholder="Добавить задачу"
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          className="editButton"
          type="submit"
          onClick={() => props.editTask(input, props.id)}
        >
          Изменить
        </button> */}

        {/* <Modal setState={props.setState} 
        /> */}
        {/* <button
          onClick={() => props.removeTask(props.id)}
        >
          &times;
        </button> */}

        {/* <button
      >

        
      </button> */}
      </form>
    </>
  );
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  editTask: (value, id) => {
    dispatch(editTask(value, id));
  },
  removeTask: (id) => {
    dispatch(removeTask(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);

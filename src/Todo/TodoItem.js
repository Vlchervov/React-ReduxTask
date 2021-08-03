import React, { useState } from "react";
import { connect } from "react-redux";
import editTask from "../store/actionCreators/editTask";
import removeTask from "../store/actionCreators/removeTask";
// import { id } from 'postcss-selector-parser'
import styled from "styled-components";


const ListItem = styled.div`
position: relative;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-flow: column nowrap;
flex-flow: column nowrap;
max-width: 1280px;

&::after{
    position: absolute;
    left: 0;
    content: '';
    width: 15px;
    height: 15px;
    border: ${props => props.state ? 'none' : '1px solid blue;' };
    border-radius: 100%;
    z-index: 5;
    background-image: ${props => props.state ? 'url("img/delete.svg")' : 'none' };

  }



label {
  font-family: "Gilroy";
  font-weight: 400;
  font-size: 18px;
  line-height: 120%;
  letter-spacing: 0.01em;
  padding-left: 36px;
  line-height: 1.5;
  cursor: pointer;

  &::before{
    position: absolute;
    left: 0;
    content: '';
    display: block;
    width: 5px;
    height: 5px;
    background-image: url(/img/check.svg);
    border-radius: 100%;
    z-index: 10;
    opacity: 0;
  }
}

input[type='checkbox'] {
  display: none;
  &:checked + label::before {
    position: absolute;
    top: 3px;
    left: 4px;
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    opacity: ${props => props.state ? 0 : 1 };
    /* background-image: url(/img/delete.svg); */
  }
}
`;

function TodoItem(props) {
  const [input, setInput] = useState("");
  const [state, setState] = useState(true);

  function submitHandler(event) {
    event.preventDefault();
    if (input.trim()) {
      setInput("");
    }
  }


  return (
    <>
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

        <ListItem state={state}>
          {/* <p>{props.value}</p> */}
          <input
          type="checkbox"
          id={props.id}
          />
          <label
          htmlFor={props.id}
          >
            {props.value}
          </label>
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

        {/* <button
          className="removeButton"
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

const mapStateToProps = (state) => ({
 state,
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

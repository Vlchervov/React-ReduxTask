import React, { useState } from "react";
import { connect } from "react-redux";
import editTask from "../store/actionCreators/editTask";
import removeTask from "../store/actionCreators/removeTask";
// import { id } from 'postcss-selector-parser'
import styled from "styled-components";
import taskReducer from "../store/reducer";

const ListItem = styled.div``;

const Label = styled.label`
    width: 295px;
    height: 22px;
    font-family: "Gilroy";
    font-size: 18px;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: 0.01em;

    color: #000000;
  `;

function TodoItem(props) {
  const [value, setValue] = useState('');
  const [input, setInput] = useState("");
  const [state, setState] = useState(false);
  const [edit, setEdit] = useState("");

  // function submitHandler(event) {
  //   event.preventDefault();
  //   if (value.trim()) {
  //     setValue("");
  //     setInput('');
  //   }
  // }
  return (
    <>


      <ListItem>

      </ListItem>

      {/* <Label> {props.value} </Label> */}


      {/* {props.edit && (<div className="modal">
        <div className='modal-body'>
          <form onSubmit={submitHandler}>
            <input
            value={value}
            type="text"
            placeholder="редактировать задачу"
            onChange={(e) => setValue(e.target.value)}
            />
            
            <button
              className="editButton"
              type="submit"
              onClick={() => props.editTask(value, props.id)}
              >Изменить</button>
              

            <button onClick={() => props.setEdit(!props.setEdit)}>Закрыть окно</button>
          </form>
        </div>
      </div>)} */}

      {/* <button onClick={() => props.setEdit(!props.edit)}>Modal add</button>
      {props.edit && (<div className="modal">
        <div className='modal-body'>
          <form onSubmit={submitHandler}>
            <input 
            placeholder="Введите задачу"
            value={edit}
            onChange={(e) => setValue(e.target.value)} />
            <button
            type="submit"
            onClick={() => props.editTask(value, props.id)}
            >Редактировать</button>
            <button>Закрыть</button>
          </form>
        </div>
      </div>)} */}









      
      {/* <form onSubmit={submitHandler}>
        <input
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
      {/* </form> */}
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

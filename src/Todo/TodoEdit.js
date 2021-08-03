import React, {useState} from 'react'
import {connect} from 'react-redux'
import removeTask from '../store/actionCreators/removeTask';
import editTask from '../store/actionCreators/editTask';
import styled from 'styled-components';


function TodoEdit (props) {
const [value, setValue] = useState('');
const [input, setInput] = useState('');

function submitHandler(event) {
    event.preventDefault();

    if (value.trim()) {
        setValue('')
    }
}

return (
 <div className="wrapper" htmlFor={props.id}>
     {/* <label onClick={() => props.setCorrect(!props.correct)}>
     </label> */}

    {props.edit && (<div className="modal">
         <div className='modal-body'>
         <form onSubmit={submitHandler}>
        <input
          value={value}
          type="text"
          placeholder="Добавить задачу"
          onChange={(e) => setValue(e.target.value)}
        />

        <button
          className="editButton"
          type="submit"
          onClick={() => props.editTask(value, props.id)}
        >
          Изменить
        </button>
             <button onClick={() => props.setEdit(!props.setEdit)}>close modal</button>
             </form>
         </div>
     </div>)}
 </div>
)
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

export default connect(mapStateToProps, mapDispatchToProps)(TodoEdit);



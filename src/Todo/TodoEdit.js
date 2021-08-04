import React, { useState } from "react";
import { connect } from "react-redux";
// import removeTask from '../store/actionCreators/removeTask';
import editTask from "../store/actionCreators/editTask";
import styled from "styled-components";

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

function TodoEdit(props) {
  const [value, setValue] = useState("");
  const [input, setInput] = useState("");


  // function submitHandler(event) {
  //   event.preventDefault();

  //   if (value.trim()) {
  //     setValue("");
  //     setInput("");
  //   }
  // }

  // return (
  //   // <>
  //   //   <Label onClick={() => props.setEdit(!props.edit)}> {props.value}</Label>
  //   //   {props.edit && (
  //   //     <div className="modal">
  //   //       <div className="modal-body">
  //   //         <form>
  //   //           <input
  //   //             type="text"
  //   //             placeholder={props.value}
  //   //             onChange={(e) => setValue(e.target.value)}
  //   //           />
  //   //           <h1>Awesome modal</h1>
  //   //           <p>When? if not now?</p>
  //   //           <button onClick={() => props.editTask(value, props.id)}>
  //   //             редактировать
  //   //           </button>
  //   //           <button onClick={() => props.setEdit(!props.setEdit)}>
  //   //             отмена
  //   //           </button>
  //   //         </form>
  //   //       </div>
  //   //     </div>
  //   //   )}
  //   // </>
  // )
}

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
  editTask: (value, id) => {
    dispatch(editTask(value, id));
  },
  // removeTask: (id) => {
  //   dispatch(removeTask(id));
  // },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoEdit);

{
  /* <form onSubmit={submitHandler}>
        <input
          value={props.value}
          type="text"
          placeholder="Добавить задачу"
          onChange={(e) => setValue(e.target.value)}
        />

        <button type="submit" onClick={() => props.editTask(value, props.id)}>
          Изменить
        </button>
      </form> */
}

import React, { useState } from "react";
import { connect } from "react-redux";
import editTask from "../store/actionCreators/editTask";
import { Transition } from "react-transition-group";
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


function ModalEdit(props) {
  const [formIsVisible, setVisible] = useState(false);
  const [value, setValue] = useState("");

  return (
    <>
      <section htmlFor={props.id} key={props.id}>
        <Label onClick={() => setVisible(true)}>{props.value}</Label>
        {props.edit && (
          <div className="modal">
            <div className="modal-body">
              <label></label>
            </div>
          </div>
        )}
        <Transition in={formIsVisible} timeout={2} mountOnEnter unmountOnExit>
          {() => (
            <div>
              <input
                type="text"
                placeholder={props.value}
                onChange={(event) => setValue(event.target.value)}
              ></input>
              <div>
                <button
                  
                  onClick={() => {
                    props.editTask(value, props.id);
                    setVisible(false);
                  }}
                >
                  редактировать
                </button>
                <button className="" onClick={() => setVisible(false)}>
                  отмена
                </button>
              </div>
            </div>
          )}
        </Transition>
      </section>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalEdit);

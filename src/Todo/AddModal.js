import React, { useState } from "react";
import { connect } from "react-redux";
import {addTask} from "../store/actionCreators/actions";

import {
  Wrapper,
  ModalButtonAddTask,
  Form,
  ModalBody,
  AddButton,
  CloseButton,
  ModalWrapper,
} from "../styledComponents/addModal.styled";

function AddModal(props) {
  const [value, setValue] = useState("");

  function submitHandler(event) {
    event.preventDefault();

    if (value.trim()) {
      setValue("");
    }
  }
  return (
    
    <Wrapper>
      <ModalButtonAddTask
        change={props.change}
        onClick={() => {
          if (!props.change) {
            props.setState(!props.state);
          }
        }}
      >
        <span></span>
        <strong></strong>
      </ModalButtonAddTask>
      {props.state && (
        <ModalWrapper>
          <ModalBody>
            <Form onSubmit={submitHandler}>
              <textarea
                placeholder="Введите текст задачи"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <CloseButton
                onClick={(e) => {
                  e.preventDefault();
                  props.setState(!props.setState);
                }}
              >
                закрыть
              </CloseButton>
              <AddButton
                onClick={() => {
                  props.addTask(value, props.id);
                }}
              >
                добавить
              </AddButton>
            </Form>
          </ModalBody>
        </ModalWrapper>
      )}
    </Wrapper>
  );
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  addTask: (id) => {
    dispatch(addTask(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddModal);

import React, { useState } from "react";
import { connect } from "react-redux";
import { Transition } from "react-transition-group";
import { addTask } from "../store/actionCreators/actions";

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
  const [formIsVisible, setVisible] = useState(false);

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
            setVisible(true);
          }
        }}
      >
        <span></span>
        <strong></strong>
      </ModalButtonAddTask>

      <Transition in={formIsVisible} timeout={2} mountOnEnter unmountOnExit>
        {() => (
          <ModalWrapper>
            <ModalBody>
              <Form onSubmit={submitHandler}>
                <textarea
                  placeholder="Введите текст задачи"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                <CloseButton
                  change={props.state}
                  onClick={() => {
                    setVisible(false);
                  }}
                >
                  закрыть
                </CloseButton>
                <AddButton
                  onClick={() => {
                    props.addTask(value, props.id);
                    setVisible(false);
                  }}
                >
                  добавить
                </AddButton>
              </Form>
            </ModalBody>
          </ModalWrapper>
        )}
      </Transition>
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

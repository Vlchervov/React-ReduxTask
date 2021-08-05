import React, { useState } from "react";
import { connect } from "react-redux";
import addTask from "../store/actionCreators/addTask";
import styled from "styled-components";

const Wrapper = styled.div``;

const ModalButtonAddTask = styled.button`
  position: absolute;
  top: 450px;
  left: 451px;
  /* background-color: rgba(0, 0, 0, 0.7); */
  border: 1px solid rgba(255, 255, 255, 0.6);
  width: 60px;
  height: 60px;
  border-radius: 100%;
  /* -webkit-box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.1);
  -webkit-transition: 0.5s;
  transition: 0.5s; */

  span {
    position: absolute;
    display: block;
    top: 27px;
    left: 14px;
    width: 30px;
    height: 3px;
    color: #23a3ff;
    background-color: #23a3ff;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }

  strong {
    position: absolute;
    display: block;
    top: 27px;
    left: 14px;
    width: 30px;
    height: 3px;
    color: #23a3ff;
    background-color: #23a3ff;
  }
`;

const Form = styled.form`
  margin-left: 40px;

  input {
    width: 295px;
    height: 160px;
    border: 2px solid #e6e6e6;
    box-sizing: border-box;
    padding-left: 15px;
    border-radius: 10px;

    ::placeholder {
      width: 255px;
      height: 22px;
      left: 60px;
      font-family: "Gilroy";
      font-style: normal;
      font-size: 16px;

      letter-spacing: 0.01em;

      color: #999999;
    }
  }
`;

const ModalBody = styled.div`
  display: flex;
  padding: 2rem;
  width: 375px;
  border-radius: 5px;
  background: #fff;
  height: 680px;
  border-radius: 30px;
`;

const AddButton = styled.button`
  border-radius: 10px;
  width: 137px;
  height: 40px;
  margin-top: 5px;
  margin-left: 7px;
  background-color: #23a3ff;
`;

const CloseButton = styled.button`
  margin-left: 4px;
  border-radius: 10px;
  width: 137px;
  height: 40px;
  margin-top: 25px;
  background-color: #f2f2f2;
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  padding-top: 5rem;
`;

function Modal(props) {
  const [value, setValue] = useState("");

  function submitHandler(event) {
    event.preventDefault();

    if (value.trim()) {
      setValue("");
    }
  }
  return (
    <Wrapper>
      <ModalButtonAddTask onClick={() => props.setState(!props.state)}>
        <span></span>
        <strong></strong>
      </ModalButtonAddTask>
      {props.state && (
        <ModalWrapper>
          <ModalBody>
            <Form
            onSubmit={submitHandler}>
              <input
                placeholder="Введите текст задачи"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />

              <AddButton onClick={() => props.addTask(value, props.id)}>
                добавить
              </AddButton>
              <CloseButton onClick={() => props.setState(!props.setState)}>
                закрыть
              </CloseButton>
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

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

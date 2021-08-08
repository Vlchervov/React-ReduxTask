import React, { useState } from "react";
import { connect } from "react-redux";
import addTask from "../store/actionCreators/addTask";
import styled from "styled-components";

const Wrapper = styled.div``;

const ModalButtonAddTask = styled.button`
  position: absolute;
  top: 460px;
  left: 277px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  width: 60px;
  height: 60px;
  border-radius: 100%;

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
  margin-left: 10px;

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

    @media (min-height: 568px) and (max-width: 320px) {
      height: 120px;
      width: 250px;
    }
  }
`;

const ModalBody = styled.div`
  display: flex;
  padding: 2rem;
  width: 375px;
  background: #fff;
  height: 452px;
  border-radius: 40px 40px 0px 0px;

  @media screen and (min-height: 812px) and (max-width: 375px) {
    height: 592px;
    width: 375px;
  }

  @media (min-height: 736px) and (max-height: 736px) {
    height: 515px;
    padding-left: 3rem;
  }

  @media (min-height: 568px) and (max-width: 320px) {
    height: 380px;
    width: 290px;
  }
`;

const AddButton = styled.button`
  color: white;
  border-radius: 10px;
  width: 137px;
  height: 40px;
  margin-top: 5px;
  margin-left: 7px;
  background-color: #23a3ff;
  border: 1px solid rgba(255, 255, 255, 0);
  margin-left: 17px;
  font-size: 16px;

  @media (min-height: 568px) and (max-width: 320px) {
    margin-left: 20px;
    height: 40px;
    width: 100px;
  }
`;

const CloseButton = styled.button`
  margin-left: 4px;
  border-radius: 10px;
  width: 137px;
  height: 40px;
  margin-top: 25px;
  background-color: #f2f2f2;
  border: 1px solid rgba(255, 255, 255, 0);
  font-size: 16px;

  @media (min-height: 568px) and (max-width: 320px) {
    height: 40px;
    width: 100px;
    margin-left: 10px;
  }
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  z-index: 2;
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
            <Form onSubmit={submitHandler}>
              <input
                placeholder="Введите текст задачи"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <CloseButton onClick={() => props.setState(!props.setState)}>
                закрыть
              </CloseButton>
              <AddButton onClick={() => props.addTask(value, props.id)}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

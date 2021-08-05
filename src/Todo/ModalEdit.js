import React, { useState } from "react";
import { connect } from "react-redux";
import editTask from "../store/actionCreators/editTask";
import { Transition } from "react-transition-group";
import styled from "styled-components";
import removeTask from "../store/actionCreators/removeTask";
import AppHeader from '../header/header'

const ListItem = styled.label`
  width: 295px;
  height: 22px;
  font-family: "Gilroy";
  font-size: 18px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 0.01em;

  color: #000000;
`;

const EditItemModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  background: rgba(0, 0, 0, 0.2);
  justify-content: flex-start;
  align-items: flex-end;
`;

const EditModalBody = styled.div`
  padding: 2px;
  width: 410px;
  background: #ffffff;
  height: 452px;
  border-radius: 40px 40px 0px 0px;

  @media (min-height: 812px) and (max-height: 812px) {
    height: 650px;
  }

  @media (min-height: 667px) and (max-height: 667px) {
    height: 510px;
  }

  @media (min-height: 736px) and (max-height: 736px) {
    height: 576px;
  }

  @media (min-height: 568px) and (max-width: 320px) {
    height: 450px;
  }

  /* @media(min-height: 667px) and (max-width: 375px) {
    height: 510px;
  } */

  input {
    width: 295px;
    height: 50px;
    border: 2px solid #e6e6e6;
    box-sizing: border-box;
    border-radius: 10px;
    margin-top: 50px;
    margin-left: 33px;
    padding-left: 10px;
    font-family: "Gilroy";
  }
  @media (min-height: 568px) and (max-width: 320px) {
    height: 450px;
  }
`;

const RedactionButton = styled.button`
  color: white;
  border-radius: 10px;
  width: 137px;
  height: 40px;
  margin-top: 25px;
  margin-left: 35px;
  background-color: #23a3ff;
`;

const ButtonCancel = styled.button`
  border-radius: 10px;
  width: 137px;
  height: 40px;
  margin-left: 15px;
  background-color: #f2f2f2;
`;



function ModalEdit(props) {
  const [formIsVisible, setVisible] = useState(false);
  const [value, setValue] = useState(""); 


  return (
    <>
  
      <section>
        <ListItem onClick={() => setVisible(true)}>{props.value}</ListItem>
        {/* <button onClick={() => props.removeTask(props.id)}>&times;
        </button> */}
        <Transition in={formIsVisible} timeout={2} mountOnEnter unmountOnExit>
          {() => (
            <EditItemModal>
              <EditModalBody>
                <input
                  type="text"
                  placeholder={props.value}
                  onChange={(event) => setValue(event.target.value)}
                ></input>
                <div>
                  <RedactionButton
                    onClick={() => {
                      props.editTask(value, props.id);
                      setVisible(false);
                    }}
                  >
                    редактировать
                  </RedactionButton>
                  <ButtonCancel onClick={() => setVisible(false)}>
                    отмена
                  </ButtonCancel>

                </div>
              </EditModalBody>
            </EditItemModal>
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
  removeTask: (id) => {
    dispatch(removeTask(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalEdit);


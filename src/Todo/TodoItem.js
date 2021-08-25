import React, { useState } from "react";

import { connect } from "react-redux";
import { editTask } from "../store/actionCreators/actions";
import { removeTask } from "../store/actionCreators/actions";
import { Transition } from "react-transition-group";
import {
  ListItem,
  EditItemModal,
  EditModalBody,
  RedactionButton,
  ButtonCancel,
  RemoveListButton,
  Wrapper,
  Remove,
} from "../styledComponents/todoItem.styled.js";
import state from "../store/initialState";

function TodoItem(props) {
  const [formIsVisible, setVisible] = useState(false);
  const [set, setState] = useState("");

  return (
    <Wrapper>
      <ListItem
        change={state}
        onClick={() => {
          if (props.change) {
            setVisible(true);
          }
        }}
      >
        {props.value}
      </ListItem>
      <Remove change={props.change}
      onClick={() => {
          if (props.change) {
            props.removeTask(props.id);
          }
        }}
      ></Remove>
      <RemoveListButton
        change={props.change}
        type="checkbox"
      ></RemoveListButton>
      <Transition in={formIsVisible} timeout={2} mountOnEnter unmountOnExit>
        {() => (
          <EditItemModal>
            <EditModalBody>
              <input
                type="password | text"
                onChange={(event) => setState(event.target.value)}
              ></input>
              <div>
                <RedactionButton
                  onClick={() => {
                    props.editTask(set, props.id);
                    setVisible(false);
                  }}
                >
                  Сохранить
                </RedactionButton>
                <ButtonCancel onClick={() => setVisible(false)}>
                  Отмена
                </ButtonCancel>
              </div>
            </EditModalBody>
          </EditItemModal>
        )}
      </Transition>
    </Wrapper>
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

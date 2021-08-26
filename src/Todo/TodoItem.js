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
  Wrapper,
  Remove,
  TodoItemButton,
} from "../styledComponents/todoItem.styled.js";
import state from "../store/initialState";

function TodoItem(props) {
  const [formIsVisible, setVisible] = useState(false);
  const [set, setState] = useState(props.value);

  return (
    <Wrapper>
      <ListItem
        htmlFor={props.id}
        change={state | props.change}
        onClick={() => {
          if (props.change) {
            setVisible(true);
          }
        }}
      >
        <input type="checkbox" id={props.id}></input>
        {props.value}
      </ListItem>
      <TodoItemButton change={props.change}>
        {/* <input type="checkbox" id={props.id}></input> */}
      </TodoItemButton>

      <Remove
        change={props.change}
        onClick={() => {
          if (props.change) {
            props.removeTask(props.id);
          }
        }}
      ></Remove>
      <Transition in={formIsVisible} timeout={2} mountOnEnter unmountOnExit>
        {() => (
          <EditItemModal>
            <EditModalBody>
              <input
                type="text"
                value={set}
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

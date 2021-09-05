import React, { useState } from "react";
import { connect } from "react-redux";
import { editTask } from "../store/actionCreators/actions";
import { removeTask } from "../store/actionCreators/actions";
import { toggleTodo } from "../store/actionCreators/actions";
import { Transition } from "react-transition-group";
import {
  ListItem,
  EditItemModal,
  EditModalBody,
  RedactionButton,
  ButtonCancel,
  Wrapper,
  Remove,
} from "../styledComponents/todoItem.styled.js";

function TodoItem(props) {
  const [formIsVisible, setVisible] = useState(false);
  const [state, setState] = useState(props.value);
  return (
    <Wrapper change={props.change}>
      <input
        onChange={() => {
          if (!props.change) {
            props.toggleTodo(props.id);
          }
        }}
        type="checkbox"
        id={props.id}
      ></input>
      <ListItem
        className={props.class}
        htmlFor={props.change === false ? `${props.id}` : ""}
        change={props.change}
        onClick={() => {
          if (props.change) {
            setVisible(true);
          }
        }}
      >
        {props.value}
      </ListItem>

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
                value={state}
                onChange={(event) => setState(event.target.value)}
              ></input>
              <div>
                <RedactionButton
                  onClick={() => {
                    props.editTask(state, props.id);
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
  toggleTodo: (id) => {
    dispatch(toggleTodo(id));
  },
  editTask: (value, id) => {
    dispatch(editTask(value, id));
  },
  removeTask: (id) => {
    dispatch(removeTask(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);

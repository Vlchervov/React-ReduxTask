import React, { useState } from "react";
import { connect } from "react-redux";
import {editTask} from "../store/actionCreators/actions";
import { removeTask } from "../store/actionCreators/actions";
import { Transition } from "react-transition-group";
import {
  ListItem,
  EditItemModal,
  EditModalBody,
  RedactionButton,
  ButtonCancel,
  RemoveListButton,
} from "../styledComponents/modalEdit.styled";
import state from "../store/initialState";

function TodoItem(props) {
  const [formIsVisible, setVisible] = useState(false);
  const [value, setValue] = useState("");

  return (
    <section>
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

      <RemoveListButton
        change={props.change}
        onClick={() => {
          if (props.change) {
            props.removeTask(props.id);
          }
        }}
      ></RemoveListButton>
      <Transition in={formIsVisible} timeout={2} mountOnEnter unmountOnExit>
        {() => (
          <EditItemModal>
            <EditModalBody>
              <input
                type="text"
                onChange={(event) => setValue(event.target.value)}
              ></input>
              <div>
                <RedactionButton
                  onClick={() => {
                    props.editTask(value, props.id);
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
    </section>
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

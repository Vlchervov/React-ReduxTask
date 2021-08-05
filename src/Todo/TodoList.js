import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import Modal from "./AddModal";
import ModalEdit from "./ModalEdit";



function TodoList(props) {
  const [state, setState] = useState(false);
  const [edit, setEdit] = useState(false);
  const taskAdd = props.state.map((task) => {
    return (
      <Fragment key={Math.random()}>
        <ModalEdit
          edit={edit}
          setEdit={setEdit}
          tasks={props.state}
          value={task.value}
          id={task.id}
          class={task.class}
        />
      </Fragment>
    );
  });

  return (
    <>
      <Modal state={state} setState={setState} />
      <ul>{taskAdd}</ul>
    </>
  );
}

const mapStateToProps = (state) => ({
  state,
});
export default connect(mapStateToProps)(TodoList);

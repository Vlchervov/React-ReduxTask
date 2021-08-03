import React, { useState } from 'react';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';
import Modal from './Modal';
import TodoEdit from './TodoEdit';
import editTask from '../store/actionCreators/editTask';


function TodoList(props) {
    const [state, setState] = useState(false);
    const [edit, setEdit] = useState(false);
    const taskAdd = props.state.map((task) => {
        return (
            <TodoItem
                value={task.value}
                key={task.id}
                id={task.id}
                tasks={props.state}
                class={task.class}
                state={state}
                setState={setState}
                isEdit={props.isEdit}
                edit={edit}
                setEdit={setEdit}
            />
        );
    });
    return (
        <>
            <Modal state={state} setState={setState} />
            <ul>{taskAdd}</ul>

            <TodoEdit edit={edit} setEdit={setEdit} />
            
        </>
    );
}

const mapStateToProps = (state) => ({
    state,
});
export default connect(mapStateToProps)(TodoList);

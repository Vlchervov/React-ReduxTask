import React, {useState} from "react";
import TodoList from "./Todo/TodoList";
import AppHeader from './header/header'
import { Provider } from "react-redux";
import store from "./store/store";

const App = (props) => {
  const [edit, setEdit] = useState(false);
  return (
    <Provider store={store}>
      <AppHeader 
      tasks={props.state}
      edit={edit}
      setEdit={setEdit}
      value={props.value}
      />

      <div className="app">
        <TodoList 
        />
      </div>
    </Provider>
  );
};

export default App;

import React from "react";
import TodoList from "./Todo/TodoList";
import AppHeader from './header/header'
import { Provider } from "react-redux";
import store from "./store/store";
import TodoEdit from "./Todo/TodoEdit";

const App = () => {
  return (
    <Provider store={store}>
      <AppHeader />

      <div className="app">
        <TodoList 
        />
        {/* <TodoEdit /> */}
      </div>
    </Provider>
  );
};

export default App;

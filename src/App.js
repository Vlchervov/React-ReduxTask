import React from "react";
import TodoList from "./Todo/TodoList";
import AppHeader from './header/header'
import { Provider } from "react-redux";
import store from "./store/store";
import AddTodo from "./Todo/AddTodo";
import Modal from "./Todo/Modal";

const App = () => {
  return (
    <Provider store={store}>
      <AppHeader />

      <div className="app">
      {/* <Modal /> */}
        <TodoList />
        <AddTodo />
      </div>
    </Provider>
  );
};

export default App;

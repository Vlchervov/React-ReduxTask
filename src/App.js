import React from "react";
import TodoList from "./Todo/TodoList";
import AppHeader from './header/header'
import { Provider } from "react-redux";
import store from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <AppHeader />

      <div className="app">
        <TodoList 
        />
      </div>
    </Provider>
  );
};

export default App;

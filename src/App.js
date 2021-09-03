import React from "react";
import TodoList from "./Todo/TodoList";
import { Provider } from "react-redux";
import store from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;

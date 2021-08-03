const toggleTodo = (id) => {
    return {
      type: "TOGGLE_TODO",
      payload: id,
    };
  };
  
  export default toggleTodo;
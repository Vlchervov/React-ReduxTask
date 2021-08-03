const removeTask = (id) => {
    return {
      type: "REMOVE_TASK",
      payload: id,
    };
  };
  
  export default removeTask;
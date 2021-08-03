const editTask = (value, id) => {
    return {
      type: "EDIT_TASK",
      payload: {
        value,
        id,
      }
    };
  };
  
  export default editTask;
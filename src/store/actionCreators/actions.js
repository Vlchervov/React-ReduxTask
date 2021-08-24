export const addTask = (value) => {
  return {
    type: "ADD_TASK",
    payload: value,
  };
};

export const editTask = (value, id) => {
  return {
    type: "EDIT_TASK",
    payload: {
      value,
      id,
    },
  };
};

export const removeTask = (id) => {
    return {
      type: "REMOVE_TASK",
      payload: id,
    };
  };
export const addScreen = (screen) => ({
  type: "ADD_SCREEN",
  payload: screen,
});

export const deleteScreen = (screen) => ({
  type: "DELETE_SCREEN",
  payload: screen,
});

export const toggleOption = (option) => ({
  type: "TOGGLE_OPTION",
  payload: option,
});

const defaultState = {
  item: ["Sample item"],
};

export default function defaultReducer(state = defaultState, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return { item: [...state.item, action.payload] };
    case "DELETE_ITEM":
      return {
        item: state.item.filter((item) => item !== action.payload),
      };
    default:
      return state;
  }
}

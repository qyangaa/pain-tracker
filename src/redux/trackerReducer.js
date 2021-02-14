const trackerState = {
  records: { mood: { items: {}, text: "" } },
};

export default function trackerReducer(state = trackerState, action) {
  switch (action.type) {
    case "UPDATE_RECORDS":
      const type = action.payload.type;
      const items = action.payload.items;
      const text = action.payload.text;
      const newRecords = { ...trackerState.records };
      newRecords[type] = { items, text };
      return { records: newRecords };
    default:
      return state;
  }
}

const screenState = {
  screens: [
    {
      type: "pain",
      screenType: "button",
      hasTime: false,
      title: "Today I am",
      backgroundImage: "/assets/Pictures/img-building.jpg",
      options: [
        { id: "better", text: "better", selected: true },
        { id: "worse", text: "worse", selected: false },
      ],
    },
    {
      type: "mood",
      screenType: "icon",
      title: "Today I feel",
      hasTime: false,
      backgroundImage: "/assets/Pictures/girl-865304.jpg",
      options: [
        {
          src: "/assets/Icons/peaceful.svg",
          id: "peaceful",
          text: "peaceful",
          selected: false,
        },
        {
          src: "/assets/Icons/sad.svg",
          id: "sad",
          text: "sad",
          selected: false,
        },
        {
          src: "/assets/Icons/happy.svg",
          id: "happy",
          text: "happy",
          selected: false,
        },
        {
          src: "/assets/Icons/anxious.svg",
          id: "anxious",
          text: "anxious",
          selected: false,
        },
      ],
    },
    {
      type: "exercise",
      screenType: "icon",
      title: "Today I did",
      hasTime: true,
      backgroundImage: "/assets/Pictures/sport.jpg",
      options: [
        {
          src: "/assets/Icons/hiking.svg",
          id: "hiking",
          text: "hiking",
          selected: false,
        },
        {
          src: "/assets/Icons/weight.svg",
          id: "weight",
          text: "weight",
          selected: false,
        },
        {
          src: "/assets/Icons/yoga.svg",
          id: "yoga",
          text: "yoga",
          selected: false,
        },
        {
          src: "/assets/Icons/swimming.svg",
          id: "swimming",
          text: "swimming",
          selected: false,
        },
      ],
    },
  ],
};

export default function screenReducer(state = screenState, action) {
  switch (action.type) {
    case "TOGGLE_OPTION":
      const type = action.payload.type;
      const optionId = action.payload.optionId;
      const newScreens = [...screenState.screens];
      const typeIdx = newScreens.findIndex((screen) => screen.type === type);
      const optionIdx = newScreens[typeIdx].options.findIndex(
        (option) => option.id === optionId
      );
      newScreens[typeIdx].options[optionIdx].selected = !newScreens[typeIdx]
        .options[optionIdx].selected;
      return { screens: newScreens };
    case "DELETE_SCREEN":
      return {
        screens: state.screens.filter((screens) => screens !== action.payload),
      };
    default:
      return state;
  }
}

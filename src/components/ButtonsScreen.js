import React from "react";
import { useDispatch } from "react-redux";
import { toggleOption } from "../redux/screenActionCreator";

export default function ButtonsScreen({ screen }) {
  const { title, options } = screen;
  const dispatch = useDispatch();

  const renderButtonPanel = () => {
    return (
      <div className="button-panel">
        {options.map((option) => (
          <button
            key={option.id}
            className={option.selected ? "active" : ""}
            onClick={() =>
              dispatch(toggleOption({ type: screen.type, optionId: option.id }))
            }
          >
            {option.text}
          </button>
        ))}
      </div>
    );
  };
  return (
    <div className="content">
      <h1 className="title">{title}</h1>
      {renderButtonPanel()}
    </div>
  );
}

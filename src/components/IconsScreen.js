import React from "react";
import { useDispatch } from "react-redux";
import { toggleOption } from "../redux/screenActionCreator";

export default function IconsScreen({ screen }) {
  const { title, options } = screen;
  const dispatch = useDispatch();

  const renderIconGroup = (option) => {
    return (
      <div className="icon-group" key={option.id}>
        <img
          src={option.src}
          className={option.selected ? "main-icon active" : "main-icon"}
          onClick={() =>
            dispatch(toggleOption({ type: screen.type, optionId: option.id }))
          }
        />
        <h3 className="icon-text">{option.text}</h3>
      </div>
    );
  };

  const renderIconPanel = () => {
    return (
      <div className="icon-panel">
        {options.map((option) => renderIconGroup(option))}
      </div>
    );
  };
  return (
    <div className="content">
      <h1 className="title">{title}</h1>
      {renderIconPanel()}
      <input type="text" className="short-input" placeholder="More" />
    </div>
  );
}

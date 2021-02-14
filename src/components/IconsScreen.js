import React from "react";

export default function IconsScreen() {
  const title = "Today I feel";
  const options = [
    { src: "/assets/Icons/peaceful.svg", id: "peaceful", text: "Peaceful" },
    { src: "/assets/Icons/peaceful.svg", id: "peaceful", text: "Peaceful" },
    { src: "/assets/Icons/peaceful.svg", id: "peaceful", text: "Peaceful" },
    { src: "/assets/Icons/peaceful.svg", id: "peaceful", text: "Peaceful" },
  ];

  const renderIconGroup = (option) => {
    return (
      <div className="icon-group" key={option.id}>
        <img src={option.src} className="main-icon" />
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
      <input type="text" class="short-input" placeholder="More thoughts" />
    </div>
  );
}

import React from "react";

export default function IconsScreen({ screen }) {
  const { title, options } = screen;

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

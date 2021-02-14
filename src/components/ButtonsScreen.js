import React from "react";

export default function ButtonsScreen({ screen }) {
  const { title, options } = screen;

  const renderButtonPanel = () => {
    return (
      <div className="button-panel">
        {options.map((option) => (
          <button key={option.id}>{option.text}</button>
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

import React from "react";

export default function IconsScreen() {
  const title = "Today I am";
  const options = [
    { id: "better", text: "better" },
    { id: "worse", text: "worse" },
  ];

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

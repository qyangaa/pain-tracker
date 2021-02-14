import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ReactComponent as NextLogo } from "../icons/next.svg";
import IconsScreen from "./IconsScreen";
import ButtonsScreen from "./ButtonsScreen";

export default function Container() {
  const [image, setImage] = useState("/assets/Pictures/img-building.jpg");
  const screen = useSelector((state) => state.screenState.screens);
  const [curScreen, setCurScreen] = useState(0);

  const renderScreen = () => {
    switch (screen[curScreen].screenType) {
      case "icon":
        return <IconsScreen screen={screen[curScreen]} />;
      case "button":
        return <ButtonsScreen screen={screen[curScreen]} />;
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${screen[curScreen].backgroundImage})` }}
      className="container"
    >
      <div className="filter">
        <div className="control-buttons">
          <NextLogo
            className="utilityIcon float-left fliplr"
            onClick={() => setCurScreen((prev) => prev - 1)}
          />
          <NextLogo
            className="utilityIcon float-right"
            onClick={() => setCurScreen((prev) => prev + 1)}
          />
        </div>
        {renderScreen()}
      </div>
    </div>
  );
}

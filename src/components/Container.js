import React, { useState, useEffect } from "react";
import { ReactComponent as NextLogo } from "../icons/next.svg";
import IconsScreen from "./IconsScreen";
import ButtonsScreen from "./ButtonsScreen";

export default function Container() {
  const [image, setImage] = useState("/assets/Pictures/img-building.jpg");
  const [curScreen, setCurScreen] = useState(0);

  return (
    <div style={{ backgroundImage: `url(${image})` }} className="container">
      <div className="filter">
        <div className="control-buttons">
          <NextLogo className="utilityIcon float-left fliplr" />
          <NextLogo className="utilityIcon float-right" />
        </div>
        <ButtonsScreen />
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";

export default function Container() {
  const [image, setImage] = useState("/assets/Pictures/img-building.jpg");

  return (
    <div style={{ backgroundImage: `url(${image})` }} className="container">
      <div className="filter" />
      <i src={`url(/assets/Icons/next.svg)`}></i>
    </div>
  );
}

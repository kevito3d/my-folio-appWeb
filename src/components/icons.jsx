import React from "react";
import "../css/Icons.css";

function Icons({ icon, title, isSmall = false, onClick }) {
  return (
    <div className={isSmall ? "divIconSmall" : "divIcon"} onClick={onClick}>
      <div className="divIconImg">
        <img src={icon} alt={title} />
      </div>
    </div>
  );
}

export default Icons;

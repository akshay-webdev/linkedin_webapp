import React from "react";
import "../CSS/Feed.css";

const InputOptions = ({ Icon, title }) => {
  return (
    <div className="search_bar_options">
      <div className="search_bar_btns">
        <div>
          {Icon && <Icon />}
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default InputOptions;

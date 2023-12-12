import React from "react";

const HeaderOptions = ({ Icon, title }) => {
  return (
    <>
      <div className="header__options">
      <div>
      {Icon && <Icon />}
        <p>{title}</p>
      </div>
     
      </div>
    </>
  );
};

export default HeaderOptions;

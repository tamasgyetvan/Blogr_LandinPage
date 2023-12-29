import { useState } from "react";
export type DropDownProps = {
  title: string;
  menuItems: Array<string>;
};

export const DropDown = ({ title, menuItems }: DropDownProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropDown">
      <div className="buttonWrapper">
        <button className="dropDownButton" onClick={() => setOpen(!open)}>
          {title}

          <img src="public/images/icon-arrow-light.svg" className="arrow" />
        </button>
      </div>
      {open ? (
        <div className="dropDownMenu">
          {menuItems.map((item) => {
            return <button className="subMenu">{item}</button>;
          })}
        </div>
      ) : null}
    </div>
  );
};

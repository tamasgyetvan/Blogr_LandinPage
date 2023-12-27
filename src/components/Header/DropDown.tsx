import { useState } from "react";

export type DropDownProps = {
  title: string;
  menuItems: Array<string>;
};

export const DropDown = ({ title, menuItems }: DropDownProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(!open)}>{title}</button>
      {open ? (
        <div className="dropDown">
          {menuItems.map((item) => {
            return <button>{item}</button>;
          })}
        </div>
      ) : null}
    </>
  );
};

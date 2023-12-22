import { useState } from "react";

export const DropDown: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setOpen(!open);
        }}
      ></button>
      {open ? <div>open</div> : <div></div>}
    </>
  );
};

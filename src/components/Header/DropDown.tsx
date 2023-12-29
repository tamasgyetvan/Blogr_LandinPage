export type DropDownProps = {
  title: string;
  menuItems: Array<string>;
  handleClick: () => void;
  currentActive: any;
};

export const DropDown = ({
  title,
  menuItems,
  handleClick,
  currentActive,
}: DropDownProps) => {
  return (
    <div className="dropDown">
      <div className="buttonWrapper">
        <button className="dropDownButton" onClick={handleClick}>
          {title}
          <img src="public/images/icon-arrow-light.svg" className="arrow" />
        </button>
      </div>
      {title === currentActive ? (
        <div className="dropDownMenu">
          {menuItems.map((item) => {
            return <button className="subMenu">{item}</button>;
          })}
        </div>
      ) : null}
    </div>
  );
};

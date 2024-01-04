export type DropDownProps = {
  content: {
    title: string;
    menuItems: Array<string>;
  };
  handleClick: () => void;
  currentActive: any;
};

export const DropDown = ({
  content,
  handleClick,
  currentActive,
}: DropDownProps) => {
  return (
    <div className="dropDown">
      <div className="buttonWrapper">
        <button className="dropDownButton" onClick={handleClick}>
          {content.title}
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7">
            <path
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              opacity=".75"
              d="M1 1l4 4 4-4"
            />
          </svg>
        </button>
      </div>
      {content.title === currentActive ? (
        <div className="dropDownMenu">
          {content.menuItems.map((item) => {
            return <button className="subMenu">{item}</button>;
          })}
        </div>
      ) : null}
    </div>
  );
};

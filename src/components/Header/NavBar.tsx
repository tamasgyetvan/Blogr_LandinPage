import { DropDown } from "./DropDown";
import { useState } from "react";
type DropDownItem = {
  id: number;
  title: string;
  menuItems: Array<string>;
};

type NavBarProps = {
  toggleMobileMenu: boolean;
};

export const NavBar = ({ toggleMobileMenu }: NavBarProps) => {
  const DropDownItems: Array<DropDownItem> = [
    {
      id: 1,
      title: "Overview",
      menuItems: ["Pricing", "Marketplace", "Features", "Integrations"],
    },
    {
      id: 2,
      title: "Company",
      menuItems: ["About", "Team", "Blog", "Careers"],
    },
    {
      id: 3,
      title: "Connect",
      menuItems: ["Contact", "Newsletter", "Linkedin"],
    },
  ];

  const [activeDropDown, setActiveDropDown] = useState<string | null>();
  return (
    <nav className={toggleMobileMenu ? "mobile-active" : undefined}>
      <div className="navContainer">
        {DropDownItems.map((item) => {
          return (
            <DropDown
              key={item.id}
              content={item}
              handleClick={() => {
                if (activeDropDown === item.title) {
                  setActiveDropDown(null);
                } else {
                  setActiveDropDown(item.title);
                }
              }}
              currentActive={activeDropDown}
            ></DropDown>
          );
        })}
      </div>
      <div className="authContainer">
        <button className="loginButton">Login</button>
        <button className="signupButton">Sign Up</button>
      </div>
    </nav>
  );
};

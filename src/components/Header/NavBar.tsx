import { DropDown } from "./DropDown";
import { useState } from "react";
type DropDownItem = {
  title: string;
  menuItems: Array<string>;
};

export const NavBar = () => {
  const DropDownItems: Array<DropDownItem> = [
    {
      title: "Overview",
      menuItems: ["Pricing", "Marketplace", "Features", "Integrations"],
    },
    {
      title: "Company",
      menuItems: ["About", "Team", "Blog", "Careers"],
    },
    {
      title: "Connect",
      menuItems: ["Contact", "Newsletter", "Linkedin"],
    },
  ];

  const [active, isActive] = useState<string | null>();
  return (
    <nav>
      <div className="navContainer">
        {DropDownItems.map((item) => {
          return (
            <DropDown
              title={item.title}
              menuItems={item.menuItems}
              handleClick={() => {
                if (active === item.title) {
                  isActive(null);
                } else {
                  isActive(item.title);
                }
              }}
              currentActive={active}
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

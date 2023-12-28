import { DropDown } from "./DropDown";

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
  return (
    <nav>
      <div className="navContainer">
        {DropDownItems.map((item) => {
          return (
            <DropDown title={item.title} menuItems={item.menuItems}></DropDown>
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

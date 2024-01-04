import { useState } from "react";
import { Hero } from "./Hero";
import { NavBar } from "./NavBar";

export const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header>
      <div className="navWrapper">
        <h1>Blogr</h1>
        <NavBar toggleMobileMenu={toggle}></NavBar>
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
          className="menuButton"
        >
          <img src="public/images/icon-hamburger.svg" alt="" />
        </button>
      </div>
      <Hero></Hero>
    </header>
  );
};

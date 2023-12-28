import { Hero } from "../Hero/Hero";
import { NavBar } from "./NavBar";

export const Header = () => {
  return (
    <header>
      <div className="navWrapper">
        <h1>Blogr</h1>
        <NavBar></NavBar>
      </div>
      <Hero></Hero>
    </header>
  );
};

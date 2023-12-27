import "../../scss/components/Header.scss";
import { NavBar } from "./NavBar";

export const Header = () => {
  return (
    <header>
      <div className="navContainer">
        <h1>Blogr</h1>
        <NavBar></NavBar>
      </div>
      <div className="authContainer">
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </header>
  );
};

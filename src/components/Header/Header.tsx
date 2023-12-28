import { NavBar } from "./NavBar";

export const Header = () => {
  return (
    <header>
      <div className="navContainer">
        <h1>Blogr</h1>
        <NavBar></NavBar>
      </div>
      <div className="authContainer">
        <button className="loginButton">Login</button>
        <button className="signupButton">Sign Up</button>
      </div>
    </header>
  );
};

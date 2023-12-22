import "../../scss/components/Header.scss";

export const Header: React.FC = () => {
  return (
    <header>
      <div className="navContainer">
        <h1>Blogr</h1>
        <nav>
          <button>Product</button>
          <button>Company</button>
          <button>Connect</button>
        </nav>
      </div>
      <div className="authContainer">
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </header>
  );
};

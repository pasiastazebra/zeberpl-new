import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img
          className="navbar-logo-img"
          src="https://zeber.pl/assets/logo-8f653808.svg"
          alt="logo"
        />
      </div>
      <div className="navbar-options">
        <input type="checkbox" className="checkbox" id="darkmode" />
        <div className="navbar-options-link">
          <a href="">About me</a>
        </div>
        <div className="navbar-options-link">
          <a href="">Tech Stack</a>
        </div>
        <div className="navbar-options-link">
          <a href="">Projects</a>
        </div>
        <div className="navbar-options-link">
          <a href="">After an hours</a>
        </div>
        <div className="navbar-options-link">
          <a href="">Media & contact</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

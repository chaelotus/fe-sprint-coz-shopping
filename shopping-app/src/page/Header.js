import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <div className="header-column">
        <img className="header-logoImg" src={require("../img/logo.png")} />
        <div className="header-title">COZ Shopping</div>
      </div>
      <div className="header-column">
        <img
          className="header-menuIcon"
          src={require("../img/menu-icon.png")}
        />
      </div>
    </header>
  );
};
export default Header;

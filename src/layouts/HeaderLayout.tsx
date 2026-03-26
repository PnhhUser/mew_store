import "./styles/header-layout.css";
import logo from "../assets/images/lg.png";
import Menu from "../components/menu/Menu";

function HeaderLayout() {
  return (
    <div className="header-wrapper">
      <div className="header-wrapper__left">
        <div className="header-wrapper__logo">
          <img src={logo} alt="image" />
          <span className="header-wrapper__logo-text">Mew</span>
        </div>
      </div>
      <div className="header-wrapper__right">
        <Menu />
      </div>
    </div>
  );
}

export default HeaderLayout;

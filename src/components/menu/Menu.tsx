import "./menu.css";

function Menu() {
  return (
    <nav className="menu">
      <a className="menu__link" href="/shopping">
        shopping
      </a>
      <a className="menu__link" href="/support">
        support
      </a>
      <a className="menu__link" href="/sigin">
        sigin
      </a>
    </nav>
  );
}

export default Menu;

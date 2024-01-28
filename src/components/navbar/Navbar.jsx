import "./navbar.scss";
import Logo from "../../img/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <div className="logo-text">
          <h2>BilgeAdam</h2>
          <p>Bilişim Grubu</p>
        </div>
      </div>
      <div className="nav-right">
        <a href="#">Hizmet Kataloğu</a>
        <div className="right-text">
          <p className="profile">gö</p>
          <p>Gülşah Özakıncı</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

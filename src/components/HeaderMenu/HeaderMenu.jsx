import logo from "../../assets/img/logoG.png";
import menu from "../../assets/img/menu.png";

function HeaderMenu() {
  return (
    <div className="Header--container ">
      <div className="Header--container--navigator ">
        <img src={logo} alt="SOMOS Experiences" />
        <img src={menu} alt="main menu" />
      </div>
    </div>
  );
}
export default HeaderMenu;

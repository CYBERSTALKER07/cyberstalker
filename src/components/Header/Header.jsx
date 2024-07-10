import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import AddPropertyModal from "../AddPropertyModal/AddPropertyModal";
import useAuthCheck from "../../hooks/useAuthCheck.jsx";
import Contact from "../Contact/Contact.jsx";
import Services from "..//..//components/Sercices/Services";


const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerColor = useHeaderColor();
  const [modalOpened, setModalOpened] = useState(false);
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  const { validateLogin } = useAuthCheck();


  const handleAddPropertyClick = () => {
    if (validateLogin()) {
      setModalOpened(true);
    }
  };
  return (
    <section className="h-wrapper" style={{ background: headerColor }}>
      <div className="flexCenter innerWidth paddings h-container">
        {/* logo */}
        <Link to="/">
          <img src="logo.png" alt="logo" width={200} />
        </Link>

        {/* menu */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div
            // ref={menuRef}
            className="flexCenter h-menu"
            style={getMenuStyles(menuOpened)}
          >
            {/* <NavLink to="/properties">Характеристики</NavLink> */}

            <NavLink className={NavLink} to="/contact">Контакты</NavLink>
            <NavLink className={NavLink}  to="/services">услуги</NavLink>

            {/* add property */}
            {/* <div onClick={handleAddPropertyClick}>Добавлять Свойство</div> */}
            {/* <AddPropertyModal opened={modalOpened} setOpened={setModalOpened} /> 
          Кнопка входа в систему
            {!isAuthenticated ? (
              <button className={<Contact/>} onClick={loginWithRedirect}>
                Авторизоваться
              </button>
            ) : (
              <ProfileMenu user={user} logout={logout} />
            )} */}
          </div>
        </OutsideClickHandler>

        {/* for medium and small screens */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;

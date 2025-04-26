import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { useTranslation } from "react-i18next";

function Navbar({ toggleDarkMode, setShowLogin }) {
  const [menu, setMenu] = useState("Menu");
  const { getTotalCartAmount } = useContext(StoreContext);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="Navbar bg-white dark:bg-black text-black dark:text-white">
      <Link to="/">
        <img src={assets.logo} alt="logo" className="logo" />
      </Link>
      <ul className="Navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          {t("Navbar.Home")}
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          {t("Navbar.Menu")}
        </a>
        <a
          href="#app-downoload"тх
          onClick={() => setMenu("Mobile-App")}
          className={menu === "Mobile-App" ? "active" : ""}
        >
          {t("Navbar.Mobile-App")}
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("Contact Us")}
          className={menu === "Contact Us" ? "active" : ""}
        >
          {t("Navbar.Contact Us")}
        </a>
      </ul>
      <div className="Navbar-right">
        <img src={assets.search_icon} alt="search" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="cart" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>{t("Navbar.Sign In")}</button>
        <select
          onChange={(e) => changeLanguage(e.target.value)}
          className="  bg-white-200 dark:bg-gray-700 rounded w-10"
        >
          <option value="en">EN</option>
          <option value="ru">RU</option>
        </select>
        <button
          onClick={toggleDarkMode}
          className="bg-gray-200 dark:bg-gray-700"
        >
          {t("Navbar.Dark Mode")}
        </button>
      </div>
    </div>
  );
}

export default Navbar;

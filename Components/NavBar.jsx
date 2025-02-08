import React, { useEffect, useState, useContext } from "react";

//INTERNAL IMPORT
import { TrackingContext } from "../Context/TrackingContext";
import { Nav1, Nav2, Nav3 } from "../Components/index";

//Styling
import Style from "../styles/Navbar.module.css";

const NavBar = () => {
  const [state, setState] = useState(false);
  const { currentUser, connectWallet } = useContext(TrackingContext);

  const navigation = [
    { title: "Home", path: "#" },
    { title: "Services", path: "#" },
    { title: "Contact Us", path: "#" },
    { title: "Erc20", path: "#" },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest("Style.menu-btn")) setState(false);
    };
  }, []);

  return (
    <nav className={`${Style.nav0} ${state ? Style.nav1 : ""}`}>
      <div className={Style.nav_container}>
        <div className={Style.nav_left}>
          <a href="#">
            <img
              src="https://www.floatui.com/logo.svg"
              alt=" float UI Logo"
              width={120}
              height={50}
            />
          </a>
          <div className={Style.medium_btn}>
            <button
              className={Style.menu_btn}
              onClick={() => setState(!state)}
            >
              {state ? <Nav1 /> : <Nav2 />}
            </button>
          </div>
        </div>

        {/*  */}
        <div className={`${Style.nav_right} ${state ? Style.nav3 : Style.nav4}`}>
          <ul className={Style.ul1}>
            {navigation.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.path}>{item.title}</a>
                </li>
              );
            })}
          </ul>

          <div className={Style.nav_button_container}>
            {currentUser ? (
              <p className={Style.p1}>{currentUser.slice(0, 25)}...</p>
            ) : (
              <button
                className={Style.menu_btn}
                onClick={() => connectWallet()}
              >
                Connect  Wallet
                <Nav3 className={Style.navicon1}/>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

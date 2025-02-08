import React from "react";
import { Fot1, Fot2 } from "../Components/index";

//Internal Import
import Style from "../styles/Footer.module.css";

const Footer = () => {
  const footNavs = [
    {
      href: "#",
      name: "Terms",
    },
    {
      href: "#",
      name: "Licence",
    },
    {
      href: "#",
      name: "About Us",
    },
    {
      href: "#",
      name: "Privacy",
    },
  ];

  return (
  <footer className={Style.footer}>
  <div>
    <div className={Style.footer_container}>
      <div className={Style.footer_container_left}>
        <img
          src="http://floatui.com/logo.svg"
          className={Style.img1}
          alt=""
        />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          nisi, libero molestias rerum nihil, quae perspiciatis
        </p>
        <ul>
          {footNavs.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className={Style.foot_container_right}>
        <p>Get the app</p>
        <div  className={Style.footer1}>
          <a href="#">
            <Fot1 />
          </a>
          <a href="#">
            <Fot2  />
          </a>
        </div>
      </div>
    </div>

    <div className={Style.footer_terms}>
      <p>@ 2025 Nneji Daniel. All rights reserved</p>
    </div>
  </div>
</footer>
)
};

export default Footer;

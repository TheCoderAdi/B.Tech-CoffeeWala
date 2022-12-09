import React, { useState } from "react";
import logo from "../Assests/logo.png";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="app__navbar-links">
          {["home", "about", "menu", "review", "contact"].map((items) => (
            <li className="app__flex p-text" key={`link-${items}`}>
              <a href={`#${items}`}>{items}</a>
            </li>
          ))}
        </ul>
        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />
          {toggle && (
            <motion.div
              whileInView={{ x: [250, 0] }}
              transition={{ duration: 1, ease: "easeIn" }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {["home", "about", "menu", "review", "contact"].map((items) => (
                  <li key={items}>
                    <a href={`#${items}`} onClick={() => setToggle(false)}>
                      {items}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;

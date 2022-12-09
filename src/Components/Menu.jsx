import React from "react";
import { motion } from "framer-motion";
import menu_one from "../Assests/menu-1.png";
import menu_two from "../Assests/menu-2.png";
import menu_three from "../Assests/menu-3.png";
import menu_four from "../Assests/menu-4.png";
import menu_five from "../Assests/menu-5.png";
import menu_six from "../Assests/menu-6.png";

const Menu = () => {
  const option = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <>
      <h1 className="menuHeading">
        OUR <span>MENU</span>
      </h1>
      <section className="heroMenu" id="menu">
        <motion.div className="box-container" {...option}>
          <motion.div
            className="box"
            {...option}
            transition={{
              delay: 0.2,
            }}
          >
            <img src={menu_one} alt="" />
            <h3>tasty and healty</h3>
            <div className="price">
              $15.99 <span>20.99</span>
            </div>
          </motion.div>
          <motion.div
            className="box"
            {...option}
            transition={{
              delay: 0.3,
            }}
          >
            <img src={menu_two} alt="" />
            <h3>tasty and healty</h3>
            <div className="price">
              $15.99 <span>20.99</span>
            </div>
          </motion.div>

          <motion.div
            className="box"
            {...option}
            transition={{
              delay: 0.4,
            }}
          >
            <img src={menu_three} alt="" />
            <h3>tasty and healty</h3>
            <div className="price">
              $15.99 <span>20.99</span>
            </div>
          </motion.div>

          <motion.div
            className="box"
            {...option}
            transition={{
              delay: 0.5,
            }}
          >
            <img src={menu_four} alt="" />
            <h3>tasty and healty</h3>
            <div className="price">
              $15.99 <span>20.99</span>
            </div>
          </motion.div>

          <motion.div
            className="box"
            {...option}
            transition={{
              delay: 0.6,
            }}
          >
            <img src={menu_five} alt="" />
            <h3>tasty and healty</h3>
            <div className="price">
              $15.99 <span>20.99</span>
            </div>
          </motion.div>

          <motion.div
            className="box"
            {...option}
            transition={{
              delay: 0.7,
            }}
          >
            <img src={menu_six} alt="" />
            <h3>tasty and healty</h3>
            <div className="price">
              $15.99 <span>20.99</span>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Menu;

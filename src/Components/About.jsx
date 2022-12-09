import React from "react";
import aboutImg from "../Assests/about-img.jpeg";
import { motion } from "framer-motion";
const About = () => {
  return (
    <>
      <h1 className="aboutHeading">
        <span>ABOUT</span> US
      </h1>
      <section className="heroAbout" id="about">
        <div className="container">
          <motion.div
            className="leftImg"
            initial={{
              x: "-100%",
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.2,
            }}
          >
            <img src={aboutImg} alt="About" />
          </motion.div>
          <motion.div
            className="rightContent"
            initial={{
              x: "100%",
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.4,
            }}
          >
            <h1>What Makes Our Coffee Special?</h1>
            <p>
              We add some extra things to it , that's why our coffee tastes good
            </p>
            <br />
            <p>We are the offical members of B.Tech Coffee Wala</p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;

import { motion } from "framer-motion";
import React from "react";
import "../Styles/box.scss";

const Box = (props) => {
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
      <motion.div
        className="box"
        {...option}
        transition={{
          delay: props.delay,
        }}
      >
        <img src={props.imgQoute} alt="quote" className="qoute" />
        <p>{props.message}</p>
        <img src={props.imgPerson} alt="person" className="user" />
        <h3>{props.userComment}</h3>
      </motion.div>
    </>
  );
};

export default Box;

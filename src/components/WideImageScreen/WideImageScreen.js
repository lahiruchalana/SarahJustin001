import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import AnimatedText from "../../global/AnimatedText"

import './WideImageScreen.css';


function WideImageScreen() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);
  const [replay, setReplay] = useState(true);

  // Placeholder text data, as if from API
  const placeholderText = [
    { type: "heading1", text: "Sarah" },
    { type: "heading2", text: "And"},
    { type: "heading1", text: "Justin" }
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  };

  const background_image={
      background: 'linear-gradient(to right, #320000, #f68989)'
  }

  return(
      <div>
          <div  className="background_image" style={background_image}>
            <AnimatePresence>
              <motion.div transition={{ duration: 1 }} initial={{ y: -300, opacity: 0 }} exit={{ y: 300, opacity: 0 }} animate={{ x, y, rotate, opacity: 1 }} onMouseOver={() => {
                setX(60);
                setY(-0);
                setRotate(-2);
                }} onMouseOut={() => {
                  setX(5);
                  setY(5);
                  setRotate(-0.5);
                }}>  
                <img className="image" src={require("../../assets/images/01.jpg")} />
              </motion.div>
            </AnimatePresence>
        </div>
        <motion.div
          className="App"
          initial="hidden"
          transition={{ duration: 9 }}
          animate={replay ? "visible" : "hidden"}
          variants={container}
        >
          <div className="home_title">
            {placeholderText.map((item, index) => {
              return <AnimatedText {...item} key={index} />;
            })}
          </div>
        </motion.div>
      </div>
  );
}

export default WideImageScreen;
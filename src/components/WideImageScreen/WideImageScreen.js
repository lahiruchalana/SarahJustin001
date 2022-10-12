import React, { useState } from "react";

import { motion } from "framer-motion";

import './WideImageScreen.css';


function WideImageScreen() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);
  const [xTitle, setXTitle] = useState(0);
  const [yTitle, setYTitle] = useState(0);

  const background_image={
      background: 'linear-gradient(to right, #320000, #f68989)'
  }

  return(
      <div>
          <div  className="background_image" style={background_image}>
            <motion.div animate={{ x, y, rotate }} onMouseOver={() => {
              setX(90);
              setY(-20);
              setRotate(-2);
              setXTitle(50);
              setYTitle(-50);
              }} onMouseOut={() => {
                setX(5);
                setY(5);
                setRotate(-0.5);
                setXTitle(-10);
                setYTitle(-5);
              }}>  
              <img className="image" src={require("../../assets/images/01.jpg")} />
            </motion.div>
          </div>
          <motion.div animate={{ xTitle, yTitle }} onMouseOver={() => {
            setXTitle(50);
            setYTitle(-50);
            }} onMouseOut={() => {
              setXTitle(-10);
              setYTitle(-5);
            }}>
            <h1 className="home_title">Sarah <br></br> And <br></br> Justin</h1>
          </motion.div>
      </div>
  );
}

export default WideImageScreen;
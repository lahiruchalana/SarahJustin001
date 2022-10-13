import React from "react";

import { motion, AnimatePresence } from "framer-motion";
import './Home.css';

import WideImageScreen from "../components/WideImageScreen/WideImageScreen.js";


function Home() {

    return(
        <div>
            <WideImageScreen/>
            <AnimatePresence>
                <motion.div  transition={{ duration: 20 }} initial={{ x: -200, opacity: 0 }} animate={{ x: 0, y: 0, opacity: 1 }}>
                    <h1 id="text" className="date">Be Ready In May 24th, 2023</h1>
                    <h6 id="text" >@New York Hilton Midtown</h6>
                    {/* <h4 id="text" >1335 Avenue Of The Americas, New York, NY 10019</h4> */}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default Home;
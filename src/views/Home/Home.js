import React from "react";

import { motion, AnimatePresence } from "framer-motion";
import './Home.css';

import WideImageScreen from "../../components/WideImageScreen/WideImageScreen.js";


function Home() {

    return(
        <div>
            <WideImageScreen/>
            <AnimatePresence>
                <motion.div  
                    transition={{ duration: 2.5 }} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true }} 
                    animate={{ x: 0, y: 0, opacity: 1 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0.5 }
                    }}
                    >
                    <h3 id="text_white" className="date">Be Ready In May 24th, 2023</h3>
                </motion.div>
                <motion.div  
                    transition={{ duration: 4 }} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true }} 
                    animate={{ x: 0, y: 0, opacity: 1 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0.6 }
                    }}
                    >
                    <h6 id="text_white" >@New York Hilton Midtown</h6>
                    {/* <h4 id="text" >1335 Avenue Of The Americas, New York, NY 10019</h4> */}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default Home;
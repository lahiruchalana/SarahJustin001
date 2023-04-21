import React from "react";

import { motion, AnimatePresence } from "framer-motion";
import './Home.css';

import WideImageScreen from "../../components/WideImageScreen/WideImageScreen.js";


function Home() {

    const background_image={
        background: 'linear-gradient(to right, #320000, #f68989)'
    }

    return(
        <div style={background_image}>
            <WideImageScreen/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <AnimatePresence>
                <motion.div  
                    transition={{ duration: 2 }} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true }} 
                    animate={{ x: 0, y: 0, opacity: 1 }}
                    variants={{
                        visible: { opacity: 1 },
                        hidden: { y: 100, opacity: 0 }
                    }}
                    >
                    <h3 id="text_white" className="date">Be Ready In May 24th, 2023</h3>
                </motion.div>
                <motion.div  
                    transition={{ duration: 3 }} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true }} 
                    animate={{ x: 0, y: 0, opacity: 1 }}
                    variants={{
                        visible: { opacity: 1 },
                        hidden: { y: 100, opacity: 0 }
                    }}
                    >
                    <h6 id="text_white" >@New York Hilton Midtown</h6>
                    {/* <h4 id="text" >1335 Avenue Of The Americas, New York, NY 10019</h4> */}
                </motion.div>
                <br/>
                <br/>
                <br/>            
                <br/>
                <br/>
                <br/>
                
            </AnimatePresence>
        </div>
    );
}

export default Home;
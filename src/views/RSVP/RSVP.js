import React from "react";

import { motion, AnimatePresence } from "framer-motion";

import './RSVP.css'

function RSVP() {

    return(
        <div>
            <div className="background">
                <motion.div  
                    transition={{ repeat:Infinity, duration: 1 }} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true }} 
                    animate={{ x: 0, y: 0, opacity: 1 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}
                    >
                        <h1 id="text_black" className="date">Be Ready In May 24th, 2023</h1>
                        <h6 id="text_black" >@New York Hilton Midtown</h6>
                        {/* <h4 id="text" >1335 Avenue Of The Americas, New York, NY 10019</h4> */}
                </motion.div>
            </div>
        </div>
    )
}

export default RSVP;
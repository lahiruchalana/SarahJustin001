import React from "react";

import { motion, AnimatePresence } from "framer-motion";

import './ImageGroup.css'

function ImageGroup() {

    return (
        <div className="image_group">
            <AnimatePresence>
                <motion.div  
                    transition={{ duration: 3 }} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true }} 
                    animate={{ x: 0, y: 0, opacity: 1, rotate: 5 }}
                    variants={{
                        visible: { opacity: 1 },
                        hidden: { y: -150, opacity: 0, rotate: 30 }
                    }}
                    >
                    <img id="image_01" src={require("../../assets/images/01.jpg")} />                    
                </motion.div>
                <motion.div  
                    transition={{ duration: 2 }} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true }} 
                    animate={{ x: 0, y: 0, opacity: 1, rotate: -4 }}
                    variants={{
                        visible: { opacity: 1 },
                        hidden: { y: -50, opacity: 0, rotate: 15 }
                    }}
                    >
                    <img id="image_02" src={require("../../assets/images/01.jpg")} />                    
                </motion.div>
                <motion.div  
                    transition={{ duration: 3 }} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true }} 
                    animate={{ x: 0, y: 0, opacity: 1, rotate: 2 }}
                    variants={{
                        visible: { opacity: 1 },
                        hidden: { y: -40, opacity: 0, rotate: 10 }
                    }}
                    >
                    <img id="image_03" src={require("../../assets/images/01.jpg")} />                    
                </motion.div>
                <motion.div  
                    transition={{ duration: 2 }} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true }} 
                    animate={{ x: 0, y: 0, opacity: 1, rotate: -5 }}
                    variants={{
                        visible: { opacity: 1 },
                        hidden: { y: -70, opacity: 0, rotate: 20 }
                    }}
                    >
                    <img id="image_04" src={require("../../assets/images/01.jpg")} />                    
                </motion.div>
                <motion.div  
                    transition={{ duration: 4 }} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true }} 
                    animate={{ x: 0, y: 0, opacity: 1, rotate: -2 }}
                    variants={{
                        visible: { opacity: 1 },
                        hidden: { y: -50, opacity: 0, rotate: -50 }
                    }}
                    >
                    <img id="image_05" src={require("../../assets/images/01.jpg")} />                    
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default ImageGroup;
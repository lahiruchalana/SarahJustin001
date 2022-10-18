import React from "react";

import { motion, AnimatePresence } from "framer-motion";

import './RSVP.css'
import ImageGroup from "../../components/ImageGroup/ImageGroup";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function RSVP() {

    const background={
        background: 'linear-gradient(to right, #0e001a, #b364fd)'
    }

    return(
        <div>
            <div className="background" style={background}>
                <br></br>
                <br></br>
                <br></br>
                <AnimatePresence>
                    <Row>
                        <Col>
                            <ImageGroup></ImageGroup>
                        </Col>
                        
                        <Col>    
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
                                    <h1 id="text_white">We're Looking for You!!!</h1>
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
                                    <h1 id="text_white_font_01">RSVP by May 24th</h1>
                            </motion.div>
                        </Col>
                    </Row>
                </AnimatePresence>
            </div>
        </div>
    )
}

export default RSVP;
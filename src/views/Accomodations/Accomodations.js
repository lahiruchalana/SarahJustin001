import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import './Accomodations.css'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Accomodations() {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [rotate, setRotate] = useState(0);

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    };

    const background={
        background: 'linear-gradient(to right, #0e001a, #b364fd)'
    }

    return(
        <div>
            <div className="background" style={background}>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <AnimatePresence>
                    <Row id="our_story_content">
                        <Col>
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
                                    <h3 id="title_our_story">Dive In Locations</h3>
                            </motion.div>
                            <br></br>
                            <motion.div  
                                transition={{ duration: 3.5 }} 
                                initial="hidden" 
                                whileInView="visible" 
                                viewport={{ once: true }} 
                                animate={{ x: 0, y: 0, opacity: 1 }}
                                variants={{
                                    visible: { opacity: 1 },
                                    hidden: { y: 100, opacity: 0 }
                                }}
                                >
                                    <h6 id="text_white"></h6>
                            </motion.div>
                        </Col>
                        <Col>
                            <br></br>
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
                        </Col>
                    </Row>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Accomodations;
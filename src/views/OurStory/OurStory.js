import React from "react";

import YouTube from 'react-youtube';
import { motion, AnimatePresence } from "framer-motion";

import './OurStory.css'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function OurStory() {

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
                <AnimatePresence>
                    <Row>
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
                                    <h2 id="text_white">Her Story</h2>
                            </motion.div>
                            <br></br>
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
                                    <h5 id="text_white">His Story</h5>
                            </motion.div>
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
                                    <h2 id="text_white">His Story</h2>
                            </motion.div>
                            <br></br>
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
                                    <h5 id="text_white">His Story</h5>
                            </motion.div>
                        </Col>
                    </Row>

                    <h1>Short and Sweet Story of Us</h1>
                    {/* create a simple video for "our story" of them */}
                    <YouTube videoId="uQVqVpdhFhA" opts={opts} /> 
                </AnimatePresence>
            </div>
        </div>
    )
}

export default OurStory;
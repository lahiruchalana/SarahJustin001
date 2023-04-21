import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import './OurStory.css'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function OurStory() {

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
                                    <h3 id="title_our_story">We Say Our Story....</h3>
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
                                    <h6 id="text_white">"Once upon a time in the city that never sleeps, Justin and Sarah were two young professionals chasing their dreams in New York. 
                                        Justin was a startup founder, and Sarah was a digital marketer working at a top agency.

                                        Their paths crossed at a networking event, where they struck up a conversation about their shared passion for entrepreneurship and innovation. 
                                        They exchanged business cards and stayed in touch, meeting up for coffee and brainstorming sessions whenever they could.

                                        It wasn't long before their professional relationship turned into something more. They discovered they had a lot more in common than just work, 
                                        from their love of craft cocktails to their obsession with travel. They spent weekends exploring new neighborhoods and trying out the latest restaurants, 
                                        and their love for each other grew stronger with every adventure.

                                        After a few years of dating, Justin knew that Sarah was the one he wanted to spend the rest of his life with. 
                                        He popped the question on a rooftop overlooking the city skyline, and Sarah said yes without hesitation.

                                        Now, they're excited to start the next chapter of their lives together as husband and wife. Join us as we celebrate the love story of Justin and Sarah, 
                                        two driven individuals who found success in their careers and each other."
                                    </h6>
                            </motion.div>
                        </Col>
                        <Col>
                            <br></br>
                            <AnimatePresence>
                                <motion.div transition={{ duration: 2 }} initial={{ y: -300, opacity: 0 }} exit={{ y: 500, opacity: 0 }} animate={{ x, y, rotate, opacity: 1 }} onMouseOver={() => {
                                    setX(40);
                                    setY(-10);
                                    setRotate(-2);
                                    }} onMouseOut={() => {
                                    setX(5);
                                    setY(0);
                                    setRotate(-0.7);
                                    }}>  
                                    <img className="image_our_story" src={require("../../assets/images/14.png")} />
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

export default OurStory;
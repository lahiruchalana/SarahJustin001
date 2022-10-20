import React from "react";

import { motion, AnimatePresence } from "framer-motion";

import './RSVP.css'
import ImageGroup from "../../components/ImageGroup/ImageGroup";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';



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
                            <br></br>  
                            <br></br>  
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
                                    <h2 id="text_white">We're Looking for You!!!</h2>
                            </motion.div>
                            <motion.div  
                                transition={{ duration: 4.5 }} 
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

                            <br></br>
                            <div className="registration_form">
                                <Row>
                                    <Col>
                                        <motion.div  
                                            transition={{ duration: 4.5 }} 
                                            initial="hidden" 
                                            whileInView="visible" 
                                            viewport={{ once: true }} 
                                            animate={{ x: 0, y: 0, opacity: 1 }}
                                            variants={{
                                                visible: { opacity: 1 },
                                                hidden: { y: 100, opacity: 0 }
                                            }}
                                        >    
                                            <InputGroup className="mb-3">
                                                <Form.Control
                                                placeholder="First Name"
                                                aria-label="First Name"
                                                aria-describedby="basic-addon1"
                                                />
                                            </InputGroup>
                                        </motion.div>
                                    </Col>
                                    <Col>
                                        <motion.div  
                                            transition={{ duration: 4.5 }} 
                                            initial="hidden" 
                                            whileInView="visible" 
                                            viewport={{ once: true }} 
                                            animate={{ x: 0, y: 0, opacity: 1 }}
                                            variants={{
                                                visible: { opacity: 1 },
                                                hidden: { y: 100, opacity: 0 }
                                            }}
                                        >    
                                            <InputGroup className="mb-3">
                                                <Form.Control
                                                placeholder="Last Name"
                                                aria-label="Last Name"
                                                aria-describedby="basic-addon1"
                                                />
                                            </InputGroup>
                                        </motion.div>
                                    </Col>
                                </Row>

                                <motion.div  
                                transition={{ duration: 4.5 }} 
                                initial="hidden" 
                                whileInView="visible" 
                                viewport={{ once: true }} 
                                animate={{ x: 0, y: 0, opacity: 1 }}
                                variants={{
                                    visible: { opacity: 1 },
                                    hidden: { y: 100, opacity: 0 }
                                }}
                                >
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                        placeholder="Email"
                                        aria-label="Email"
                                        aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </motion.div>
                                
                                <motion.div  
                                        transition={{ duration: 4.5 }} 
                                        initial="hidden" 
                                        whileInView="visible" 
                                        viewport={{ once: true }} 
                                        animate={{ x: 0, y: 0, opacity: 1 }}
                                        variants={{
                                            visible: { opacity: 1 },
                                            hidden: { y: 100, opacity: 0 }
                                        }}
                                    >        
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                        placeholder="Phone"
                                        aria-label="Phone"
                                        aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </motion.div>

                                <motion.div  
                                        transition={{ duration: 4.5 }} 
                                        initial="hidden" 
                                        whileInView="visible" 
                                        viewport={{ once: true }} 
                                        animate={{ x: 0, y: 0, opacity: 1 }}
                                        variants={{
                                            visible: { opacity: 1 },
                                            hidden: { y: 100, opacity: 0 }
                                        }}
                                    >
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                        placeholder="Number of People Participating"
                                        aria-label="Email"
                                        aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </motion.div>

                                <motion.div  
                                        transition={{ duration: 4.5 }} 
                                        initial="hidden" 
                                        whileInView="visible" 
                                        viewport={{ once: true }} 
                                        animate={{ x: 0, y: 0, opacity: 1 }}
                                        variants={{
                                            visible: { opacity: 1 },
                                            hidden: { y: 100, opacity: 0 }
                                        }}
                                    >
                                    <Row>
                                        <Col>
                                            <Button variant="success">Yes, I'm Participating</Button>
                                        </Col>
                                        <Col>
                                            <Button variant="danger">No, I'm not Participating </Button>
                                        </Col>
                                    </Row>                                        
                                </motion.div>

                            </div>

                        </Col>
                    </Row>
                </AnimatePresence>
            </div>
        </div>
    )
}

export default RSVP;
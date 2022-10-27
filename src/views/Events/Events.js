import React, { useState }  from "react";

import { motion, AnimatePresence } from "framer-motion";

import TextArea from "./TextArea";


function Events() {

    const [data, setData] = useState(null);

    let num = 1;

    const background={
        background: 'linear-gradient(to right, #0e001a, #b364fd)'
    }

    function chnageValue() {
        num = num + 1;
        setData(`I need to pass this message to Accomodation page ${num*2}`)
    }

    console.log(data);

    return(
        <div>
            <div className="background" style={background}>
                <br></br>
                <br></br>
                <br></br>
                <AnimatePresence>
                    <h1>Short and Sweet Story of Us</h1>
                </AnimatePresence>





                {/* some test code here */}
                
                <button onClick={() => chnageValue()}>Click to pass the value as Prop</button>

                <br></br>

                <TextArea propFromEvent={data}></TextArea>

                {/* some test code here */}
                
            </div>
        </div>
    )
}

export default Events;
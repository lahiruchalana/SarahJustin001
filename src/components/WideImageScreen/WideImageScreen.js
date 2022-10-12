import React from "react";

import './WideImageScreen.css';


function WideImageScreen() {

    const background_image={
        background: 'linear-gradient(to right, #320000, #f68989)'
    }

    return(
        <div>
            <div  className="background_image" style={background_image}>
                <img className="image" src={require("../../assets/images/01.jpg")} />
            </div>
            <h1 className="home_title">Sarah <br></br> And <br></br> Justin</h1>
        </div>
    );
}

export default WideImageScreen;
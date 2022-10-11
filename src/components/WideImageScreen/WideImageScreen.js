import React from "react";

import './WideImageScreen.css';


function WideImageScreen() {

    const background_image={
        background: 'linear-gradient(to right, #181313, #090606)'
    }

    return(
        <div>
            <div  className="background_image" style={background_image}>
                <img className="image" src={require("../../assets/images/02homeWideScreen.jpg")} />
            </div>
        </div>
    );
}

export default WideImageScreen;
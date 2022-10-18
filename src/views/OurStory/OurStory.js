import React from "react";

import YouTube from 'react-youtube';

import './OurStory.css'

function OurStory() {

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    };

    return(
        <div>
            <h1>Our Story</h1>

            <YouTube videoId="uQVqVpdhFhA" opts={opts} />
        </div>
    )
}

export default OurStory;
import React from "react"; 


function Video (){
    return (
        <>
        <div className="titol">    
            <h1>Video</h1>
        </div>
        <iframe id="phaser" src="https://www.youtube.com/embed/5GrbexIdYHc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </>
    )
}

export default Video; 

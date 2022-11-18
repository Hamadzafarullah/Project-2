import React from "react";
import {Link} from "react-router-dom"
function Intro() {
   
    return(
   <div className="backintro">
    <div className="title">Welcome To GetAnime Click One See More To See List Of Anime</div>
   <Link to = {"/TopAnime"}>
    <div className="button">See more</div>
    </Link>  
    </div>
    
   )
}

export default Intro
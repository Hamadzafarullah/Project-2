import React from "react";
import {Link} from "react-router-dom"
function Intro() {
   
    return(
   <div className="backintro">
    <div className="title">Click See More To See a List Of Anime And There Ratings/Info</div>
   <Link to = {"/TopAnime"}>
    <div className="button">See more</div>
    </Link>  
    </div>
    
   )
}

export default Intro
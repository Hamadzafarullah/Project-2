import React from "react";
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"

function Showpage(){
    
    const { id } = useParams()
    const [animePage, setAnimePage] = useState ()
    const [loading, setLoading]=useState(true)
    const thisAnimeURL = `https://api.jikan.moe/v4/anime/${id}`

    useEffect(()=>{
        fetch(thisAnimeURL)
        .then((res)=> res.json())
        .then((json)=> {
            setAnimePage(json.data)
        })
      .catch(console.error)
    },[]
      )
      
      useEffect(()=>{
      },[animePage]
      )
      if(animePage){
return(
    <div className="show">
        <img src= {animePage.images.jpg.image_url}/>
        <h1>{animePage.title}</h1>
        <h2>{animePage.title_japanese}</h2>
        <iframe src ={animePage.trailer.embed_url}/>
        <h3>{animePage.rating}</h3>
        <p>{animePage.synopsis}</p>
        
    
    </div>
    
)   }
else{
    return(
   <div>loading</div>
    )
}
}
    export default Showpage

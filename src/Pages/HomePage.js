import React from "react";
import {useState, useEffect} from "react"
import {Link} from "react-router-dom"


function  Home (){
  const [animeList , setAnimeList] = useState([])
  const URL ="https://api.jikan.moe/v4/top/anime"
  useEffect(()=>{
    fetch(URL)
    .then((res)=> res.json())
    .then((json)=> {
        setAnimeList(json.data)
    })
  .catch(console.error)
},[]
  )
  const loading = () => {
    return (

        <h1>loading</h1>
    )
}
const loaded = () => {
   
        
    }

  const showAnime= animeList.map((anime,id) =>{
    return(
        <Link to = {`/ShowPage/${anime.mal_id}`}>
        <section className="animeCard">
        <img src= {anime.images.jpg.image_url}/>
        <h2>{anime.title}</h2>
        </section>
         </Link>
    )
})
    return (
       <div className="Home">
        <h1>Anime List</h1>
    <div className="container">
    {showAnime}
    </div>
    {animeList && setAnimeList.length ? loaded() : loading}
    </div>
    )
}


export default Home
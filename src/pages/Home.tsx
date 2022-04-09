import React,{useState,useEffect} from "react";

import {Link} from "react-router-dom";


function Home(){
   
    return (
    <div className="container-home">
       <h1>Bienvenidos a la Home</h1>
       <h2>Hacé tu búsqueda</h2>
       <Link to="/page2">LInk</Link>
        
    </div>)

}

export{
    Home
}
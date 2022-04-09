import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";


function Page3(){
    
    return (
    <div className="container-home">
       <h1>Bienvenidos a la page 3</h1>  
       <Link to="/page4">LInk</Link>
    </div>)

}

export{
    Page3
}
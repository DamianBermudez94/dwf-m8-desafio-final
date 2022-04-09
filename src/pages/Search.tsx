import React,{useState,useEffect} from "react";
import {Link, useParams} from "react-router-dom";

function Search(){
    const params= useParams();
    console.log(params.busqueda);
    useEffect(()=>{
    console.log("acá harías un fecht usando el param", params.busqueda);

    },[params])
    
    return (
    <div className="container-home">
       <h1>Bienvenidos a la page Search</h1>  
       <Link to="/">LInk</Link>
       <Link to="/search/termo">LInk a la page termo</Link>
    </div>)

}

export{
    Search
}
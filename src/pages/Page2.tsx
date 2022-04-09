import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import {SearchForm} from "components/SearchForm"


function Page2(){
    
    return (
    <div className="container-home">
       <h1>Bienvenidos a la Page 2</h1> 
        
       <Link to="/page3">LInk</Link>
    </div>)

}

export{
    Page2
}
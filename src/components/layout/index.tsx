import React,{useState,useEffect} from "react";

import {Outlet} from "react-router-dom";
import {SearchForm} from "components/SearchForm"


function Layuot(){
   
    return (
    <div className="container-home">
        <header style={{border:"2px solid blue",backgroundColor:"blue"}}><SearchForm></SearchForm></header>
        <Outlet/>
        <footer style={{border:"2px solid red",backgroundColor:"red"}}>Soy el footer</footer>
    </div>)

}

export{
    Layuot
}
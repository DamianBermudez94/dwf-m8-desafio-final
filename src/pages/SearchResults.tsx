import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import {useSearchResults} from "../hooks"


function SearchResults(){
   
    const results = useSearchResults()
    
   
    return (
    <ul className="container-home">{results.map((r)=>(<li>
        
        <Link to={"/item/" + r.id}><h2>{r.title}</h2></Link>
        <h3>{r.price}</h3>
        <img src={r.thumbnail} className="img.search" />
    </li>))}
   
        
    </ul>)

}

export{
    SearchResults
}
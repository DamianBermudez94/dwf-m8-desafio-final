import { SearchResults } from "pages/SearchResults";
import React from "react";
import {useNavigate} from "react-router-dom";
import {useSearchResults} from "../hooks";
import {MainButton} from "../ui/buttons";
import {TextField} from "../ui/textfield"


function SearchForm(){
    const navigate = useNavigate();
    const results = useSearchResults()
    const handleSubmit = (e)=>{
        e.preventDefault();
        const query = e.target.query.value;
        console.log(query);
        navigate("/search/"+ query, {replace:true})

            
    }
    return ( 
        <form onSubmit={handleSubmit} className="search-form">
            <TextField  type="text" name="query" />
            <MainButton>Buscar</MainButton>
                <h4>Resultados de su busqueda: {results.length}</h4>
        </form>
    )
    
}

export{ SearchForm }
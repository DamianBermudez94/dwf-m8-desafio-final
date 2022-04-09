import React,{useState,useEffect} from "react";
import {useParams} from "react-router-dom";
import {atom,useRecoilState,useRecoilValue, selector, useSetRecoilState} from "recoil";

const queryState = atom({
    key:"query",
    default:""

});

const searchResultsQuery = selector({
    key:"searchResults",
    get: async({get})=>{
        const valorDeQuery = get(queryState);
        if (valorDeQuery) {
            const response = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + valorDeQuery);
            //Respuesta de la api para que este todo ok
            console.log("soy la api",response );
            //extraemos la data necesaria
    
            const data = await response .json()
            console.log(data);
            return data.results;
        } else {
            return [];
        }
    }
})

export function useSearchResults(){
    // recibimos los parametros de la url
    const params = useParams();
    const query = params.query

    const   setRecoilQuery = useSetRecoilState(queryState);
    const results = useRecoilValue(searchResultsQuery);

    useEffect(()=>{
        setRecoilQuery(query);
    },[query])
    return results;
}    
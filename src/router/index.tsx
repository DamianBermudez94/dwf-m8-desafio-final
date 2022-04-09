import React from "react";
import {Routes,Route} from "react-router-dom";
import { Layuot} from "components/layout";
import { Home } from "pages/Home";
import { Page2} from "pages/Page2"
import { Page3 } from "pages/Page3";
import { Page4 } from "pages/Page4";
import { SearchResults } from "pages/SearchResults";

function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Layuot></Layuot>}>
                <Route index element={<Home></Home>}></Route>
                <Route path="/search/:query" element={<SearchResults></SearchResults>}></Route>
                <Route path="page2" element={<Page2></Page2>}></Route>
                <Route path="page3" element={<Page3></Page3>}></Route>
                <Route path="page4" element={<Page4></Page4>}></Route>
            </Route>
            
        </Routes>
    )
}
export{AppRoutes}
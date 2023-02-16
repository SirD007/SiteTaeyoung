import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Maint from "./pages/Maint"

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Maint }  path="/" exact />
           <Route component = { Home }  path="/home" />
       </BrowserRouter>
   )
}

export default Routes;
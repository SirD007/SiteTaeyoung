import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Maint from "./pages/Maint";
import Empresa from "./pages/Empresa";
import Solucoes from "./pages/Soluções";
import Contato from "./pages/Soluções";

export default function Rotas() {
   return(
            <Routes>
                <Route element = { <Maint/> }  path="/" exact />
                <Route element = { <Home/> }  path="/home" />
                <Route element = { <Empresa/> }  path="/empresa" />
                <Route element = { <Solucoes/> }  path="/solucoes" />
                <Route element = { <Contato/> }  path="/contato" />
           </Routes>
   )
}
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";



import Home from "./pages/Home";
import Empresa from "./pages/Empresa";
import Solucoes from "./pages/Solucoes";
import Contato from "./pages/Contato";
import Costumers from "./pages/Costumers";
import ProductsList from "./pages/ProductsList";
import ProductDetail from "./pages/ProductDetail";

export default function Rotas() {
   return(
       <BrowserRouter>
            <Routes>
                <Route element = { <Home/> }  path="/" />
                <Route element = { <Empresa/> }  path="/empresa" />
                <Route element = { <Solucoes/> }  path="/solucoes" />
                <Route element = { <Contato/> }  path="/contato" />
                <Route element = { <Costumers/> }  path="/clientes" />
                <Route element = { <ProductsList/> }  path="/products" />
                <Route element= { <ProductDetail/> } path="/products/:productId" />
           </Routes>
       </BrowserRouter>
   )
}
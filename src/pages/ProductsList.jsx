
import { Link } from "react-router-dom";
import HeaderMenu from "../components/HeaderMenu";
import SiteFooter from "../components/SiteFooter";
import Linhas from "./Linhas";

import rohscert from "../assets/rohscert.png"

export default function Linhapvc() {

    return (
        <div>
            <HeaderMenu/>
            <div className="bg-slate-50 w-screen py-40">

                <div id="linhapvc" className="flex flex-col px-[20%] max-lg:px-[10%] items-center py-14">
                        <h1 className="text-center text-4xl text-gray-600 py-3">Linha PVC</h1>
                        <div className="w-2/4 h-[1px] bg-gray-300 mb-20"></div>
                    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6 w-full">
                        {Linhas.slice(0,6).map((product, index) => {
                        return (
                                <div className="w-full">
                                    <div key={index} className="flex items-center shadow-lg group/item hover:scale-105 transition-all rounded-xl w-full">
                                        <div className="bg-slate-100 group-hover/item:bg-primaryRose transition-all h-72 w-1/3 flex items-center justify-center relative rounded-l-xl"><img className="object-cover absolute" src={product.imgSrc} alt={product.SKU} /></div>
                                        <div className="bg-slate-50 group-hover/item:bg-white h-72 w-2/3 p-8 flex flex-col justify-between relative rounded-r-xl">
                                        {product.roHS ? (
                                                <div className="absolute right-4 top-[-5px] w-10 h-14 bg-green-500 rounded-b-md justify-center items-center flex"><img src={rohscert} alt="rohs" /></div>
                                            ) : (
                                                <div></div>
                                            )}
                                            <span className="font-bold text-slate-600 text-3xl">{product.SKU}</span>
                                            <div><span className="text-zinc-500 text-sm font-light">Ref:</span><span className="text-zinc-500 text-sm font-light">{product.ref}</span></div>
                                            <span className="font-bold text-sm">{product.composition}</span>
                                            <div className="flex gap-2">
                                                <span className="text-sm font-bold">Cores:</span>
                                                <div className="flex-wrap flex w-full gap-2">
                                                    {product.cores.map((product, index) => {
                                                            return (<div key={index} className={`${product.color} w-5 h-5 rounded-[50%] border-2 group relative`}>
                                                                <span className="bg-zinc-100 p-1 rounded hidden group-hover:flex absolute bottom-6 z-10 text-xs min-w-max">{product.colorName}</span>
                                                            </div>)
                                                    })}
                                                </div>
                                            </div>
                                            <Link to={`/products/${product.id}`} className="bg-primaryBlue text-center py-1 px-2 rounded text-white hover:opacity-90 transition-all">Detalhes</Link>
                                        </div>
                                    </div>
                                </div>      
                            )}  
                        )}
                    </div>
                </div>  

                <div id="linhatextil" className="flex flex-col px-[20%] max-lg:px-[10%] items-center py-14">
                        <h1 className="text-center text-4xl text-gray-600 py-3">Linha Têxtil</h1>
                        <div className="w-2/4 h-[1px] bg-gray-300 mb-20"></div>
                    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6 w-full">
                        {Linhas.slice(6,8).map((product, index) => {
                        return (
                                <div className="w-full">
                                    <div key={index} className="flex items-center shadow-lg group/item hover:scale-105 transition-all rounded-xl w-full">
                                        <div className="bg-slate-100 group-hover/item:bg-primaryRose transition-all h-72 w-1/3 flex items-center justify-center relative rounded-l-xl"><img className="object-cover absolute" src={product.imgSrc} alt={product.SKU} /></div>
                                        <div className="bg-slate-50 group-hover/item:bg-white h-72 w-2/3 p-8 flex flex-col justify-between relative rounded-r-xl">
                                        {product.roHS ? (
                                                <div className="absolute right-4 top-[-5px] w-10 h-14 bg-green-500 rounded-b-md justify-center items-center flex"><img src={rohscert} alt="rohs" /></div>
                                            ) : (
                                                <div></div>
                                            )}
                                            <span className="font-bold text-slate-600 text-3xl">{product.SKU}</span>
                                            <div><span className="text-zinc-500 text-sm font-light">Ref:</span><span className="text-zinc-500 text-sm font-light">{product.ref}</span></div>
                                            <span className="font-bold text-sm">{product.composition}</span>
                                            <div className="flex gap-2">
                                                <span className="text-sm font-bold">Cores:</span>
                                                <div className="flex-wrap flex w-full gap-2">
                                                    {product.cores.map((product, index) => {
                                                            return (<div key={index} className={`${product.color} w-5 h-5 rounded-[50%] border-2 group relative`}>
                                                                <span className="bg-zinc-100 p-1 rounded hidden group-hover:flex absolute bottom-6 z-10 text-xs min-w-max">{product.colorName}</span>
                                                            </div>)
                                                    })}
                                                </div>
                                            </div>
                                            <Link to={`/products/${product.id}`} className="bg-primaryBlue text-center py-1 px-2 rounded text-white hover:opacity-90 transition-all">Detalhes</Link>
                                        </div>
                                    </div>
                                </div>      
                            )}  
                        )}
                    </div>
                </div>  

                <div id="linhaaltatensao" className="flex flex-col px-[20%] max-lg:px-[10%] items-center py-14">
                        <h1 className="text-center text-4xl text-gray-600 py-3">Linha Alta Tensão</h1>
                        <div className="w-2/4 h-[1px] bg-gray-300 mb-20"></div>
                    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6 w-full">
                        {Linhas.slice(8,9).map((product, index) => {
                        return (
                                <div className="w-full">
                                    <div key={index} className="flex items-center shadow-lg group/item hover:scale-105 transition-all rounded-xl w-full">
                                        <div className="bg-slate-100 group-hover/item:bg-primaryRose transition-all h-72 w-1/3 flex items-center justify-center relative rounded-l-xl"><img className="object-cover absolute" src={product.imgSrc} alt={product.SKU} /></div>
                                        <div className="bg-slate-50 group-hover/item:bg-white h-72 w-2/3 p-8 flex flex-col justify-between relative rounded-r-xl">
                                            {product.roHS ? (
                                                <div className="absolute right-4 top-[-5px] w-10 h-14 bg-green-500 rounded-b-md justify-center items-center flex"><img src={rohscert} alt="rohs" /></div>
                                            ) : (
                                                <div></div>
                                            )}
                                            <span className="font-bold text-slate-600 text-3xl">{product.SKU}</span>
                                            <div><span className="text-zinc-500 text-sm font-light">Ref:</span><span className="text-zinc-500 text-sm font-light">{product.ref}</span></div>
                                            <span className="font-bold text-sm">{product.composition}</span>
                                            <div className="flex gap-2">
                                                <span className="text-sm font-bold">Cores:</span>
                                                <div className="flex-wrap flex w-full gap-2">
                                                    {product.cores.map((product, index) => {
                                                            return (<div key={index} className={`${product.color} w-5 h-5 rounded-[50%] border-2 group relative`}>
                                                                <span className="bg-zinc-100 p-1 rounded hidden group-hover:flex absolute bottom-6 z-10 text-xs min-w-max">{product.colorName}</span>
                                                            </div>)
                                                    })}
                                                </div>
                                            </div>
                                            <Link to={`/products/${product.id}`} className="bg-primaryBlue text-center py-1 px-2 rounded text-white hover:opacity-90 transition-all">Detalhes</Link>
                                        </div>
                                    </div>
                                </div>      
                            )}  
                        )}
                    </div>
                </div>

                <div id="outros" className="flex flex-col px-[20%] max-lg:px-[10%] items-center py-14">
                        <h1 className="text-center text-4xl text-gray-600 py-3">Outros</h1>
                        <div className="w-2/4 h-[1px] bg-gray-300 mb-20"></div>
                    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6 w-full">
                        {Linhas.slice(9).map((product, index) => {
                        return (
                                <div className="w-full">
                                    <div key={index} className="flex items-center shadow-lg group/item hover:scale-105 transition-all rounded-xl w-full">
                                        <div className="bg-slate-100 group-hover/item:bg-primaryRose transition-all h-72 w-1/3 flex items-center justify-center relative rounded-l-xl"><img className="object-cover absolute" src={product.imgSrc} alt={product.SKU} /></div>
                                        <div className="bg-slate-50 group-hover/item:bg-white h-72 w-2/3 p-8 flex flex-col justify-between relative rounded-r-xl">
                                            {product.roHS ? (
                                                <div className="absolute right-4 top-[-5px] w-10 h-14 bg-green-500 rounded-b-md justify-center items-center flex"><img src={rohscert} alt="rohs" /></div>
                                            ) : (
                                                <div></div>
                                            )}
                                            <span className="font-bold text-slate-600 text-3xl">{product.SKU}</span>
                                            <div><span className="text-zinc-500 text-sm font-light">Ref:</span><span className="text-zinc-500 text-sm font-light">{product.ref}</span></div>
                                            <span className="font-bold text-sm">{product.composition}</span>
                                            <div className="flex gap-2">
                                                <span className="text-sm font-bold">Cores:</span>
                                                <div className="flex-wrap flex w-full gap-2">
                                                    {product.cores.map((product, index) => {
                                                            return (<div key={index} className={`${product} w-5 h-5 rounded-[50%] border-2 group relative`}>
                                                                 <span className="bg-zinc-100 p-1 rounded hidden group-hover:flex absolute bottom-6 z-10 text-xs min-w-max">{product.colorName}</span>
                                                            </div>)
                                                    })}
                                                </div>
                                            </div>
                                            <Link to={`/products/${product.id}`} className="bg-primaryBlue text-center py-1 px-2 rounded text-white hover:opacity-90 transition-all">Detalhes</Link>
                                        </div>
                                    </div>
                                </div>      
                            )}  
                        )}
                    </div>
                </div>  

            </div>  
            <SiteFooter/>
        </div>
        )}
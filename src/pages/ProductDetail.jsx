import React from "react"
import {Link, useParams} from "react-router-dom"
import HeaderMenu from "../components/HeaderMenu"
import productsData from "./Linhas"

function ProductDetail() {
    const {productId} = useParams()
    const thisProduct = productsData.find(prod => prod.id === productId)
    
    return (
        <div>
            <HeaderMenu/>
            <div key={productId} className="px-[10%] h-screen w-screen bg-gray-900 flex relative justify-center items-center">
                <div className="bg-slate-800 w-[90%] h-28 shadow-2xl rounded-lg absolute bottom-4 z-50 flex justify-between items-center">
                    <Link className="text-red-700 font-semibold text-lg bg-red-300 hover:bg-red-400 p-2 rounded transition-all flex items-center justify-center w-26 h-20 m-4" to="/products">← Voltar</Link>
                    <div>
                        <span className="text-white">Cores</span>
                        <div className="flex gap-2">
                            {thisProduct.cores.map((cores, index) => {
                                return (
                                    <div key={index} className={`${cores} w-5 h-5 rounded-[50%] border-2`}></div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="h-full w-[70%] px-6 flex flex-col justify-center">
                        <span className="text-white">Utilizado em</span>
                        <span className="text-white text-sm">{thisProduct.Utility}</span>
                    </div>
                </div>
                <div className="w-screen h-screen grid grid-cols-3 justify-center items-center relative">
                    <div className="p-10">
                        <img src={thisProduct.imgSrc} alt="" />
                    </div>
                    <div className="flex flex-col p-10">
                        <div>
                            <h1 className="text-zinc-200 font-black text-8xl select-none">{thisProduct.SKU}</h1>
                            <span className="text-white font-light text-lg select-none">Ref: {thisProduct.ref}</span>
                        </div>
                        <span className="text-zinc-400">{thisProduct.description}</span>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-lg flex flex-col w-1/2">
                        <div className="flex flex-col bg-gray-700 p-5">
                            <span className="text-xl font-black text-white">{thisProduct.SKU}</span>
                            <span className="text-sm text-zinc-400">{thisProduct.composition}</span>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-col bg-slate-800 p-3">
                                <span className="text-xs uppercase text-gray-400 font-bold">Adesão ao Aço</span><span className="text-white">{thisProduct.AdesAço}</span>
                            </div>
                            <div className="flex flex-col bg-slate-700 p-3">
                                <span className="text-xs uppercase text-gray-400 font-bold">Adesão ao Dorso</span><span className="text-white">{thisProduct.AdesDorso}</span>
                            </div>
                            <div className="flex flex-col bg-slate-800 p-3">
                                <span className="text-xs uppercase text-gray-400 font-bold">Resistência a Tração</span><span className="text-white">{thisProduct.ResisTraç}</span>
                            </div>
                            <div className="flex flex-col bg-slate-700 p-3">
                                <span className="text-xs uppercase text-gray-400 font-bold">Alongamento</span><span className="text-white">{thisProduct.Along}</span>
                            </div>
                            <div className="flex flex-col bg-slate-800 p-3">
                                <span className="text-xs uppercase text-gray-400 font-bold">Resistência a chama</span><span className="text-white">{thisProduct.ResistChama}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
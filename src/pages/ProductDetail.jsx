import React from "react"
import {Link, useParams} from "react-router-dom"
import HeaderMenu from "../components/HeaderMenu"
import productsData from "./Linhas"
import productsDataT from "./LinhaTextilData"
import productsDataAT from "./LinhaAltaTensaoData"

function ProductDetail() {
    const {productId} = useParams()
    const thisProduct = productsData.find(prod => prod.id === productId)
    
    return (
        <div>
            <HeaderMenu/>
            <div key={productId} className="h-screen w-screen bg-gray-900 flex relative justify-center items-center">
                <div>
                    <Link className="text-white font-semibold text-xl absolute left-[30px] top-28 bg-gray-700 hover:bg-gray-800 p-2 rounded transition-all" to="/products">← Voltar</Link>
                </div>
                <div className="flex gap-8">                                    
                    <div className="p-5 bg-white rounded-xl h-[400px] w-[350px] flex hover:scale-105 transition-all shadow-xl relative">
                        <img className="" src={thisProduct.imgSrc} alt="" />
                        <div className="bg-primaryBlue rounded-xl h-[150px] w-[130px] absolute top-[245px] left-[-60px] shadow-lg flex justify-center items-center" ><img src={thisProduct.imgSrc} alt="" /></div>
                    </div>
                    <div className="shadow-xl w-[350px] h-[500px] rounded-xl bg-white">
                        <div>
                            <h1>{thisProduct.SKU}</h1>
                            <span>Ref: {thisProduct.ref}</span>
                        </div>
                        <span>{thisProduct.composition}</span>
                        <span>{thisProduct.description}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
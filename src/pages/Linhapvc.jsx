
import { Link } from "react-router-dom";
import HeaderMenu from "../components/HeaderMenu";
import SiteFooter from "../components/SiteFooter";
import LinhaPvcData from "./LinhaPvcData";

const Linhapvc = () => {
    const products = LinhaPvcData.map(product => {
        return (
            <div key={product.id}>
                <span><Link to={`/products/${product.id}`}>{product.name}</Link></span>
            </div>
        )
    })

    return (
        <>
        <HeaderMenu/>
        <div className="h-screen bg-slate-300 flex items-center justify-center">
        {products}
        </div>
        <SiteFooter/>
        </>
    )
}

export default Linhapvc
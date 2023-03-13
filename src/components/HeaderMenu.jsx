import { Link } from "react-router-dom"

import TaeyoungLogo from '../../public/favicon.png'

export default function HeaderMenu() {
    return (
        <div className="fixed z-20">
            <nav>
                <div className="bg-white bg-opacity-90 shadow-md h-26 w-screen flex 2xl:px-[20%] xl:px-[20%] lg:px-[10%] md:px-[10%] sm:px-[10%]  justify-between items-center">
                    <div>
                        <a href="/home"><img className="max-w-[80px]" src={TaeyoungLogo} alt="Taeyoung Logo" /></a>
                    </div>
                    <div className="flex gap-10">
                        <Link
                        className="text-gray-700 hover:text-primaryRose transition-all uppercase"
                        to="/home">Home</Link>
                        <Link
                        className="text-gray-700 hover:text-primaryRose transition-all uppercase"
                        to="/empresa">Empresa</Link>
                        <Link
                        className="text-gray-700 hover:text-primaryRose transition-all uppercase"
                        to="/solucoes">Soluções</Link>
                        <Link
                        className="text-gray-700 hover:text-primaryRose transition-all uppercase"
                        to="/contato">Contato</Link>
                        <Link
                        className="text-gray-700 hover:text-primaryRose transition-all uppercase"
                        to="/clientes">Clientes</Link>
                    </div>
                </div>
            </nav>
        </div>
   )
}
import { Link } from "react-router-dom"

import TaeyoungLogo from '../../public/favicon.png'

export default function HeaderMenu() {
    return (
        <div className="fixed z-10">
            <nav>
                <div className="bg-white shadow-md h-26 w-screen flex px-[10%] justify-between items-center">
                    <div>
                        <a href="/home"><img className="max-w-[80px]" src={TaeyoungLogo} alt="Taeyoung Logo" /></a>
                    </div>
                    <div className="flex gap-10">
                        <Link
                        className="text-gray-700 hover:text-pink-600 transition-all uppercase"
                        to="/empresa">Empresa</Link>
                        <Link
                        className="text-gray-700 hover:text-pink-600 transition-all uppercase"
                        to="/solucoes">Soluções</Link>
                        <Link
                        className="text-gray-700 hover:text-pink-600 transition-all uppercase"
                        to="/contato">Contato</Link>
                    </div>
                </div>
            </nav>
        </div>
   )
}
import { Link } from "react-router-dom"

import TaeyoungLogo from '../../public/favicon.png'

import { RxHamburgerMenu, RxChatBubble, RxPerson, RxCross1 } from "react-icons/rx";
import { FaTape } from "react-icons/fa";
import { AiOutlineHome, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";


export default function HeaderMenu() {

    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <div>
            <div className="fixed z-50">
                <nav>
                    <div className="bg-white shadow-md h-26 w-screen flex px-[10%] justify-between items-center">
                        <div>
                            <a href="/"><img className="max-w-[80px]" src={TaeyoungLogo} alt="Taeyoung Logo" /></a>
                        </div>
                        <div className="flex gap-10 max-md:hidden">
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
                        {isNavOpen ? <RxCross1
                        onClick={() => setIsNavOpen((prev) => !prev)}
                        className="md:hidden"
                        size="30px"/> : <RxHamburgerMenu
                        onClick={() => setIsNavOpen((prev) => !prev)}
                        className="md:hidden"
                        size="30px"
                        />}
                    </div>
                    <div className={`md:hidden bg-zinc-50 w-1/2 absolute right-0 flex flex-col gap-4 p-4 transition-[1000ms] rounded-b-lg shadow-xl ${isNavOpen ? "showMenuNav" : "hideMenuNav"}`}>
                            <div className="p-4 flex gap-4 items-center hover:bg-zinc-100 rounded">
                                <AiOutlineHome
                                className="text-primaryRose text-2xl"
                                />
                                <Link
                                className="text-gray-700 hover:text-primaryRose transition-all text-center"
                                to="/home">Home</Link>
                            </div>
                            <div className="p-4 flex gap-4 items-center hover:bg-zinc-100 rounded">
                                <AiOutlineHeart
                                className="text-primaryRose text-2xl"
                                />
                                <Link
                                className="text-gray-700 hover:text-primaryRose transition-all text-center"
                                to="/empresa">Empresa</Link>
                            </div>
                            <div className="p-4 flex gap-4 items-center hover:bg-zinc-100 rounded">
                                <FaTape
                                className="text-primaryRose text-2xl"
                                />
                                <Link
                                className="text-gray-700 hover:text-primaryRose transition-all text-center"
                                to="/solucoes">Soluções</Link>
                            </div>
                            <div className="p-4 flex gap-4 items-center hover:bg-zinc-100 rounded">
                                <RxChatBubble
                                className="text-primaryRose text-2xl"
                                />
                                <Link
                                className="text-gray-700 hover:text-primaryRose transition-all text-center"
                                to="/contato">Contato</Link>
                            </div>
                            <div className="p-4 flex gap-4 items-center hover:bg-zinc-100 rounded">
                                <RxPerson
                                className="text-primaryRose text-2xl"
                                />
                                <Link
                                className="text-gray-700 hover:text-primaryRose transition-all text-center"
                                to="/clientes">Clientes</Link>
                            </div>
                    </div>
                </nav>
            </div>
        </div>       
   )
}
import { Link } from "react-router-dom"

import { FaPhoneAlt, FaMailBulk } from "react-icons/fa";

export default function SiteFooter() {
    return (
        <div>
            <div className="bg-gray-800 py-10">
                <div className="px-[20%] flex justify-between max-lg:flex-col">
                    <div className="flex flex-col my-4">
                        <span className="font-bold text-blue-500 text-lg">Institucional</span>
                        <div className="flex flex-col">
                            <Link
                            className="text-white hover:text-primaryBlue transition-all"
                            to="/empresa">Empresa</Link>
                            <Link
                            className="text-white hover:text-primaryBlue transition-all"
                            to="/empresa">Politica de Privacidade</Link>
                        </div>                        
                    </div>

                    <div className="flex flex-col my-4">
                        <span className="font-bold text-blue-500 text-lg">Soluções</span>
                        <div className="flex flex-col">
                            <Link
                            className="text-white hover:text-primaryBlue transition-all"
                            to="/products">Linha PVC</Link>
                            <Link
                            className="text-white hover:text-primaryBlue transition-all"
                            to="/products">Linha </Link>
                            <Link
                            className="text-white hover:text-primaryBlue transition-all"
                            to="/products">Doowon</Link>
                        </div>                        
                    </div>

                    <div className="flex flex-col my-4">
                        <span className="font-bold text-blue-500 text-lg">Fale Conosco</span>
                        <div className="flex flex-col">
                            <Link
                            className="text-white hover:text-primaryBlue transition-all"
                            to="/empresa">Formulário de Contato</Link>

                            <div className="flex items-center gap-4 my-2 p-4 bg-white rounded-md">
                                <FaPhoneAlt
                                color="#3b82f6"
                                size="24px"
                                />
                                <div className="flex flex-col">
                                    <span className="text-gray-800 text-xs uppercase leading-3">Central de Atendimento</span>
                                    <a href="tel:+551933758506" className="text-gray-800 leading-3">19 3375-8506</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 my-2 p-4 bg-white rounded-md">
                                <FaMailBulk
                                color="#3b82f6"
                                size="24px"
                                />
                                <div className="flex flex-col">
                                    <span className="text-gray-800 text-xs uppercase leading-3">email</span>
                                    <a href="mailto:br@taeyoung.com.br" className="text-gray-800 leading-3">br@taeyoung.com.br</a>
                                </div>
                            </div>

                        </div>                        
                    </div>

                </div>
            </div>
            <div className="bg-primaryRose py-2 flex items-center justify-center">
                <span className="text-white">Taeyoung Brasil © | Todos os Direitos Reservados</span>
            </div>
        </div>
    )
}
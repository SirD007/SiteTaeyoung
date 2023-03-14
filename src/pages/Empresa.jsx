import React from 'react';
import HeaderMenu from '../components/HeaderMenu';
import SiteFooter from '../components/SiteFooter';

import HomeHeaderImg from '../assets/HomeHeaderImg.png'
import InstituicionalImage from '../assets/institucional.png'

import { FaBinoculars, FaPeopleArrows, FaAward, FaBullseye } from "react-icons/fa";
import CustomBtn from '../components/CustomBtn';

const iconsIconBox = [
    <FaBinoculars/>,
    <FaPeopleArrows/>,
    <FaAward/>,
    <FaBullseye/>
]

const InstitucionalIconBox = [
    {title: "Estratégia e Planejamento", text: "Liderança em comunicação aberta e responsabilidade e contribuição para sociedade"},
    {title: "Cultura Integrada", text: "Em constante evolução, criando uma cultura para se tornar cada vez melhor"},
    {title: "Liderança de Mercado", text: "A Taeyoung tem foco constante para o desenvolvimento do produto líder de mercado"},
    {title: "Client First", text: "Capacidades de marketing, estrutura e politicas orientadas para o cliente"}
]

const Empresa = () => {
    return (
        <div className='flex flex-col'>
            <HeaderMenu/>
            <section className='px-[20%] flex justify-between items-center mt-16'>                
                    <div className='py-24'>
                        <div className='flex flex-col mb-14 py-16'>
                            <h2 className='font-heading font-bold text-3xl text-center'>Conheça a Taeyoung</h2>
                            <span className='text-center text-zinc-500'>Para cada ocasião temos o produto ideal</span>
                         </div>
                        <div className='flex justify-between items-center'>
                            <div className='text-zinc-500 flex flex-col gap-3'>
                                <span className='text-3xl'>Bem estar <strong className='text-3xl'>futuro</strong>,<br></br> Respeito <strong className='text-3xl'>mútuo.</strong></span>
                                <span className='bg-primaryBlue py-1 px-2 rounded-full text-white text-xs w-max'>TAEYOUNG BRASIL</span>
                                <span className='text-base leading-6'>Em 1978, a Taeyoung foi fundada na Coréia do Sul pelo engenheiro Seung-Jin Baek, buscando soluções efetivas para proteção de fiação e fitas de isolamento elétrico.</span>                      
                                <span className='text-base leading-6'>Com a fabricação One-stop, estamos fornecendo fitas de cablagens automotivas para montadoras globais, como GM, Ford, Hyundai, Kia, Renault-Nissan, Toyota e assim por diante.</span>
                                <span className='text-base leading-6'>Com sede na Coréia do Sul e nos EUA, operamos fábricas globais na Coréia do Sul, China, México, juntamente com agências de vendas na Índia, Brasil, Malásia e Filipinas.</span>
                                <span className='text-base leading-6'>Em busca das melhores fitas do mundo, estamos liderando as soluções de proteção de fita na indústria de chicotes automotivos.Visando o líder global, Taeyoung Tape continuará cumprindo nossos deveres de responsabilidade social e humanitária…</span>
                                <strong>para pessoas, meio ambiente e comunidades.</strong>               
                            </div>
                            <div>
                                <img
                                className='w-[1500px]'
                                src={HomeHeaderImg} alt="about_tae" />
                            </div>
                        </div>

                        <div className='flex justify-between items-center py-24'>
                        <div>
                            <img
                            className='w-[900px]'
                            src={InstituicionalImage} alt="about_tae" />
                        </div>
                        <div className='text-zinc-500 flex flex-col gap-3'>
                            <span className='text-3xl text-right'>Taeyoung traz o seu bem estar <strong>para a vida</strong>,</span>
                            <span className='text-base leading-6 text-right'>Em 1978, a Taeyoung foi fundada na Coréia do Sul pelo engenheiro Seung-Jin Baek, buscando soluções efetivas para proteção de fiação e fitas de isolamento elétrico.</span>                            
                        </div>
                        </div>

                        <div className='flex gap-6'>
                            {typeof InstitucionalIconBox !=="undefined" && InstitucionalIconBox.map((value, idx) => {
                                const Icon = iconsIconBox[idx]
                                return (
                                    <div className='flex flex-col p-6 py-10 border-zinc-100 text-zinc-600 border-solid border-[1px] rounded'>
                                    <div className='flex justify-center h-12 text-3xl'>{Icon}</div>
                                    <span className='text-lg font-bold text-center'>{value.title}</span>
                                    <span className='text-center'>{value.text}</span>
                                </div>
                                )
                            })}
                        </div>

                        <div className='py-10'>
                            <div className='p-10 shadow-lg rounded-lg flex flex-col gap-3 bg-gray-900 text-white relative isolate overflow-hidden z-0'>
                                <span className='text-3xl'>Conheça nossos Produtos</span>
                                <span>A Taeyoung é pioneira em negócios em diferentes mercados. Clique e conheça nossos produtos</span>
                                <CustomBtn
                                textColor="text-white"
                                bgColor="bg-primaryBlue"
                                text="Clique Aqui"
                                />
                                <svg viewBox="0 0 1024 1024" class="absolute z-10 h-[64rem] w-[64rem] -translate-y-1/3 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2" aria-hidden="true">
                                <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
                                <defs>
                                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                    <stop stop-color="#f43f5e" />
                                    <stop offset="1" stop-color="#f43f5e" />
                                </radialGradient>
                                </defs>
                                </svg>
                            </div>
                        </div>
                    </div>                
            </section>
            <SiteFooter/>
        </div>
    );
}

export default Empresa;
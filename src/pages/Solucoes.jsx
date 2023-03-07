import React from 'react';
import HeaderMenu from '../components/HeaderMenu';

import { BsChatRightText  } from "react-icons/bs";
import { BiLinkExternal, BiBookOpen } from "react-icons/bi";

import taeyoungTape from '../assets/taeyoungTape.png'
import doowon from '../assets/compressor.png'
import maskpro from '../assets/maskpro.png'

const Solucoes = () => {
    return (
        <div className='flex flex-col'>
            <HeaderMenu/>
            <div className='mt-24'>
                <div className='flex flex-col mb-14 py-24'>
                    <h2 className='font-heading font-bold text-3xl text-center'>Conheça nossos produtos em toda sua essência</h2>
                    <span className='text-center text-zinc-500'>Para cada ocasião temos o produto ideal</span>
                </div>
            </div>

            <div className='bg-sky-50 py-16'>
                <div className='flex justify-between px-[20%]'>
                    <div>
                        <img
                        className='w-[600px]'
                        src={taeyoungTape} alt="" />
                    </div>
                    <div className='flex flex-col gap-4 w-1/2'>
                        <span className='text-2xl font-heading text-zinc-600 font-bold'>Linha de fitas</span>
                        <span className='text-zinc-600 font-light'>Cada fita para cada aplicação! A linha PVC é feita visando a melhor flexibilidade de uso, com uma aderência perfeitamente desenvolvida e resistência a alterações metereológicas.</span>
                        <span className='text-zinc-600 font-light'><strong>Mais usado em</strong><br></br><span className='text-zinc-600'>Chicotes Automotivos, uso domésticos, concessionárias automotivas, loja de som e uso geral.</span></span>

                        <div className='flex items-center'>
                            <div className='bg-primaryBlue rounded-full p-2 mr-4'><BsChatRightText
                            size="18px"
                            color='white'
                            /></div>
                            <div className='flex flex-col'>
                                <span className='text-zinc-600 text-base font-bold font-heading'>Título</span>
                                <span className='text-zinc-500 font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nostrum magni architecto.</span>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div className='bg-primaryBlue rounded-full p-2 mr-4'><BsChatRightText
                            size="18px"
                            color='white'
                            /></div>
                            <div className='flex flex-col'>
                                <span className='text-zinc-600 text-base font-bold font-heading'>Título</span>
                                <span className='text-zinc-500 font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nostrum magni architecto.</span>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div className='bg-primaryBlue rounded-full p-2 mr-4'><BsChatRightText
                            size="18px"
                            color='white'
                            /></div>
                            <div className='flex flex-col'>
                                <span className='text-zinc-600 text-base font-bold font-heading'>Título</span>
                                <span className='text-zinc-500 font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nostrum magni architecto.</span>
                            </div>
                        </div>

                        <div className='flex gap-4'>
                            <a 
                            className='py-2 px-4 bg-primaryRose text-white rounded flex items-center gap-2'
                            href="https://taeyoungtape.com.br"><BiLinkExternal/> Acessar Site</a>
                            <a 
                            className='py-2 px-4 bg-primaryRose text-white rounded flex items-center gap-2'
                            href="#"><BiBookOpen/> Baixar datasheet</a>
                        </div>

                    </div>
                </div>
            </div>

            <div className='py-16'>
                <div className='flex justify-between px-[20%]'>
                    <div className='flex flex-col gap-4 w-1/2'>
                        <span className='text-2xl font-heading text-zinc-600 font-bold'>Maskpro</span>
                        <span className='text-zinc-600 font-light'>Cada fita para cada aplicação! A linha PVC é feita visando a melhor flexibilidade de uso, com uma aderência perfeitamente desenvolvida e resistência a alterações metereológicas.</span>
                        <span className='text-zinc-600 font-light'><strong>Mais usado em</strong><br></br><span className='text-zinc-600'>Chicotes Automotivos, uso domésticos, concessionárias automotivas, loja de som e uso geral.</span></span>

                        <div className='flex items-center'>
                            <div className='bg-primaryBlue rounded-full p-2 mr-4'><BsChatRightText
                            size="18px"
                            color='white'
                            /></div>
                            <div className='flex flex-col'>
                                <span className='text-zinc-600 text-base font-bold font-heading'>Título</span>
                                <span className='text-zinc-500 font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nostrum magni architecto.</span>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div className='bg-primaryBlue rounded-full p-2 mr-4'><BsChatRightText
                            size="18px"
                            color='white'
                            /></div>
                            <div className='flex flex-col'>
                                <span className='text-zinc-600 text-base font-bold font-heading'>Título</span>
                                <span className='text-zinc-500 font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nostrum magni architecto.</span>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div className='bg-primaryBlue rounded-full p-2 mr-4'><BsChatRightText
                            size="18px"
                            color='white'
                            /></div>
                            <div className='flex flex-col'>
                                <span className='text-zinc-600 text-base font-bold font-heading'>Título</span>
                                <span className='text-zinc-500 font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nostrum magni architecto.</span>
                            </div>
                        </div>

                        <div className='flex gap-4'>
                            <a 
                            className='py-2 px-4 bg-primaryRose text-white rounded flex items-center gap-2'
                            href="https://taeyoungtape.com.br"><BiLinkExternal/> Acessar Site</a>
                            <a 
                            className='py-2 px-4 bg-primaryRose text-white rounded flex items-center gap-2'
                            href="#"><BiBookOpen/> Baixar datasheet</a>
                        </div>

                    </div>
                    <div>
                        <img
                        className='w-[600px]'
                        src={maskpro} alt="" />
                    </div>
                </div>
            </div>

            <div className='bg-sky-50 py-16'>
                <div className='flex justify-between px-[20%]'>
                    <div>
                        <img
                        className='w-[600px]'
                        src={doowon} alt="" />
                    </div>
                    <div className='flex flex-col gap-4 w-1/2'>
                        <span className='text-2xl font-heading text-zinc-600 font-bold'>Linha de fitas</span>
                        <span className='text-zinc-600 font-light'>Cada fita para cada aplicação! A linha PVC é feita visando a melhor flexibilidade de uso, com uma aderência perfeitamente desenvolvida e resistência a alterações metereológicas.</span>
                        <span className='text-zinc-600 font-light'><strong>Mais usado em</strong><br></br><span className='text-zinc-600'>Chicotes Automotivos, uso domésticos, concessionárias automotivas, loja de som e uso geral.</span></span>

                        <div className='flex items-center'>
                            <div className='bg-primaryBlue rounded-full p-2 mr-4'><BsChatRightText
                            size="18px"
                            color='white'
                            /></div>
                            <div className='flex flex-col'>
                                <span className='text-zinc-600 text-base font-bold font-heading'>Título</span>
                                <span className='text-zinc-500 font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nostrum magni architecto.</span>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div className='bg-primaryBlue rounded-full p-2 mr-4'><BsChatRightText
                            size="18px"
                            color='white'
                            /></div>
                            <div className='flex flex-col'>
                                <span className='text-zinc-600 text-base font-bold font-heading'>Título</span>
                                <span className='text-zinc-500 font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nostrum magni architecto.</span>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div className='bg-primaryBlue rounded-full p-2 mr-4'><BsChatRightText
                            size="18px"
                            color='white'
                            /></div>
                            <div className='flex flex-col'>
                                <span className='text-zinc-600 text-base font-bold font-heading'>Título</span>
                                <span className='text-zinc-500 font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nostrum magni architecto.</span>
                            </div>
                        </div>

                        <div className='flex gap-4'>
                            <a 
                            className='py-2 px-4 bg-primaryRose text-white rounded flex items-center gap-2'
                            href="https://taeyoungtape.com.br"><BiLinkExternal/> Acessar Site</a>
                            <a 
                            className='py-2 px-4 bg-primaryRose text-white rounded flex items-center gap-2'
                            href="#"><BiBookOpen/> Baixar datasheet</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Solucoes;
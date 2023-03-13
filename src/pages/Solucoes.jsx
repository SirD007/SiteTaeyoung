import React from 'react';
import HeaderMenu from '../components/HeaderMenu';
import SiteFooter from '../components/SiteFooter';

import { BiLinkExternal, BiBookOpen } from "react-icons/bi";
import { FaFire, FaCheckDouble, FaLevelUpAlt, FaVolumeMute, FaTape, FaExpandAlt, FaRegThumbsUp } from 'react-icons/fa'

import linhapvc from '../assets/h131.png'
import linhatextil from '../assets/textil.png'
import linhaaltatensao from '../assets/r800.png'

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

            <div id='linhapvc' className='bg-white py-16'>
                <div className='flex justify-between px-[20%] items-center'>
                    <div>
                        <img
                        className='w-[400px]'
                        src={linhapvc} alt="" />
                    </div>
                    <div className='flex flex-col gap-4 w-1/2'>
                        <span className='text-2xl font-heading text-zinc-600 font-bold'>Linha PVC</span>
                        <span className='text-zinc-600 font-light'>Cada fita para cada aplicação! A linha PVC é feita visando a melhor flexibilidade de uso, com uma aderência perfeitamente desenvolvida e resistência a alterações metereológicas.</span>
                        <span className='text-zinc-600 font-light'><strong>Mais usado em</strong><br></br><span className='text-zinc-600'>Chicotes Automotivos, uso domésticos, concessionárias automotivas, loja de som e uso geral.</span></span>

                        <div className='flex items-center'>
                            <div className='bg-primaryBlue rounded-full p-2 mr-4'><FaFire
                            size="18px"
                            color='white'
                            /></div>
                            <div className='flex flex-col'>
                                <span className='text-zinc-600 text-base font-bold font-heading'>Anti-Chama</span>
                                <span className='text-zinc-500 font-light'>A linha PVC possuí resistência anti-chama, dando ao usuário uma maior segurança.</span>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div className='bg-primaryBlue rounded-full p-2 mr-4'><FaLevelUpAlt
                            size="18px"
                            color='white'
                            /></div>
                            <div className='flex flex-col'>
                                <span className='text-zinc-600 text-base font-bold font-heading'>Flexibilidade e Tração</span>
                                <span className='text-zinc-500 font-light'>Em um nível elevado, a flexibilidade das fitas PVC e sua resistência a tração traz praticidade em qualquer uso.</span>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div className='bg-primaryBlue rounded-full p-2 mr-4'><FaCheckDouble
                            size="18px"
                            color='white'
                            /></div>
                            <div className='flex flex-col'>
                                <span className='text-zinc-600 text-base font-bold font-heading'>Adesão a Superfícies</span>
                                <span className='text-zinc-500 font-light'>Ótima adesão as mais diversas superfícies, abrindo oportunidades para maiores utilizações.</span>
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

            <div id='linhatextil' className='py-16'>
                <div className='flex justify-between px-[20%] items-center'>
                    <div className='flex flex-col gap-4 w-1/2'>
                        <span className='text-2xl font-heading text-zinc-600 font-bold'>Linha Têxtil</span>
                        <span className='text-zinc-600 font-light'>Para aplicações que necessitam de atenção e uma resistência maior, a Linha Têxtil está pronta para encarar qualquer desafio de isolamento, contando com redução de ruído e extrema resistência.</span>
                        <span className='text-zinc-600 font-light'><strong>Mais usado em</strong><br></br><span className='text-zinc-600'>Chicotes Automotivos, Isolamento de Fios, enrolamento de cablagem automática e utilização em áreas de altas temperaturas.</span></span>

                        <div className='flex items-center'>
                            <div className='bg-primaryBlue rounded-full p-2 mr-4'><FaVolumeMute
                            size="18px"
                            color='white'
                            /></div>
                            <div className='flex flex-col'>
                                <span className='text-zinc-600 text-base font-bold font-heading'>Redução de Ruído</span>
                                <span className='text-zinc-500 font-light'>A prova de vibração e com característica anti-ruído.</span>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div className='bg-primaryBlue rounded-full p-2 mr-4'><FaFire
                            size="18px"
                            color='white'
                            /></div>
                            <div className='flex flex-col'>
                                <span className='text-zinc-600 text-base font-bold font-heading'>Resistente a Temperatura</span>
                                <span className='text-zinc-500 font-light'>Resiste a até 150ºC, dando oportunidades para maiores aplicações.</span>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div className='bg-primaryBlue rounded-full p-2 mr-4'><FaLevelUpAlt
                            size="18px"
                            color='white'
                            /></div>
                            <div className='flex flex-col'>
                                <span className='text-zinc-600 text-base font-bold font-heading'>Flexibilidade</span>
                                <span className='text-zinc-500 font-light'>Flexibilidade e maciez para uma aplicação suave sem deixar de lado a resistência.</span>
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
                        className='w-[400px]'
                        src={linhatextil} alt="" />
                    </div>
                </div>
            </div>

            <div id='linhaaltatensao' className='bg-white py-16'>
                <div className='flex justify-between px-[20%] items-center'>
                    <div>
                        <img
                        className='w-[400px]'
                        src={linhaaltatensao} alt="" />
                    </div>
                    <div className='flex flex-col gap-4 w-1/2'>
                        <span className='text-2xl font-heading text-zinc-600 font-bold'>Linha Alta Tensão</span>
                        <span className='text-zinc-600 font-light'>Fita à base de borracha de etileno-propileno com alta conformidade em qualquer tipo de superfície e formulada para fusão instantânea sem a necessidade de aquecimento.</span>
                        <span className='text-zinc-600 font-light'><strong>Mais usado em</strong><br></br><span className='text-zinc-600'>Fita de alta isolação para emendas e terminações de cabos de média voltagem.</span></span>

                        <div className='flex items-center'>
                            <div className='bg-primaryBlue rounded-full p-2 mr-4'><FaTape
                            size="18px"
                            color='white'
                            /></div>
                            <div className='flex flex-col'>
                                <span className='text-zinc-600 text-base font-bold font-heading'>Autofusão</span>
                                <span className='text-zinc-500 font-light'>Fita à base de borracha de etileno-propileno com alta conformidade em qualquer tipo de superfície e formulada para fusão instantânea sem a necessidade de aquecimento.</span>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div className='bg-primaryBlue rounded-full p-2 mr-4'><FaExpandAlt
                            size="18px"
                            color='white'
                            /></div>
                            <div className='flex flex-col'>
                                <span className='text-zinc-600 text-base font-bold font-heading'>Alongamento</span>
                                <span className='text-zinc-500 font-light'>Com alongamento de 600%, a fita de Alta Tensão proporciona isolação inviolável, resistente à umidade.</span>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div className='bg-primaryBlue rounded-full p-2 mr-4'><FaRegThumbsUp
                            size="18px"
                            color='white'
                            /></div>
                            <div className='flex flex-col'>
                                <span className='text-zinc-600 text-base font-bold font-heading'>Adesão a Superfícies</span>
                                <span className='text-zinc-500 font-light'>Ótima adesão as mais diversas superfícies, abrindo oportunidades para maiores utilizações.</span>
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
            <SiteFooter />
        </div>
    );
}

export default Solucoes;
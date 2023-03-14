import React from 'react';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import HeaderMenu from '../components/HeaderMenu';

import { BsChatRightText,  } from "react-icons/bs";
import { HiOutlineMail, HiPhone, HiOutlineClock } from "react-icons/hi";

import chicoteautomotivo from '../assets/chicoteautomotivo.jpg'
import avatardavid from '../assets/avatardavid.png'
import avatarevandro from '../assets/avatarevandro.png'
import avatargustavo from '../assets/avatargustavo.png'
import avatarperla from '../assets/avatarperla.png'
import avatarhelena from '../assets/avatarhelena.png'
import SiteFooter from '../components/SiteFooter';

const testimonials = [
    {
        id: '1',
        imgSrc: `${avatardavid}`,
        name: 'David Morais',
        sector: 'Marketing',
        text: 'Fazer parte do grande avanço que a Taeyoung vem conquistando, é gratificante. Sinto orgulho de fazer parte de um time engajado e profissional'
    },
    {
        id: '2',
        imgSrc: `${avatarevandro}`,
        name: 'Evandro David',
        sector: 'Comercial',
        text: 'É um imenso prazer fazer parte dessa evolução, com o foco em superar as expectativas de nossos clientes e criar novas oportunidades'
    },
    {
        id: '3',
        imgSrc: `${avatargustavo}`,
        name: 'Gustavo Santiago',
        sector: 'Comercial',
        text: 'A Taeyoung chegou para revolucionar e profissionalizar o mercado nos setores que atua no Brasil e é satisfatório fazer parte de tudo isso'
    },  
    {
        id: '4',
        imgSrc: `${avatarperla}`,
        name: 'Perla Antônio',
        sector: 'Comercial',
        text: 'A Taeyoung vem se tornando fenomenal, com um trabalho incrível sendo feito pela equipe ao longo dos anos, e tenho certeza que é daqui para melhor'
    },
    {
        id: '5',
        imgSrc: `${avatarhelena}`,
        name: 'Helena Jeong',
        sector: 'Diretora',
        text: 'O sucesso da Taeyoung é resultado de um esforço conjunto de toda uma equipe engajada a superar os desafios que aparecem no dia a dia'
    },
]

const Contato = () => {
    return (
        <div className='flex flex-col w-screen'>
            <HeaderMenu/>
            <div className='mt-24'>
            <div className='flex flex-col mb-14 py-24 max-md:py-10'>
                <h2 className='font-heading font-bold text-3xl text-center'>Vamos conversar</h2>
                <span className='text-center text-zinc-500'>Gostariamos muito de te ouvir, veja como nos contactar</span>
            </div>
            </div>

            <div className='flex items-center bg-slate-50 max-md:justify-center'>

                <div className='w-1/2 max-md:hidden'>
                    <img className='w-full' src={chicoteautomotivo} alt="chicoteautomotivo" />
                </div>

                <div className='bg-white p-10 shadow-xl rounded relative max-md:left-0 max-md:w-3/4 left-[-10%] w-1/2 max-md:items-center'>
                    <form class="mt-10">
                        <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="sector">
                            Area de Interesse
                            </label>
                            <select class="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="sector" type="sector">
                                <option value="Comercial">Comercial</option>                                
                                <option value="Marketing">Marketing</option>                                
                                <option value="Compras">Compras</option>                                
                                <option value="Logística">Logística</option>                                
                                <option value="Outros">Outros Assuntos</option>                                
                            </select>
                        </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Primeiro Nome
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500 focus:bg-white" id="grid-first-name" type="text" placeholder="James"></input>
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
                            Email
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="E-mail"></input>
                        </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="number">
                            Telefone
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="number" type="number"></input>
                        </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="city">
                            Cidade
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="city" type="city"></input>
                        </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="message">
                            Mensagem
                            </label>
                            <textarea class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
                        </div>
                        </div>
                        <div class="md:flex md:items-center">
                        <div class="md:w-1/3">
                            <button class="shadow bg-primaryBlue hover:opacity-90 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                            Enviar
                            </button>
                        </div>
                        <div class="md:w-2/3"></div>
                        </div>
                    </form>
                </div>
            </div>

            <div className='relative px-[20%] justify-center items-center'>
                <div className='items-center justify-center py-10'>
                    <Carousel
                    autoPlay="true"
                    infiniteLoop="true"
                    interval="6000"
                    emulateTouch="true"
                    showArrows="false"
                    showIndicators="false"
                    showThumbs="false"
                    renderIndicator= {() => {
                        return (
                            <div></div>
                        )
                    }}
                    renderArrowNext= {() => {
                        return (
                            <div></div>
                        )
                    }}
                    renderArrowPrev= {() => {
                        return (
                            <div></div>
                        )
                    }}
                    >
                        {testimonials.map((value) => {
                            return( 
                                <div className='flex flex-col gap-4'>
                                <span className='text-zinc-400 text-sm leading-snug text-left'>{value.text}</span>
                                
                                <div className='flex justify-between items-center'>
                                    <div className='flex items-center gap-4'>
                                        <img
                                        className='max-w-[70px]'
                                        src={value.imgSrc} alt="avatardavid" />
                                        <div className='flex flex-col text-left text-zinc-800'>
                                            <span className='font-bold'>{value.name}</span>
                                            <span className='text-sm text-zinc-400'>{value.sector}</span>
                                        </div>
                                    </div>
                                    <BsChatRightText
                                    color='#e2e8f0'
                                    size='60px'
                                    />
                                </div>
                            </div>
                            )
                        })}
                        </Carousel>
                    </div>
                </div>

            <div className='px-[20%] py-20 flex items-center justify-between max-lg:flex-col max-lg:gap-8'>
                <div>
                    <span className='text-zinc-800 uppercase text-sm font-bold'>Contato</span>
                    <div className='flex items-center gap-2 text-zinc-500'>
                        <HiOutlineMail
                        size='25px'
                        color="#2563eb"
                        />
                        <a href="mailto:contato@taeyoung.com.br">contato@taeyoung.com.br</a>    
                    </div>
                    <div className='flex items-center gap-2 text-zinc-500'>
                        <HiPhone
                        size='25px'
                        color="#2563eb"
                        />
                        <a href="tel:+551933758506">+55 19 3375-8506</a>
                    </div>
                    <div className='flex items-center gap-2 text-zinc-500'>
                        <HiOutlineClock
                        size='25px'
                        color="#2563eb"
                        />
                        <span>7:30 - 16:30</span>
                    </div>
                </div>
                <div class="mapouter">
                    <div class="gmap_canvas">
                        <iframe className='w-[600px] max-lg:w-auto' height="350" id="gmap_canvas" src="https://maps.google.com/maps?q=Rua%20Visconde%20de%20Taunay%2080&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    </div>
                </div>
            </div>
            <SiteFooter />
        </div>
    );
}

export default Contato;
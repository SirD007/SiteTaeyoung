import {React, useState} from 'react';

import HeaderMenu from '../components/HeaderMenu'
import SiteFooter from '../components/SiteFooter'
import CustomBtn from '../components/CustomBtn';

import { Link } from 'react-router-dom';

import "react-responsive-carousel/lib/styles/carousel.min.css";

import { FaBinoculars, FaPeopleArrows, FaAward, FaBullseye, FaPlayCircle, FaSlack, FaReply } from "react-icons/fa";

import costumerLogo1 from '../assets/costumerLogo1.png'
import costumerLogo2 from '../assets/costumerLogo2.png'
import costumerLogo3 from '../assets/costumerLogo3.png'
import costumerLogo4 from '../assets/costumerLogo4.png'
import costumerLogo5 from '../assets/costumerLogo5.png'
import costumerLogo6 from '../assets/costumerLogo6.png'
import costumerLogo7 from '../assets/costumerLogo7.png'
import costumerLogo8 from '../assets/costumerLogo8.png'
import datasheet from '../assets/datasheet.png'
import headerBgImg from '../assets/headerBgImg.jpg'
import HomeHeaderImg from '../assets/HomeHeaderImg.png'
import linhapvc from '../assets/linhapvc.png'
import linhatextil from '../assets/linhatextil.png'
import linhaaltatensao from '../assets/linhaaltatensao.png'

const Fitas = [
  {imageSrc: `${linhapvc}`, pillText: 'Linha PVC', contentText: 'Fita isolante de PVC elaborada para uso automotivo em ultra aderência', href: '/solucoes#maskpro'},
  {imageSrc: `${linhaaltatensao}`, pillText: 'Linha Alta Tensão', contentText: 'Fita à base de borracha de etileno-propileno com alta conformidade', href: '/solucoes#doowon'},
  {imageSrc: `${linhatextil}`, pillText: 'Linha Têxtil', contentText: 'Fita isolante para proteger os cabos e chicotes elétricos de alta temperatura', href: '/solucoes#tapes'}
]

const Home = () =>{

  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  const openModal = () => {
    setModal(!modal);
  };

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  return (
    <div>
    <HeaderMenu/>
      <main className='flex flex-col'>
        <section className='max-lg:justify-end max-lg:flex-col-reverse max-lg:px-[10%] px-[20%] flex h-screen justify-between items-center'>
          <img
          className='absolute z-0 top-0 left-0 opacity-50'
          src={headerBgImg} alt="" />

          <div className='max-lg:text-center w-1/2 flex flex-col z-10'>
            <div className="mb-10 flex flex-col gap-2">
              <h3 className="text-zinc-700 text-3xl font-heading">Reconhecida como <span className='text-zinc-700 text-3xl font-heading font-black'>líder mundial</span> em fita de isolamento elétrico de PVC</h3>
              <span className="text-zinc-700">A Taeyoung ouve seus sonhos o os trás à vida através de pensamento criativo e tecnologia inovadora. Juntos, nos esforçamos para alcançar a harmonia social e o respeito pelo seu bem-estar futuro.</span>
            </div>
              <Link to="/contato"><CustomBtn text="Entre em Contato" bgColor="bg-primaryBlue" textColor="text-white"/></Link>
          </div>

    <div className='z-20 max-lg:mt-[150px]'>
      <button onClick={openModal}>
      <FaPlayCircle
          className='cursor-pointer mr-32 max-lg:mr-0'
          size='10vw'
          color='#7f292d'
          />
        {modal ? (
          <section className="modal__bg fixed top-0 left-0 w-full h-full bg-[28,28,28,0.19] ease-out transition-[0.3s]">
            <div className="modal__align flex justify-center items-center h-[100vh]">
              <div className="modal__content w-[800px] h-[500px] shadow-xl rounded-xl bg-transparent text-white mx-[4rem]" modal={modal}>
                <FaReply
                  className="modal__close bg-white rounded-[50%] cursor-pointer relative bottom-12 w-8 h-8 p-0"
                  arial-label="Close modal"
                  onClick={setModal}
                />
                <div className="modal__video-align flex relative bottom-9">
                  {videoLoading ? (
                    <div className="modal__spinner fixed top-1/2 left-1/2 translate-x-[-50%,-50%] animate-spin text-[40px] text-primaryBlue">
                      <FaSlack
                        className="modal__spinner-style"
                        fadeIn="none"
                      />
                    </div>
                  ) : null}
                  <iframe
                    className="modal__video-style z-50"
                    onLoad={spinner}
                    loading="lazy"
                    width="800"
                    height="500"
                    src="https://www.youtube.com/embed/4UZrsTqkcW4"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        ) : null}
      </button>
    </div>

        </section>
    
        <section className='max-lg:px-[10%] px-[20%] flex justify-between items-center'>

            <div className='shadow-lg rounded-lg bg-white mt-[-150px] grid-cols-3 grid z-10 max-lg:flex flex-col-reverse'>

              <div className='max-sm:flex max-sm:flex-col grid-cols-2 grid gap-4 p-10 col-span-2 items-center'>

                <div className='flex gap-4 group items-start'>
                  <div className='group-hover:bg-primaryBlue rounded-[50%] min-h-[50px] min-w-[50px] max-h-[50px] max-w-[50px] bg-slate-100 flex items-center justify-center shadow-md'>
                    <FaBinoculars
                    size='20px'
                    className='fill-primaryBlue group-hover:fill-white'
                    />
                  </div>
                  <div className='flex flex-col'>
                      <span className='text-zinc-700 font-heading text-lg'>Estratégia e Planejamento</span>
                      <span className='text-zinc-400'>Liderança em comunicação aberta e responsabilidade e contribuição para sociedade</span>
                  </div>
                </div>

                <div className='flex gap-4 group items-start'>
                  <div className='group-hover:bg-primaryBlue rounded-[50%] min-h-[50px] min-w-[50px] max-h-[50px] max-w-[50px] bg-slate-100 flex items-center justify-center shadow-md'>
                    <FaPeopleArrows
                    size='20px'
                    className='fill-primaryBlue group-hover:fill-white'
                    />
                  </div>
                  <div className='flex flex-col'>
                      <span className='text-zinc-700 font-heading text-lg'>Cultura Integrada</span>
                      <span className='text-zinc-400'>Em constante evolução, criando uma cultura para se tornar cada vez melhor</span>
                  </div>
                </div>

                <div className='flex gap-4 group items-start'>
                  <div className='group-hover:bg-primaryBlue rounded-[50%] min-h-[50px] min-w-[50px] max-h-[50px] max-w-[50px] bg-slate-100 flex items-center justify-center shadow-md'>
                    <FaAward
                    size='20px'
                    className='fill-primaryBlue group-hover:fill-white'
                    />
                  </div>
                  <div className='flex flex-col'>
                      <span className='text-zinc-700 font-heading text-lg'>Liderança de Mercado</span>
                      <span className='text-zinc-400'>A Taeyoung tem foco constante para o desenvolvimento do produto líder de mercado</span>
                  </div>
                </div>

                <div className='flex gap-4 group items-start'>
                  <div className='group-hover:bg-primaryBlue rounded-[50%] min-h-[50px] min-w-[50px] max-h-[50px] max-w-[50px] bg-slate-100 flex items-center justify-center shadow-md'>
                    <FaBullseye
                    size='20px'
                    className='fill-primaryBlue group-hover:fill-white'
                    />
                  </div>
                  <div className='flex flex-col'>
                      <span className='text-zinc-700 font-heading text-lg'>Client First</span>
                      <span className='text-zinc-400'>Capacidades de marketing, estrutura e politicas orientadas para o cliente</span>
                  </div>
                </div>

              </div>

              <div className='bg-primaryBlue p-[2rem] flex flex-col gap-6'>
                  <span className='text-white font-bold'>Nosso orgulho</span>
                  <span className='text-white text-2xl'>9 anos de sucesso imbativel</span>
                  <span className='text-zinc-200'>A Taeyoung vem durante anos desempenhando o papel de agregar valor aos mercado que atua, com transparência nas negociações e serenidade no processo.</span>
                  <Link to='/empresa'>
                  <CustomBtn
                  bgColor="bg-primaryRose"
                  text="Sobre Nós"
                  textColor="text-white"
                  /></Link>
                </div>

            </div>

        </section>

        <section className='max-lg:px-[10%] px-[20%] my-[150px] flex flex-col'>
          <div className='max-lg:flex-col flex justify-between items-center w-full'>
            <div className='w-1/2'>
              <img 
              className='max-w-[400px] w-[40vw]'
              src={HomeHeaderImg} alt="manwoman_business" />
            </div>
            <div className='w-1/2 flex flex-col max-lg:w-full'>

              <div className='flex-col flex gap-6 w-full max-lg:col-auto'>
                <span className='bg-primaryBlue w-max py-1 px-2 rounded-full text-white font-bold text-xs'>Sobre a Empresa</span>
                <span className='font-heading font-bold text-3xl max-lg:text-center'>Negócios entre Brasil e Coréia do Sul</span>
                <span className='text-zinc-500 max-lg:text-center'>Em 1978, a Taeyoung foi fundada na Coréia do Sul pelo engenheiro Seung-Jin Baek, buscando soluções efetivas para proteção de fiação e fitas de isolamento elétrico. Hoje, somos uma potência em soluções efetivas no setores em que atuamos.</span>

                <Link to='/solucoes'>
                <CustomBtn
                  className='justify-center'
                  bgColor="bg-primaryRose"
                  text="Nossos produtos"
                  textColor="text-white"
                  /></Link>

                <div className='bg-slate-200 w-full h-[1px]'></div>

                <div className='flex gap-28'>
                  <div className='flex flex-col'>
                    <span className='font-heading font-bold text-2xl'>Portfólio</span>
                    <span className='text-zinc-500'>de qualidade</span>
                  </div>
                  <div className='flex flex-col'>
                    <span className='font-heading font-bold text-2xl'>9 anos</span>
                    <span className='text-zinc-500'>no Brasil</span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>
        
        <section className='max-lg:px-[10%] px-[20%] flex flex-col justify-center pb-20'>
          <div className='flex flex-col mb-14'>
            <h2 className='font-heading font-bold text-3xl text-center'>Principais Clientes</h2>
          </div>
          <div className='grid grid-flow-row sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
          <img
              className='min-w-[200px] border-[1px] rounded'
              src={costumerLogo1} alt="costumerLogo1" />
              <img
              className='min-w-[200px] border-[1px] rounded'
              src={costumerLogo2} alt="costumerLogo2" />
              <img
              className='min-w-[200px] border-[1px] rounded'
              src={costumerLogo3} alt="costumerLogo3" />
              <img
              className='min-w-[200px] border-[1px] rounded'
              src={costumerLogo4} alt="costumerLogo4" />
              <img
              className='min-w-[200px] border-[1px] rounded'
              src={costumerLogo5} alt="costumerLogo5" />
              <img
              className='min-w-[200px] border-[1px] rounded'
              src={costumerLogo6} alt="costumerLogo6" />
              <img
              className='min-w-[200px] border-[1px] rounded'
              src={costumerLogo7} alt="costumerLogo7" />
              <img
              className='min-w-[200px] border-[1px] rounded'
              src={costumerLogo8} alt="costumerLogo8" />
          </div>
          <div>
            <a
            className='float-right transition-all hover:bg-blue-600 bg-primaryBlue py-1 px-2 rounded text-white text-sm font-bold mt-5'
            href="#">Ver todos →</a>
          </div>

        </section>

        <section className='max-lg:px-[10%] px-[20%] flex flex-col'>
          <div className='flex flex-col mb-14'>
            <h2 className='font-heading font-bold text-3xl text-center'>Conheça nossas linhas</h2>
          </div>
          
          <div className='flex gap-4 max-md:flex-col'>
          {Fitas.map((value) => {
            return(
              <a href={value.href}>
              <div className='mx-auto max-w-full rounded-lg shadow-lg overflow-hidden md:max-w-2xl'>
                <div className='h-full w-full md:flex md:flex-col'>
                  <div className='overflow-hidden mx-auto max-w-full md:max-w-2xl'>
                    <img
                    className='object-cover'
                    src={value.imageSrc} alt="" />
                  </div>
                  <div className='p-8 flex flex-col gap-2'>
                    <span className='uppercase text-xs text-white font-semibold bg-primaryBlue rounded-full py-1 px-2 max-w-fit'>{value.pillText}</span>
                    <span className='text-zinc-500'>{value.contentText}</span>            
                  </div>
                </div>
              </div>
              </a>
            )
          })}
          </div>
        </section>

        <section className='max-lg:px-[10%] px-[20%] flex flex-col'>

        <div>
          <div class="mx-auto max-w-7xl py-24">
            <div class="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
              <svg viewBox="0 0 1024 1024" class="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2" aria-hidden="true">
                <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
                <defs>
                  <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                    <stop stop-color="#f43f5e" />
                    <stop offset="1" stop-color="#f43f5e" />
                  </radialGradient>
                </defs>
              </svg>
              <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">Tenha acesso as fichas tecnicas em suas mãos.</h2>
                <p className="mt-6 text-gray-300">Em apenas um clique tenha todas as especificações de nossos produtos para consulta.</p>
                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                  <a href="#" className="rounded-md bg-white px-3.5 py-1.5 text-base font-semibold leading-7 text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Baixe Agora</a>
                  <a href="/solucoes" className="text-base font-semibold leading-7 text-white">Ver Produtos<span aria-hidden="true">→</span></a>
                </div>
              </div>
              <div className="relative mt-16 h-80 lg:mt-8">
                <img className="absolute top-0 left-0 w-[28rem] max-w-none rounded-md" src={datasheet} alt="App screenshot" width="1824" height="1080"></img>
              </div>
            </div>
          </div>
        </div>

        </section>

        <section className='max-lg:px-[10%] px-[20%] mb-[150px] flex flex-col'>

          <div className='flex flex-col'>
            <div className='flex flex-col'>
              <span className='text-4xl font-heading text-center font-bold'>Contato</span>
              <span className='text-zinc-500 text-center'>Nossa equipe está de prontidão para melhor te atender! Entre em contato, te retornaremos em breve</span>
            </div>
            <form class="w-full mt-10">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  Primeiro Nome
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500 focus:bg-white" id="grid-first-name" type="text" placeholder="James"></input>
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                  Último Nome
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"></input>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                  E-mail
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email"></input>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                  Mensagem
                </label>
                <textarea class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
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
        
        </section>
        
      </main>
      <footer>
        <SiteFooter/>
      </footer>
    </div> 

  );
}

export default Home;
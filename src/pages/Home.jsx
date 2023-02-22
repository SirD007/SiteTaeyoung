import React from 'react';
import HeaderMenu from '../components/HeaderMenu'
import SiteFooter from '../components/footer'
import { Link } from 'react-router-dom';
import CustomBtn from '../components/CustomBtn';

import { FaBinoculars, FaPeopleArrows, FaAward, FaBullseye, FaPlayCircle } from "react-icons/fa";

const Setores = [
  {imageSrc: 'bg-secImg1', pillText: 'TaeyoungTape', contentText: 'As fitas Taeyoung possuem uma melhor qualidade e acabamento perfeito'},
  {imageSrc: 'bg-secImg2', pillText: 'Maskpro', contentText: 'Soluções Inteligentes de Mascaramento e Proteção de Superfícies'},
  {imageSrc: 'bg-secImg3', pillText: 'Doowon', contentText: 'Peças originais diretamente da fábrica, peças para arrefecimento automotivo'}
]

const Home = () =>{
  return (
    <div>
    <HeaderMenu/>
      <main className='flex flex-col'>
        <section className='px-[20%] flex h-screen justify-between items-center bg-headerImg bg-cover bg-no-repeat'>

          <div className='w-1/3 flex flex-col'>
            <div className="my-20 flex flex-col  gap-2">
              <h3 className="text-zinc-700 text-4xl font-heading font-black">Soluções Efetivas Lorem Ipsum Lorem</h3>
              <span className="text-zinc-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque enim ad odio saepe voluptatem eum rerum excepturi obcaecati animi voluptatibus consequuntur nostrum, assumenda quaerat hic id eos fugit nobis aliquid.</span>
            </div>
            <div className='flex gap-5'>
              <Link to="/contato"><CustomBtn text="Entre em Contato" bgColor="bg-primaryBlue" textColor="text-white"/></Link>
            </div>
          </div>

          <FaPlayCircle
          className='cursor-pointer mr-32'
          size='150px'
          color='#f43f5e'
          />

        </section>
    
        <section className='px-[20%] flex justify-between items-center'>

            <div className='shadow-lg rounded-lg bg-white mt-[-150px] grid-cols-3 grid'>

              <div className='grid-cols-2 grid gap-4 p-10 col-span-2 items-center'>

                <div className='flex gap-4 group'>
                  <div className='group-hover:bg-slate-200 rounded-[50%] min-h-[50px] min-w-[50px] max-h-[50px] max-w-[50px] bg-slate-100 flex items-center justify-center shadow-md'>
                    <FaBinoculars
                    size='20px'
                    color='#3b82f6'
                    />
                  </div>
                  <div className='flex flex-col'>
                      <span className='text-zinc-700 font-heading text-lg'>Estratégia e Planejamento</span>
                      <span className='text-zinc-400'>Liderança em comunicação aberta e responsabilidade e contribuição para sociedade</span>
                  </div>
                </div>

                <div className='flex gap-4 group'>
                  <div className='group-hover:bg-slate-200 rounded-[50%] min-h-[50px] min-w-[50px] max-h-[50px] max-w-[50px] bg-slate-100 flex items-center justify-center shadow-md'>
                    <FaPeopleArrows
                    size='20px'
                    color='#3b82f6'
                    />
                  </div>
                  <div className='flex flex-col'>
                      <span className='text-zinc-700 font-heading text-lg'>Cultura Integrada</span>
                      <span className='text-zinc-400'>Em constante evolução, criando uma cultura para se tornar cada vez melhor</span>
                  </div>
                </div>

                <div className='flex gap-4 group'>
                  <div className='group-hover:bg-slate-200 rounded-[50%] min-h-[50px] min-w-[50px] max-h-[50px] max-w-[50px] bg-slate-100 flex items-center justify-center shadow-md'>
                    <FaAward
                    size='20px'
                    color='#3b82f6'
                    />
                  </div>
                  <div className='flex flex-col'>
                      <span className='text-zinc-700 font-heading text-lg'>Liderança de Mercado</span>
                      <span className='text-zinc-400'>A Taeyoung tem foco constante para o desenvolvimento do produto líder de mercado</span>
                  </div>
                </div>

                <div className='flex gap-4 group'>
                  <div className='group-hover:bg-slate-200 rounded-[50%] min-h-[50px] min-w-[50px] max-h-[50px] max-w-[50px] bg-slate-100 flex items-center justify-center shadow-md'>
                    <FaBullseye
                    size='20px'
                    color='#3b82f6'
                    />
                  </div>
                  <div className='flex flex-col'>
                      <span className='text-zinc-700 font-heading text-lg'>Client First</span>
                      <span className='text-zinc-400'>Capacidades de marketing, estrutura e politicas orientadas para o cliente</span>
                  </div>
                </div>

              </div>

              <div className='bg-primaryBlue p-10 flex flex-col gap-6'>
                  <span className='text-white font-bold'>Nosso orgulho</span>
                  <span className='text-white text-2xl'>9 anos de sucesso imbativel</span>
                  <span className='text-zinc-200'>A Taeyoung ouve seus sonhos o os trás à vida através de pensamento criativo e tecnologia inovadora. Juntos, nos esforçamos para alcançar a harmonia social e o respeito pelo seu bem-estar futuro.</span>
                  <CustomBtn 
                  bgColor="bg-primaryRose"
                  text="Sobre Nós"
                  textColor="text-white"
                  />
                </div>

            </div>

        </section>

        <section className='px-[20%] my-[150px] flex flex-col'>
          <div className='flex justify-between items-center'>
            <div className='w-1/2'>
              <img 
              className='max-w-[500px]'
              src="src/assets/HomeHeaderImg.png" alt="manwoman_business" />
            </div>
            <div className='w-1/2 flex flex-col'>

              <div className='flex-col flex gap-6'>
                <span className='bg-primaryBlue w-max py-1 px-2 rounded-full text-white font-bold text-xs'>Sobre a Empresa</span>
                <span className='font-heading font-bold text-3xl'>Negócios entre Brasil e Coréia do Sul</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sequi nisi, cupiditate doloribus ipsa illum nulla. Exercitationem nobis quia cupiditate deleniti ad numquam, laboriosam commodi eos voluptatum maxime vitae cumque!</span>

                <CustomBtn 
                  bgColor="bg-primaryRose"
                  text="Nossos produtos"
                  textColor="text-white"
                  />

                <div className='bg-slate-200 w-full h-[1px]'></div>

                <div className='flex gap-28'>
                  <div className='flex flex-col'>
                    <span className='font-heading font-bold text-2xl'>Portfólio</span>
                    <span>de qualidade</span>
                  </div>
                  <div className='flex flex-col'>
                    <span className='font-heading font-bold text-2xl'>9 anos</span>
                    <span>no Brasil</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

            <div className='flex justify-between mt-10'>
              <img
              className='max-w-[100px]'
              src="./src/assets/costumerLogo1.png" alt="costumerLogo1" />
              <img
              className='max-w-[100px]'
              src="./src/assets/costumerLogo2.png" alt="costumerLogo2" />
              <img
              className='max-w-[100px]'
              src="./src/assets/costumerLogo3.png" alt="costumerLogo3" />
              <img
              className='max-w-[100px]'
              src="./src/assets/costumerLogo4.png" alt="costumerLogo4" />
              <img
              className='max-w-[100px]'
              src="./src/assets/costumerLogo5.png" alt="costumerLogo5" />
              <img
              className='max-w-[100px]'
              src="./src/assets/costumerLogo6.png" alt="costumerLogo6" />
            </div>
        </section>

        <section className='px-[20%] flex flex-col'>
          <div className='flex flex-col mb-14'>
            <h2 className='font-heading font-bold text-3xl text-center'>Nossos principais Segmentos</h2>
            <span className='text-center text-zinc-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nesciunt? Quo minima nulla dolorum doloremque? Quisquam quidem quos reiciendis modi dolor error cum eligendi odio, aliquid non. Nam, necessitatibus sapiente?</span>
          </div>
          
          <div className='flex justify-between'>
          {typeof Setores !== "undefined" && Setores.map((value) => {
            return(
              <div>
              <div className='flex flex-col w-[350px]'>
                <div className={`w-[350px] h-[200px] rounded-lg mb-5 hover:scale-95 transition-all ${value.imageSrc} bg-no-repeat bg-cover bg-center shadow-md`}></div>
                <div className='flex flex-col gap-4'>
                <span className='px-2 py-1 bg-primaryBlue w-max rounded-full text-xs text-white'>{value.pillText}</span>
                <span className='text-zinc-500'>{value.contentText}</span>
                <CustomBtn
                text="Saiba Mais"
                bgColor="bg-primaryRose"
                textColor="text-white"
                />                  
                </div>
              </div>
          </div>
            )
          })}
          </div>
        </section>

        <section className='px-[20%] flex flex-col'>

        <div class="bg-white">
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
                  <a href="#" className="text-base font-semibold leading-7 text-white">Ver Produtos<span aria-hidden="true">→</span></a>
                </div>
              </div>
              <div className="relative mt-16 h-80 lg:mt-8">
                <img className="absolute top-0 left-0 w-[28rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10" src="src/assets/datasheet.png" alt="App screenshot" width="1824" height="1080"></img>
              </div>
            </div>
          </div>
        </div>

        </section>

        <section className='px-[20%] mb-[150px] flex flex-col'>

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
                  Send
                </button>
              </div>
              <div class="md:w-2/3"></div>
            </div>
            </form>
          </div>
        
        </section>

      </main>
      <SiteFooter/>
    </div> 

  );
}

export default Home;
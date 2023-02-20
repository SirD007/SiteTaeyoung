import React from 'react';
import HeaderMenu from '../components/HeaderMenu'
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

        <section>

          <div>

          </div>

        </section>

      </main>
    </div> 

  );
}

export default Home;
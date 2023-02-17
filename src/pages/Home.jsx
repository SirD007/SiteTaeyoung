import React from 'react';
import HeaderMenu from '../components/HeaderMenu'
import { Link } from 'react-router-dom';
import CustomBtn from '../components/CustomBtn';

import { FaBeer } from 'react-icons/fa';

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
              <Link to="/contato"><CustomBtn text="Entre em Contato" bgColor="bg-rose-500" textColor="text-white"/></Link>
            </div>
          </div>

            <img className='max-w-[700px]' src="src/assets/HomeHeaderImg.png" alt="Img_header" />

        </section>
    
        <section className='px-[20%] flex justify-between items-center'>

            <div className='shadow-lg rounded-lg bg-white mt-[-50px] p-10'>
              <div className='grid-cols-2'>

                <div className='flex'>
                  <div className='rounded-full bg-slate-100 p-4 shadow-md'>
                    <FaBeer
                    color='#f43f5e'
                    />
                  </div>
                  <div className='flex flex-col'>
                      <span className='text-zinc-700 font-heading text-lg'>Estratégia e Planejamento</span>
                      <span className='text-zinc-400'>Liderança em comunicação aberta e responsabilidade e contribuição para sociedade</span>
                  </div>
                </div>

                <div className='flex'>
                  <div className='rounded-full bg-slate-100 p-4 shadow-md'>
                    <FaBeer
                    color='#f43f5e'
                    />
                  </div>
                  <div className='flex flex-col'>
                      <span className='text-zinc-700 font-heading text-lg'>Estratégia e Planejamento</span>
                      <span className='text-zinc-400'>Liderança em comunicação aberta e responsabilidade e contribuição para sociedade</span>
                  </div>
                </div>

                <div className='flex'>
                  <div className='rounded-full bg-slate-100 p-4 shadow-md'>
                    <FaBeer
                    color='#f43f5e'
                    />
                  </div>
                  <div className='flex flex-col'>
                      <span className='text-zinc-700 font-heading text-lg'>Estratégia e Planejamento</span>
                      <span className='text-zinc-400'>Liderança em comunicação aberta e responsabilidade e contribuição para sociedade</span>
                  </div>
                </div>

                <div className='flex'>
                  <div className='rounded-full bg-slate-100 p-4 shadow-md'>
                    <FaBeer
                    color='#f43f5e'
                    />
                  </div>
                  <div className='flex flex-col'>
                      <span className='text-zinc-700 font-heading text-lg'>Estratégia e Planejamento</span>
                      <span className='text-zinc-400'>Liderança em comunicação aberta e responsabilidade e contribuição para sociedade</span>
                  </div>
                </div>

              </div>
            </div>

        </section>
      </main>
    </div>

  );
}

export default Home;
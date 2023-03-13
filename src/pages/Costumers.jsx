import HeaderMenu from "../components/HeaderMenu";

import costumerLogo1 from '../assets/costumerLogo1.png'
import costumerLogo2 from '../assets/costumerLogo2.png'
import costumerLogo3 from '../assets/costumerLogo3.png'
import costumerLogo4 from '../assets/costumerLogo4.png'
import costumerLogo5 from '../assets/costumerLogo5.png'
import costumerLogo6 from '../assets/costumerLogo6.png'
import costumerLogo7 from '../assets/costumerLogo7.png'
import costumerLogo8 from '../assets/costumerLogo8.png'
import costumerLogo9 from '../assets/costumerLogo9.png'
import costumerLogo10 from '../assets/costumerLogo10.png'
import costumerLogo11 from '../assets/costumerLogo11.png'
import costumerLogo12 from '../assets/costumerLogo12.png'
import costumerLogo13 from '../assets/costumerLogo13.png'
import costumerLogo14 from '../assets/costumerLogo14.png'
import costumerLogo15 from '../assets/costumerLogo15.png'
import costumerLogo16 from '../assets/costumerLogo16.png'
import costumerLogo17 from '../assets/costumerLogo17.png'
import costumerLogo18 from '../assets/costumerLogo18.png'
import costumerLogo19 from '../assets/costumerLogo19.png'
import costumerLogo20 from '../assets/costumerLogo20.png'
import costumerLogo21 from '../assets/costumerLogo21.png'
import costumerLogo22 from '../assets/costumerLogo22.png'
import costumerLogo23 from '../assets/costumerLogo23.png'
import costumerLogo24 from '../assets/costumerLogo24.png'
import costumerLogo25 from '../assets/costumerLogo25.png'
import costumerLogo26 from '../assets/costumerLogo26.png'
import costumerLogo27 from '../assets/costumerLogo27.png'
import costumerLogo28 from '../assets/costumerLogo28.png'
import costumerLogo29 from '../assets/costumerLogo29.png'
import costumerLogo30 from '../assets/costumerLogo30.png'
import costumerLogo31 from '../assets/costumerLogo31.png'
import costumerLogo32 from '../assets/costumerLogo32.png'
import costumerLogo33 from '../assets/costumerLogo33.png'
import costumerLogo34 from '../assets/costumerLogo34.png'
import costumerLogo35 from '../assets/costumerLogo35.png'
import costumerLogo36 from '../assets/costumerLogo36.png'
import costumerLogo37 from '../assets/costumerLogo37.png'
import costumerLogo38 from '../assets/costumerLogo38.png'
import costumerLogo39 from '../assets/costumerLogo39.png'
import costumerLogo40 from '../assets/costumerLogo40.png'
import SiteFooter from "../components/SiteFooter";

const autoCostumerLogo = [
    {imgSrc:`${costumerLogo1}`},
    {imgSrc:`${costumerLogo2}`},
    {imgSrc:`${costumerLogo3}`},
    {imgSrc:`${costumerLogo4}`},
    {imgSrc:`${costumerLogo5}`},
    {imgSrc:`${costumerLogo6}`},
    {imgSrc:`${costumerLogo7}`},
    {imgSrc:`${costumerLogo8}`},
    {imgSrc:`${costumerLogo9}`},
    {imgSrc:`${costumerLogo10}`},
    {imgSrc:`${costumerLogo11}`},
    {imgSrc:`${costumerLogo12}`},
    {imgSrc:`${costumerLogo13}`},
    {imgSrc:`${costumerLogo14}`},
    {imgSrc:`${costumerLogo15}`},
    {imgSrc:`${costumerLogo16}`},
    {imgSrc:`${costumerLogo17}`},
    {imgSrc:`${costumerLogo18}`},
    {imgSrc:`${costumerLogo19}`},
    {imgSrc:`${costumerLogo20}`},
    {imgSrc:`${costumerLogo21}`},
    {imgSrc:`${costumerLogo22}`},
    {imgSrc:`${costumerLogo23}`},
    {imgSrc:`${costumerLogo24}`},
    {imgSrc:`${costumerLogo25}`},
    {imgSrc:`${costumerLogo26}`},
    {imgSrc:`${costumerLogo27}`},
    {imgSrc:`${costumerLogo28}`}
]

const eletrConstumerLogo = [
    {imgSrc: `${costumerLogo29}`},
    {imgSrc: `${costumerLogo30}`},
    {imgSrc: `${costumerLogo31}`},
    {imgSrc: `${costumerLogo32}`},
    {imgSrc: `${costumerLogo33}`},
    {imgSrc: `${costumerLogo34}`},
    {imgSrc: `${costumerLogo35}`}
]

const motorcycleConstumerLogo = [
    {imgSrc: `${costumerLogo36}`},
    {imgSrc: `${costumerLogo37}`},
    {imgSrc: `${costumerLogo38}`},
    {imgSrc: `${costumerLogo39}`},
    {imgSrc: `${costumerLogo40}`},
]

export default function Costumers () {
    return (
        <div>
            <HeaderMenu />
            <main className='flex flex-col'>            
                <section className='max-lg:justify-end max-lg:flex-col-reverse max-lg:px-[10%] px-[20%] flex py-10 mt-24'>
                    <div>
                        <div className='flex flex-col py-8'>
                            <span className='text-4xl font-heading text-center font-bold'>Nossos Clientes</span>
                            <span className='text-zinc-500 text-center'>Taeyoung se dedica a fornecer produtos e inovações superiores</span>
                        </div>
                        <div className="flex justify-center">
                            <span className="text-zinc-500 font-bold text-xl py-6">Automotivo</span>
                        </div>
                        <div className='grid grid-flow-row sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>

                            {autoCostumerLogo.map((value) => {
                                return (
                                    <img
                                    className='min-w-[200px] border-[1px] rounded'
                                    src={value.imgSrc} alt="costumerLogo1" />
                                )
                            })}
                        </div>
                        <div className="flex justify-center">
                            <span className="text-zinc-500 font-bold text-xl py-6">Eletrônico</span>
                        </div>
                        <div className='grid grid-flow-row sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>

                            {eletrConstumerLogo.map((value) => {
                                return (
                                    <img
                                    className='min-w-[200px] border-[1px] rounded'
                                    src={value.imgSrc} alt="costumerLogo1" />
                                )
                            })}
                        </div>
                        <div className="flex justify-center">
                            <span className="text-zinc-500 font-bold text-xl py-6">Motocicletas</span>
                        </div>
                        <div className='grid grid-flow-row sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>

                            {motorcycleConstumerLogo.map((value) => {
                                return (
                                    <img
                                    className='min-w-[200px] border-[1px] rounded'
                                    src={value.imgSrc} alt="costumerLogo1" />
                                )
                            })}
                        </div>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </div>
    )
}
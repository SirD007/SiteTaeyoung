import devicon from '../../public/devicon.png'
import { Link } from 'react-router-dom'

export default function Maint() {
    return (
      <div>
      <div className="h-screen w-screen bg-gray-900 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center bg-white p-16 rounded shadow-lg">
          <img className="max-w-[100px] mb-3" src={devicon} alt="em_desenvolvimento" />
          <span className="text-gray-800 font-bold text-center">Site em Desenvolvimento</span>
          <span className="text-gray-800 text-center">Nosso site se encontra em desenvolvimento para melhor atendê-lo, volte em breve</span>
          <Link className='mt-4' to="/home"><button className='bg-green-600 hover:bg-green-500 p-2 rounded text-white transition-all'>Entrar no site</button></Link>
        </div>
      </div>
      </div>
    )
  }
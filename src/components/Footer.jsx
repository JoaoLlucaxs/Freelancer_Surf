import {FaDribbbleSquare,FaFacebookSquare,FaGithubSquare,FaInstagramSquare,FaTwitterSquare} from 'react-icons/fa'
import logo from '../assets/surfbot-logo.svg'
const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#1188EE]'><img src={logo}/></h1>
            <p className='py-4'>Surfbot a melhor escola do Brasil</p>
            <div className='flex justify-between md:w-[75%] my-6'>
                <FaFacebookSquare size={30}/>
                <FaInstagramSquare size={30}/>
                <FaTwitterSquare size={30}/>
                <FaGithubSquare size={30}/>
                <FaDribbbleSquare size={30}/>
            </div>
        </div>
        <div className='lg:col-span-3 flex justify-between'>
            <div>
                <h6 className='font-medium text-gray-400'>Soluções</h6>
                <ul>
                    <li className='py2 text-sm'>Aulas</li>
                    <li className='py2 text-sm'>Kits</li>
                    <li className='py2 text-sm'>Atendimento</li>
                    <li className='py2 text-sm'>Suporte</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Suporte</h6>
                <ul>
                    <li className='py2 text-sm'>Aulas</li>
                    <li className='py2 text-sm'>Kits</li>
                    <li className='py2 text-sm'>Atendimento</li>
                    <li className='py2 text-sm'>Suporte</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Atendimento</h6>
                <ul>
                    <li className='py2 text-sm'>Aulas</li>
                    <li className='py2 text-sm'>Kits</li>
                    <li className='py2 text-sm'>Atendimento</li>
                    <li className='py2 text-sm'>Suporte</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer
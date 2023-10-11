import {useState} from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import logo from '../assets/surfbot-logo.svg'

const NavBar = () => {
    const[nav,setNav]=useState(false);
    const handleNav=()=>{
        setNav(!nav);
    }

  return (
    <div className= "flex justify-between items-center  h-24 max-w-[1240px] mx-auto px-4 text-white">
       <h1 className="w-full text-3xl font-bold text-[#1188EE] m-8">
        <img src={logo}/>
       </h1>
        <ul className="hidden md:flex">
            <li className="p-4">Início</li>
            <li className="p-4">Contato</li>
            <li className="p-4">Sobre</li>
            <li className="p-4">Trabalho</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={30}/>}
            
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#1188EE] ease-in-out duration-500' : "fixed right-[100%]"}>
        <h1 className="w-full text-3xl font-bold text-[#1188EE] m-8"><img src={logo}/></h1>
        <ul className='uppercase p-4'>
            <li className="p-4 border-b">Início</li>
            <li className="p-4 border-b">Contato</li>
            <li className="p-4 border-b">Sobre</li>
            <li className="p-4 border-b">Trabalho</li>
        </ul>
        </div>
    </div>
  )
}

export default NavBar
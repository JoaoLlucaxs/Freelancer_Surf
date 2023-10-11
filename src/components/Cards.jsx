import icon from '../assets/surfbot-icon.png'

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
        <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8">
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                <img className='w-15 mx-auto mt-[-3rem]' src={icon} alt='icone'/>
                <h2 className='text-2xl font-bold text-center py-8'>Crianças</h2>
                <p className='text-center text-4xl font-bold'>R$ 120 Mensal</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Aulas 3 vezes na semana</p>
                    <p className='py-2 border-b mx-8'>Prancha Por conta</p>
                    <p className='py-2 border-b mx-8'>Horário 13:30</p>
                </div>
                <button className="bg-[#1188EE] w-[200px] rounded font-medium my-6 mx-auto py-3 text-white">Contratar</button>
            </div>
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                <img className='w-15 mx-auto mt-[-3rem]' src={icon} alt='icone'/>
                <h2 className='text-2xl font-bold text-center py-8'>Jovens</h2>
                <p className='text-center text-4xl font-bold'>R$ 180 Mensal</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Aulas 4 vezes na semana</p>
                    <p className='py-2 border-b mx-8'>Prancha Por conta</p>
                    <p className='py-2 border-b mx-8'>Horário 14:30</p>
                </div>
                <button className="bg-[#EE2211] w-[200px] rounded font-medium my-6 mx-auto py-3 text-white">Contratar</button>
            </div>
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                <img className='w-15 mx-auto mt-[-3rem]' src={icon} alt='icone'/>
                <h2 className='text-2xl font-bold text-center py-8'>Adulto</h2>
                <p className='text-center text-4xl font-bold'>R$ 190 Mensal</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Aulas 4 vezes na semana</p>
                    <p className='py-2 border-b mx-8'>Prancha Por conta</p>
                    <p className='py-2 border-b mx-8'>Horário 14:30</p>
                </div>
                <button className="bg-[#1188EE] w-[200px] rounded font-medium my-6 mx-auto py-3 text-white">Contratar</button>
            </div>
        </div>
    </div>
  )
}

export default Cards
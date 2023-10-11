import image from '../assets/foto-galeria.jpg'

const Sobre = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <img className='w-[500px] mx-auto my-4' src={image} alt='imagem ilustrativa'/>
            <div className='flex flex-col justify-center'>
                <p className='text-[#3475ad] font-bold'>UM POUCO SOBRE NÓS</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>VÁRIOS LUGARES DO BRASIL</h1>
                <p>Temos espirito de família, fundada no ano de 2001 Surfbot tem sua 
                    meta formar milhões de surfistas seja crianças, jovens, mais velhos,
                    possuimos os melhores equipamentos e melhores professores da região
                </p>
                <button className='bg-[#EE2211] w-[200px] rounded font-medium my-6 mx-auto md:mx-0 py-3 text-white'>Vamos Nessa!</button>
            </div>
        </div>
    </div>
  )
}

export default Sobre
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className="text-white">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            <p className="text-[#1188EE] font-bold p-2">A MELHOR ESCOLA DE SURF DO BRASIL</p>
            <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">AGENDE JÁ</h1>
            <div>
                <p className="md:text-5xl sm:text-4xl text-xl font-bold">profissional, prático , semanal </p>
                <Typed
                className="md:text-5xl sm:text-4xl text-xl font-bold"
                 strings={['SURF','SPORT','SAÚDE']} typeSpeed={120} backSpeed={140} loop/>
            </div>
            <button className='bg-[#fff] w-[200px] rounded font-medium my-6 mx-auto py-3 text-black'>Agende Já</button>
        </div>
    </div>
  )
}

export default Hero
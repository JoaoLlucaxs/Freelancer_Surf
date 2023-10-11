

const Contato = () => {
  return (
    <div className="w-full py-16  text-white px-4">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
            <div className="lg:col-span-2 m-4">
                <h1 className="md:text-5xl sm:text-3xl text-2xl font-bold py-2">Quer falar conosco diretamente pelo E-mail?</h1>
                <p>Informe seu e-mail ao lado</p>
            </div>
            <div className="my-4">
                <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                    <input className="p-3 flex w-full rounded-md text-black" type="email" placeholder="Informe o e-mail" />
                    <button className="bg-[#1188EE] w-[200px] rounded font-medium my-6 mx-auto py-3 text-white">Enviar</button>
                </div>
                <p>Nós trabalhamos com <span className="text-[#1188EE]"> Política de privacidade</span></p>
            </div>
            
        </div>
    </div>
  )
}

export default Contato
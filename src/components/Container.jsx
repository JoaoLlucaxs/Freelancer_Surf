import quote from '../assets/quote.png'

const Container = () => {
  return (
    <div className="max-w-[100%] mx-auto ">
        <img className='max-w-[100%] mx-auto' src={quote} alt=''/>
    </div>
  )
}
//grid md:grid-cols-1
export default Container
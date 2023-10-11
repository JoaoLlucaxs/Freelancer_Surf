import Cards from "./components/Cards"
import Container from "./components/Container"
import Contato from "./components/Contato"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import Sobre from "./components/Sobre"

function App() {

  return (
    <div>
      <NavBar/>
      <Hero/>
      <Sobre/>
      <Container/>
      <Contato/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App

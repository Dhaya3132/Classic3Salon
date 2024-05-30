import './App.css'
import Navbar from './Components/NavBar/Navbar';
import  Offer  from './Components/Offer';
import  Head  from './Components/Header/Head';
import { MovingText } from './Components/MovingText';
import { About } from './Components/About/AboutUs';
function App() {

  return (
    <>
    <Offer></Offer>
    <Navbar></Navbar>
    <Head></Head>
    <MovingText></MovingText>
    <About />
    </>
  )
}

export default App;

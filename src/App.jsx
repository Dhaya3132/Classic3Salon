import './App.css'
import Navbar from './Components/NavBar/Navbar';
import  Offer  from './Components/Offer';
import  Head  from './Components/Header/Head';
import { MovingText } from './Components/MovingText';
import { About } from './Components/About/AboutUs';
import Service from './Components/Servicess/Service';
import Appoinment from './Components/Appoinment';
function App() {

  return (
    <>
    <Offer></Offer>
    <Navbar></Navbar>
    <Head></Head>
    <MovingText></MovingText>
    <About />
    <Service></Service>
    <Appoinment />
    </>
  )
}

export default App;

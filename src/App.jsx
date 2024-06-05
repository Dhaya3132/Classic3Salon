import './App.css'
import Navbar from './Components/NavBar/Navbar';
import Offer from './Components/Offer';
import Head from './Components/Header/Head';
import { MovingText } from './Components/MovingText';
import { About } from './Components/About/AboutUs';
import Service from './Components/Servicess/Service';
import Appoinment from './Components/Appoinment';
import Customers from './Components/Customer/Customers';
import Trend from './Components/Trend';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <div className='bg-black'>
      <Offer></Offer>
      <Navbar></Navbar>
      <Head></Head>
      <MovingText></MovingText>
      <About />
      <Service></Service>
      <Appoinment />
      <Customers></Customers>
      <Trend></Trend>
      <Footer></Footer>
    </div>
  )
}

export default App;

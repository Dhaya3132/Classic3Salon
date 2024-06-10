import './App.css'
import {Navbar} from 'src\Components\NavBar\Navbar.jsx';
import Offer from './Components/Offer';
import Head from './Components/Header/Head';
import { MovingText } from './Components/MovingText';
import { About } from './Components/About/AboutUs';
import Service from './Components/Servicess/Service';
import Customers from './Components/Customer/Customers';
import Trend from './Components/Trend';
import Footer from './Components/Footer/Footer';


function App() {

  return (
    <div>
      <div className='bg-black'>
        <Navbar></Navbar>
        <Offer></Offer>
        <Head></Head>
        <MovingText></MovingText>
      </div>
      <About></About>
      <Service></Service>
      <Customers></Customers>
      <Trend></Trend>
      <Footer></Footer>
    </div>
  )
}

export default App;

import './App.css'
import Navbar from './Components/NavBar/Navbar';
import  Offer  from './Components/Offer';
import  Head  from './Components/Header/Head';
import { MovingText } from './Components/MovingText';
function App() {

  return (
    <>
    <Offer></Offer>
    <Navbar></Navbar>
    <Head></Head>
    <MovingText></MovingText>
    </>
  )
}

export default App;

import './App.css'
import './Components/Navbar';
import { Navbar } from './Components/Navbar';
import { Head } from './Components/Head';
import { About } from './Components/AboutUs';
function App() {

  return (
    <div className="bg-BackgroundColor">
      <Navbar></Navbar>
      <Head></Head>
      <About></About>
    </div>
  )
}

export default App;

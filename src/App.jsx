import {Route, Routes} from 'react-router-dom'
import Homepage from './Homepage'
import {Shop} from './components/Shop'
import {Contact} from './components/Contact'
import Navbar from './components/Navbar'
import {About} from './components/About'
import { Footer } from "./components/Footer";

function App() {

  return (
<>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/shop' element={<Shop />} />
    
    </Routes>


<Footer />  
</>
  )
}


export default App


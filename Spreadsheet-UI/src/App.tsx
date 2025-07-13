
import './App.css'
import { Buttons } from './component/Buttons'
import { Financial } from './component/Financial'
import { Footer } from './component/Footer'
import { Navbar } from './component/Navbar'
import SpreadsheetView from './component/SpreadsheeView'

function App() {

  return (
   <div>
    <Navbar />
    <Buttons />
        <Financial />
    <SpreadsheetView />
    <Footer />
   </div>
  )
}

export default App

import './App.css'
import { BrowserRouter, Routes, Route} from "react-router"
import Navbar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Error404 from './components/Error404/Error404'

function App() {

  return (
    <BrowserRouter>
      <Navbar />  
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

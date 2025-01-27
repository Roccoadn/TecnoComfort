import './App.css'
import Navbar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
function App() {

  return (
    <main>
      <Navbar />
      <ItemListContainer texto='Proximamente los productos se mostraran aqui.'/>
    </main>
  )
}

export default App

import './App.css'
import Titulo from './components/Titulo/Titulo';
import NavBar from './components/NavBar/NavBar';

function App() {

  const saludo ="Hola Mundo";

  return (
    <div>
      <NavBar />
      <h1>Bienvenidos al cuso de React JS</h1>
      <Titulo />
    </div>
  )
}

export default App


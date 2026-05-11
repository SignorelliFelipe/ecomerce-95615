import './App.css'
import Titulo from './components/ejemplos/Titulo/Titulo';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Contador from './components/ejemplos/Contador/Contador';
import ContadorContainer from './components/ejemplos/ContadorContainer/ContadorContainer';

function App() {

  //const saludo ="Hola Mundo";
  function saludando(){
    alert("Saludos desde el compoonente App");
  }

  return (
    <div>
      <NavBar />
      <Titulo />


      <ItemListContainer saludo="Bienvenidos a mi ecomerce" saludando={saludando} />
      <ItemListContainer  />

      <ContadorContainer />

    </div>
  )
}

export default App


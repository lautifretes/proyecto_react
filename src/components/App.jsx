
import './App.css';
import Contador from './Contador/Contador.jsx';
import Navbar from './NavBar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer.jsx';
export const App = () => {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting={"agregue producto"}/>
      <Contador/>
      <Saludo mensaje={"bienvenidos a Dulce Chloe"}/>
    </div>
    
  );
}

export default App;

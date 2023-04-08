
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
      
    </div>
    
  );
}

export default App;

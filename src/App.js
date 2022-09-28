import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <div className='container'>
      <Navbar />
      <ItemListContainer greeting='Bienvenidos a nuestro Catálogo de Productos'/>
      <div className='fondo'></div>
    </div>
  );
};

export default App;

import { Component } from 'react'; 
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Brand from './components/Brand';
// import './app.css'

const App = () => {
  return (
    <div className='container'>
      {/* {brand} */}
      {/* <Brand>Autocor</Brand> */}
      <Navbar />
      <ItemListContainer greeting='Bienvenidos a nuestro Catálogo de Productos'/>
      <div className='fondo'></div>
    </div>
  );
};

export default App;

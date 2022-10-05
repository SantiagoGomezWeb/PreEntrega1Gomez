import React from 'react';
import './App.css';
// import Counter from './components/Counter/Counter';
import Navbar from './components/Header/Navbar/Navbar';
import ItemListContainer from './components/Main/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import ItemCount from './components/Main/ItemCount/ItemCount';
import ItemDetailContainer from './components/Main/ItemDetailContainer/ItemDetailContainer';

const App = () => {
  return (
    <div className='container'>
      <Navbar />
      <main>
        <div className='fondo'>
          <ItemListContainer greeting='Bienvenidos a nuestro Catálogo de Productos'/>
          <ItemDetailContainer />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;

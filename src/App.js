import Navbar from "./components/Navbar";
import ItemListContainser from "./components/ItemListContainer";


const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainser greeting='Bienvenidos a nuestro Catálogo de Productos'/>
      <div className="fondo"></div>
    </>
  );
};

export default App;

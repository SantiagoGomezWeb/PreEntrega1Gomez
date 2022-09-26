import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting='Bienvenidos a nuestro Catálogo de Productos'/>
      <div className="fondo"></div>
    </>
  );
};

export default App;

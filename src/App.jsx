import TituloPrincipal from "./componentes/TituloPrincipal/TituloPrincipal";
import NavBar from "./componentes/NavBar/NavBar";
import ItemCount from "./componentes/ItemCount/ItemCount";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";

const App = () => {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={'Mis productos'}/>

    <ItemCount/>

    </>
  )
}

export default App
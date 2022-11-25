import React from 'react'
import './App.css'
//import navbarTienda from './Components/navbarTienda';
import BarraNav from './Components/BarraNav';
import ItemListContainer from './Components/ItemListContainer';
function App() {
  return ( 
    <div className='App'  > 
     <BarraNav></BarraNav>
         

       <ItemListContainer className = '.App-header' greeting = {"Hola, Bienvenid@ a nuestro sitio"}  ></ItemListContainer>
    </div>
    
  );
}

export default App;

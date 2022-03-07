 import React from 'react';
 import {
  Routes,
  Route,
  
} from "react-router-dom";
import Pokedex from './Pokedex';
import Pokemon from './Pokemon';


function App() {
  return (
 <Routes>
   {/* <Route exact path='/' element={(props)=><Pokedex{...props}/>} />
   <Route  path='/:pokeid' element={(props)=><Pokemon{...props}/>}/> */}
   <Route  path='/' element={<Pokedex/>}/>
   <Route  path='/:pokemonId' element={<Pokemon/>}/>
 </Routes> 
   
  );
}

export default App;

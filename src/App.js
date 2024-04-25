
import './App.css';
import ListItem from './pages/ListItem';
import { Route, Routes } from 'react-router-dom';
import ItemDetail from './pages/ItemDetail';
import Home from './pages/Home';
import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import AddItem from './pages/AddItem';

export const DataContext = React.createContext();

function App() {
  const [data,setData] = useState([]);

  const user = {name: "Asdf" ,auth : 1}

  useEffect(()=>{
  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response=>{
    setData(response.data);

  });
},[]);

useEffect(()=>{

  console.log(data);
},[]);
  return (
    <div className="App">

      <DataContext.Provider value={{data}}>
    <Routes>  
      <Route path='/item'element={<ListItem/>}/>
      <Route path='/item/:id'element={<ItemDetail/>}/>
      <Route path='/' element= {<Home user={user} data={data}/>}/>
      <Route path='/AddItem' element= {<AddItem/>}/>
    </Routes>
    </DataContext.Provider>
  
      

     
    </div>
  );
}

export default App;
